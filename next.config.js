/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Note: output: 'export' is not available in Next.js 12
  // Use 'next export' command instead after build
  images: {
    domains: [],
    unoptimized: true // Required for static export
  },
  // Remove trailing slash for cleaner URLs
  trailingSlash: false,
}

module.exports = nextConfig
