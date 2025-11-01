/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
    unoptimized: true
  }
}

module.exports = nextConfig



// const withPWA = require('next-pwa')({
//   dest: 'public'
// })
// module.exports = withPWA({
// 	pwa: {
// 		dest: "public",
// 		register: true,
//         disable: process.env.NODE_ENV === 'development',
// 		skipWaiting: true,
// 	},
//   images: {
//     domains: [],
//     unoptimized: true
//   }
// });
