/**
 * Display copy rule: no hyphens or dashes inside sentences.
 * Applied at render time so the product data stays untouched.
 * Protected terms keep their hyphen because they are technical names.
 */
const PROTECTED = ['Wi-Fi', 'AES-256']

export function clean(input: string): string {
  let out = input
  PROTECTED.forEach((t, i) => { out = out.split(t).join(`\u0000${i}\u0000`) })
  out = out
    .replace(/\s[—–]\s/g, ', ')
    .replace(/[—–]/g, ', ')
    .replace(/(\w)-(\w)/g, '$1 $2')
  PROTECTED.forEach((t, i) => { out = out.split(`\u0000${i}\u0000`).join(t) })
  return out
}
