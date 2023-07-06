/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    loader: 'akamai',
    path: ""
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
//   images:{
//     loader: 'akamai',
//     path: ""
//   }
// });
