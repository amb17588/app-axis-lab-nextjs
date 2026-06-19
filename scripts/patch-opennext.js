#!/usr/bin/env node
/**
 * Patches .open-next/cloudflare/init.js after every `npm run build:cf`.
 *
 * Root cause: OpenNext's edge converter stores the POST request body as a
 * Node.js Buffer and passes it to `new Request(url, { body: Buffer })`.
 * The Cloudflare Workers runtime does not reliably accept a Node.js Buffer
 * as a BodyInit — the body is silently dropped, so route handlers receive an
 * empty body and JSON.parse fails.
 *
 * Fix: convert any Buffer-like body to a plain ArrayBuffer before calling the
 * native CF Workers Request constructor.
 */

const fs = require('fs')
const path = require('path')

const initPath = path.join(__dirname, '..', '.open-next', 'cloudflare', 'init.js')

if (!fs.existsSync(initPath)) {
  console.error('[patch-opennext] init.js not found — skipping patch')
  process.exit(0)
}

const original = fs.readFileSync(initPath, 'utf8')

const OLD = `      if (init2) {
        delete init2.cache;
        Object.defineProperty(init2, "body", {
          // @ts-ignore
          value: init2.body instanceof stream.Readable ? ReadableStream.from(init2.body) : init2.body
        });
      }`

const NEW = `      if (init2) {
        delete init2.cache;
        let _body = init2.body;
        // Node.js Buffer is not reliably recognised as BodyInit by the CF Workers
        // runtime — convert it to a plain ArrayBuffer so the underlying Request
        // constructor can store the bytes correctly.
        if (
          _body != null &&
          typeof _body === "object" &&
          typeof _body.buffer === "object" &&
          _body.buffer instanceof ArrayBuffer
        ) {
          if (!(_body instanceof stream.Readable)) {
            _body = _body.buffer.slice(_body.byteOffset, _body.byteOffset + _body.byteLength);
          }
        }
        if (_body instanceof stream.Readable) {
          _body = ReadableStream.from(_body);
        }
        Object.defineProperty(init2, "body", {
          // @ts-ignore
          value: _body,
          writable: true,
          enumerable: true,
          configurable: true,
        });
      }`

if (!original.includes(OLD)) {
  console.warn('[patch-opennext] Patch target not found — init.js may have changed in a newer OpenNext version. Skipping.')
  process.exit(0)
}

const patched = original.replace(OLD, NEW)
fs.writeFileSync(initPath, patched, 'utf8')
console.log('[patch-opennext] init.js patched successfully.')
