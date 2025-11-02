/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Deployment modes:
  // 
  // 1. Static Export (Cloudflare Pages) - CURRENT MODE
  //    - Uncomment 'output: export' below
  //    - Deploy with: npm run deploy:pages
  //    - Best for: Static sites, no SSR/API routes needed
  //
  // 2. Workers (Cloudflare Workers with SSR support)
  //    - Comment out 'output: export' below
  //    - Deploy with: npm run deploy
  //    - Best for: SSR, API routes, dynamic features
  //    - See: https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/
  
  output: 'export', // Comment this out for Workers deployment
  
  images: {
    unoptimized: true // Required for static export, optional for Workers
  },
  
  trailingSlash: false,
  distDir: '.next',
}

module.exports = nextConfig
