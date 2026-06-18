import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Required for Cloudflare Workers deployment via OpenNext
  // Static image optimisation is handled by Cloudflare's edge cache instead
  images: {
    unoptimized: true,
  },
}

export default nextConfig
