if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>a(e,c),d={module:{uri:c},exports:t,require:r};s[c]=Promise.all(i.map((e=>d[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/bqtF8wVb_FsIbkr1sfDj8/_buildManifest.js",revision:"d0c9aacab6e62048a3da2b9f3d0a143a"},{url:"/_next/static/bqtF8wVb_FsIbkr1sfDj8/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1bfc9850-4031192dd55f06dc.js",revision:"4031192dd55f06dc"},{url:"/_next/static/chunks/892-5f7fbe1597a7aaf9.js",revision:"5f7fbe1597a7aaf9"},{url:"/_next/static/chunks/d7eeaac4-66eb63b6e751b2cf.js",revision:"66eb63b6e751b2cf"},{url:"/_next/static/chunks/framework-4556c45dd113b893.js",revision:"4556c45dd113b893"},{url:"/_next/static/chunks/main-868091334d5324da.js",revision:"868091334d5324da"},{url:"/_next/static/chunks/pages/404-df2ee72effa59f8d.js",revision:"df2ee72effa59f8d"},{url:"/_next/static/chunks/pages/_app-fef2f6da0bb889e5.js",revision:"fef2f6da0bb889e5"},{url:"/_next/static/chunks/pages/_error-a4ba2246ff8fb532.js",revision:"a4ba2246ff8fb532"},{url:"/_next/static/chunks/pages/index-3c229486b8bd4adc.js",revision:"3c229486b8bd4adc"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-69bfa6990bb9e155.js",revision:"69bfa6990bb9e155"},{url:"/_next/static/css/132c369bcf450904.css",revision:"132c369bcf450904"},{url:"/_next/static/media/profileImage.cfe2f9dd.jpg",revision:"4dfd8bc311867c1b18716ef35dab13af"},{url:"/android-chrome-192x192.png",revision:"118349a00bc111a31d768f3a25442b2b"},{url:"/android-chrome-512x512.png",revision:"bf147391f8715570f69223f60da1ad38"},{url:"/apple-touch-icon.png",revision:"68532ee2610ec2a73620154af7106222"},{url:"/favicon-16x16.png",revision:"dfe0eeb6496ca3652ad368bc8a735d36"},{url:"/favicon.ico",revision:"989c88fa4c530b2479a8c67185eb643d"},{url:"/favicon.png",revision:"2a3c7eb8467e061ffa5f7f2b09b71889"},{url:"/images/profileImage.jpg",revision:"4dfd8bc311867c1b18716ef35dab13af"},{url:"/images/svg/apollo.svg",revision:"e09971e99d5ba5105252632b4e50f37f"},{url:"/images/svg/bootstrap.svg",revision:"79baffea4c6fe64e4c44ff26a271a344"},{url:"/images/svg/css.svg",revision:"bb79c0b51618660d4f0f527c44606409"},{url:"/images/svg/dart.svg",revision:"5442b31f634c58deadfde7e4be40d7f3"},{url:"/images/svg/express.svg",revision:"d0b1a54730300a8b4656a52a88d6d8b2"},{url:"/images/svg/flutter.svg",revision:"5addab547114e2e8fc99bdf27d444425"},{url:"/images/svg/git.svg",revision:"0b29273ee11d4cd625b16fea1cde8823"},{url:"/images/svg/github.svg",revision:"67f6bd0802aa2bd81c17eae426c2a3c9"},{url:"/images/svg/graphql.svg",revision:"8fa36575b851c1a42d8524737e3fecdc"},{url:"/images/svg/html.svg",revision:"da7779528a540df1ec5209c61a2c40ee"},{url:"/images/svg/java.svg",revision:"0d98f78a1636677266121d01abb52bf7"},{url:"/images/svg/javascript.svg",revision:"926f5210c876560b1d5788c59463cd0b"},{url:"/images/svg/mongo.svg",revision:"6672db19b0cbfad69b6468c3c6b7675f"},{url:"/images/svg/moon.svg",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/images/svg/nextjs.svg",revision:"eebdc0ca6b289ea38c64ade6fd1190ff"},{url:"/images/svg/nodejs.svg",revision:"7e88510f87cd33efbf088317e901d131"},{url:"/images/svg/python.svg",revision:"4ffea59e6d23b9a02d6a051c22253119"},{url:"/images/svg/react.svg",revision:"ca93577542bc197e0f0f5dc87d568bba"},{url:"/images/svg/sun.svg",revision:"d375f041bcccde72754d764591d7dd9b"},{url:"/images/svg/tailwind.svg",revision:"3d61240900964f102fdf17c54a6157a1"},{url:"/images/svg/typescript.svg",revision:"ecbbe1d233105ff8085ca6330fe75872"},{url:"/images/tab-img.jpg",revision:"e35b51155bf7d1ed296eb665d9af70b0"},{url:"/manifest.json",revision:"6631dca8f75713c5df3d4c379cb778a0"},{url:"/og-image.png",revision:"4d341d2c77f1e65f151756a19d057ecd"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
