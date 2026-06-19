#!/usr/bin/env node
/**
 * Patches OpenNext build output after every `npm run build:cf`.
 *
 * Root cause: OpenNext's edge converter (middleware/handler.mjs) reads the POST
 * request body from the native CF Workers Request via `event.arrayBuffer()`, then
 * wraps those bytes in a Node.js Buffer (`Buffer2.from(ab)`).  That Buffer is later
 * passed as the `body` init option to `new Request(url, { body: Buffer })`.
 * CF Workers does not recognise a Node.js Buffer polyfill as a valid BodyInit —
 * it coerces it via Object.prototype.toString(), producing "[object Object]" as
 * the body bytes.  Route handlers then receive that literal string instead of the
 * original payload, so JSON.parse fails.
 *
 * Fix: patch the one line in middleware/handler.mjs that creates the Buffer so it
 * creates a native Uint8Array instead (`new Uint8Array(ab)`).  CF Workers always
 * accepts a native Uint8Array as a valid BodyInit.
 *
 * A secondary defensive patch is also applied to init.js (CustomRequest) so that
 * any other place that might pass a Buffer-like object to `new Request` is also
 * handled.
 */

const fs = require('fs')
const path = require('path')

// ─── Patch 1: middleware/handler.mjs ─────────────────────────────────────────
// Replace the one line that converts the request body to a Node.js Buffer with
// a native Uint8Array constructor.

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
    console.warn('[patch-opennext] handler.mjs patch target not found — OpenNext version may have changed. Manual review needed.')
  } else {
    fs.writeFileSync(handlerPath, handlerSrc.replace(HANDLER_OLD, HANDLER_NEW), 'utf8')
    console.log('[patch-opennext] handler.mjs patched successfully.')
  }
}

// ─── Patch 2: cloudflare/init.js (CustomRequest — defensive) ─────────────────
// Update the CustomRequest body conversion to use an exhaustive "not-valid-BodyInit"
// check instead of Buffer.isBuffer(), which is unreliable across module realms.

const initPath = path.join(__dirname, '..', '.open-next', 'cloudflare', 'init.js')

if (!fs.existsSync(initPath)) {
  console.error('[patch-opennext] init.js not found — skipping init patch')
  process.exit(0)
}

const initSrc = fs.readFileSync(initPath, 'utf8')

const INIT_OLD = `        Object.defineProperty(init2, "body", {
          // @ts-ignore
          value: init2.body instanceof stream.Readable ? ReadableStream.from(init2.body) : init2.body
        });`

const INIT_NEW = `        let _body = init2.body;
        // CF Workers does not recognise a Node.js Buffer polyfill as a valid BodyInit.
        // Use an exhaustive exclusion: anything that is not a known valid BodyInit type
        // but is array-like (has a numeric length) is treated as a byte array and copied
        // into a native Uint8Array, which CF Workers always accepts.
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

if (!initSrc.includes(INIT_OLD)) {
  if (initSrc.includes('ArrayBuffer.isView')) {
    console.log('[patch-opennext] init.js already patched — skipping.')
  } else {
    console.warn('[patch-opennext] init.js patch target not found — OpenNext version may have changed. Manual review needed.')
  }
  process.exit(0)
}

const patchedInit = initSrc.replace(INIT_OLD, INIT_NEW)
fs.writeFileSync(initPath, patchedInit, 'utf8')
console.log('[patch-opennext] init.js patched successfully.')
