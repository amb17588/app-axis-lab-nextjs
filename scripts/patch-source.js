#!/usr/bin/env node
/**
 * Patches node_modules/@opennextjs/aws source before the OpenNext build.
 *
 * Root cause: edge.js creates the POST request body as a Node.js Buffer
 * (`Buffer.from(await event.arrayBuffer())`).  That Buffer is later passed as
 * the `body` init option to `new Request(url, { body: Buffer })`.  CF Workers
 * does not recognise the nodejs_compat Buffer polyfill as a valid BodyInit and
 * coerces it to "[object Object]", which is what route handlers receive.
 *
 * Fix: use `new Uint8Array(await event.arrayBuffer())` instead.  A native
 * Uint8Array is always a valid CF Workers BodyInit.
 *
 * This script runs as a `postinstall` hook (package.json) so the fix is in
 * place before `opennextjs-cloudflare build` bundles the source.
 */

const fs = require('fs')
const path = require('path')

const edgePath = path.join(
  __dirname, '..', 'node_modules',
  '@opennextjs', 'aws', 'dist', 'overrides', 'converters', 'edge.js'
)

if (!fs.existsSync(edgePath)) {
  // Package may not be installed yet (e.g. running before npm install)
  process.exit(0)
}

const src = fs.readFileSync(edgePath, 'utf8')

const OLD = '? Buffer.from(await event.arrayBuffer())'
const NEW = '? new Uint8Array(await event.arrayBuffer())'

if (src.includes(NEW)) {
  console.log('[patch-source] edge.js already patched — skipping.')
  process.exit(0)
}

if (!src.includes(OLD)) {
  console.warn('[patch-source] edge.js patch target not found — @opennextjs/aws version may have changed.')
  process.exit(0)
}

fs.writeFileSync(edgePath, src.replace(OLD, NEW), 'utf8')
console.log('[patch-source] edge.js patched: Buffer.from → new Uint8Array')
