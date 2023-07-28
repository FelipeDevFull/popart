/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['media.graphassets.com'],
    minimumCacheTTL: 5,
  },
}

module.exports = nextConfig

