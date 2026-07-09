import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Required for Cloudflare Workers deployment via OpenNext
  // Static image optimisation is handled by Cloudflare's edge cache instead
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/app-ads',
        destination: '/app-ads.txt',
      },
    ]
  },
}

export default nextConfig
