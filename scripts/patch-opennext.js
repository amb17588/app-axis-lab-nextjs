#!/usr/bin/env node
/**
 * Patches OpenNext build output after every `npm run build:cf`.
 *
 * THE DEFINITIVE FIX (Patch 3 below):
 * Stash the original CF Workers request body text in the Cloudflare ALS context
 * *before* OpenNext's middleware reads and corrupts it.  The route handler then
 * reads from that stash via getCloudflareContext()._bodyText, bypassing the
 * broken body pipeline entirely.
 *
 * Patches 1 & 2 are kept as defence-in-depth but are no longer the primary fix.
 */

const fs = require('fs')
const path = require('path')

// ─── Patch 1: middleware/handler.mjs ─────────────────────────────────────────
const handlerPath = path.join(__dirname, '..', '.open-next', 'middleware', 'handler.mjs')

if (!fs.existsSync(handlerPath)) {
  console.error('[patch-opennext] middleware/handler.mjs not found — skipping handler patch')
} else {
  const handlerSrc = fs.readFileSync(handlerPath, 'utf8')
  const HANDLER_OLD = 'const body = shouldHaveBody ? Buffer2.from(await event.arrayBuffer()) : void 0;'
  const HANDLER_NEW = 'const body = shouldHaveBody ? new Uint8Array(await event.arrayBuffer()) : void 0;'

  if (handlerSrc.includes(HANDLER_NEW)) {
    console.log('[patch-opennext] handler.mjs already patched — skipping.')
  } else if (!handlerSrc.includes(HANDLER_OLD)) {
    console.warn('[patch-opennext] handler.mjs patch target not found — skipping.')
  } else {
    fs.writeFileSync(handlerPath, handlerSrc.replace(HANDLER_OLD, HANDLER_NEW), 'utf8')
    console.log('[patch-opennext] handler.mjs patched successfully.')
  }
}

// ─── Patch 2: cloudflare/init.js (CustomRequest — defensive) ─────────────────
const initPath = path.join(__dirname, '..', '.open-next', 'cloudflare', 'init.js')

if (!fs.existsSync(initPath)) {
  console.error('[patch-opennext] init.js not found — skipping')
  process.exit(0)
}

let initSrc = fs.readFileSync(initPath, 'utf8')

const INIT_BODY_OLD = `        Object.defineProperty(init2, "body", {
          // @ts-ignore
          value: init2.body instanceof stream.Readable ? ReadableStream.from(init2.body) : init2.body
        });`

const INIT_BODY_NEW = `        let _body = init2.body;
        if (_body instanceof stream.Readable) {
          _body = ReadableStream.from(_body);
        } else if (
          _body != null &&
          typeof _body !== "string" &&
          !(_body instanceof ArrayBuffer) &&
          !ArrayBuffer.isView(_body) &&
          !(_body instanceof FormData) &&
          !(_body instanceof URLSearchParams) &&
          !(_body instanceof ReadableStream) &&
          typeof _body.length === "number"
        ) {
          const len = _body.length;
          const bytes = new Uint8Array(len);
          for (let i = 0; i < len; i++) bytes[i] = _body[i] & 0xff;
          _body = bytes;
        }
        Object.defineProperty(init2, "body", {
          // @ts-ignore
          value: _body,
          writable: true,
          enumerable: true,
          configurable: true,
        });`

if (initSrc.includes(INIT_BODY_OLD)) {
  initSrc = initSrc.replace(INIT_BODY_OLD, INIT_BODY_NEW)
  console.log('[patch-opennext] init.js CustomRequest patched successfully.')
} else if (initSrc.includes('ArrayBuffer.isView')) {
  console.log('[patch-opennext] init.js CustomRequest already patched — skipping.')
} else {
  console.warn('[patch-opennext] init.js CustomRequest patch target not found — skipping.')
}

// ─── Patch 3: cloudflare/init.js (runWithCloudflareRequestContext) ────────────
// Stash the original request body text in the Cloudflare ALS context BEFORE the
// OpenNext middleware reads and corrupts it.  The route handler reads from
// getCloudflareContext()._bodyText to bypass the broken body pipeline.
const INIT_CTX_OLD = `async function runWithCloudflareRequestContext(request, env, ctx, handler) {
  init(request, env);
  return cloudflareContextALS.run({ env, ctx, cf: request.cf }, handler);
}`

const INIT_CTX_NEW = `async function runWithCloudflareRequestContext(request, env, ctx, handler) {
  init(request, env);
  let _bodyText = void 0;
  if (request.method !== "GET" && request.method !== "HEAD") {
    try { _bodyText = await request.clone().text(); } catch {}
  }
  return cloudflareContextALS.run({ env, ctx, cf: request.cf, _bodyText }, handler);
}`

if (initSrc.includes(INIT_CTX_NEW) || initSrc.includes('_bodyText')) {
  console.log('[patch-opennext] init.js context patch already applied — skipping.')
} else if (!initSrc.includes(INIT_CTX_OLD)) {
  console.warn('[patch-opennext] init.js context patch target not found — skipping.')
} else {
  initSrc = initSrc.replace(INIT_CTX_OLD, INIT_CTX_NEW)
  console.log('[patch-opennext] init.js context (_bodyText) patched successfully.')
}

fs.writeFileSync(initPath, initSrc, 'utf8')
