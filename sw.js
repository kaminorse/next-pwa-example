if(!self.define){let e,a={};const s=(s,n)=>(s=new URL(s+".js",n).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,t)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let i={};const r=e=>s(e,c),o={module:{uri:c},exports:i,require:r};a[c]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(t(...e),i)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/next-pwa-example/_next/static/Vlqcdgf4z0a1Ua9EF4wsb/_buildManifest.js",revision:"4ee735b98785064f73607ddeb47baa57"},{url:"/next-pwa-example/_next/static/Vlqcdgf4z0a1Ua9EF4wsb/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/next-pwa-example/_next/static/chunks/705-f787e4af0bdd62a7.js",revision:"f787e4af0bdd62a7"},{url:"/next-pwa-example/_next/static/chunks/framework-2c79e2a64abdb08b.js",revision:"2c79e2a64abdb08b"},{url:"/next-pwa-example/_next/static/chunks/main-fe820ec2c78e59d1.js",revision:"fe820ec2c78e59d1"},{url:"/next-pwa-example/_next/static/chunks/pages/_app-bf55c49910772dbb.js",revision:"bf55c49910772dbb"},{url:"/next-pwa-example/_next/static/chunks/pages/_error-8353112a01355ec2.js",revision:"8353112a01355ec2"},{url:"/next-pwa-example/_next/static/chunks/pages/index-d0b9e7908310d87c.js",revision:"d0b9e7908310d87c"},{url:"/next-pwa-example/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/next-pwa-example/_next/static/chunks/webpack-6082f0067ad8398c.js",revision:"6082f0067ad8398c"},{url:"/next-pwa-example/_next/static/css/876d048b5dab7c28.css",revision:"876d048b5dab7c28"},{url:"/next-pwa-example/_next/static/css/d76010dceea002b6.css",revision:"d76010dceea002b6"},{url:"/next-pwa-example/_next/static/media/2aaf0723e720e8b9.p.woff2",revision:"e1b9f0ecaaebb12c93064cd3c406f82b"},{url:"/next-pwa-example/_next/static/media/9c4f34569c9b36ca.woff2",revision:"2c1fc211bf5cca7ae7e7396dc9e4c824"},{url:"/next-pwa-example/_next/static/media/ae9ae6716d4f8bf8.woff2",revision:"b0c49a041e15bdbca22833f1ed5cfb19"},{url:"/next-pwa-example/_next/static/media/b1db3e28af9ef94a.woff2",revision:"70afeea69c7f52ffccde29e1ea470838"},{url:"/next-pwa-example/_next/static/media/b967158bc7d7a9fb.woff2",revision:"08ccb2a3cfc83cf18d4a3ec64dd7c11b"},{url:"/next-pwa-example/_next/static/media/c0f5ec5bbf5913b7.woff2",revision:"8ca5bc1cd1579933b73e51ec9354eec9"},{url:"/next-pwa-example/_next/static/media/d1d9458b69004127.woff2",revision:"9885d5da3e4dfffab0b4b1f4a259ca27"},{url:"/next-pwa-example/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/next-pwa-example/icons/android-chrome-192x192.png",revision:"e01b48bb71f58871bff340f3c7d7cd40"},{url:"/next-pwa-example/icons/android-chrome-384x384.png",revision:"04569b454df6d7842407f307cfc5d8c3"},{url:"/next-pwa-example/icons/icon-512x512.png",revision:"25bf6d8a61c74bb3b7e194c1c6b98689"},{url:"/next-pwa-example/manifest.json",revision:"582f859b7f8fb16f066794f901bf64e9"},{url:"/next-pwa-example/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/next-pwa-example/thirteen.svg",revision:"53f96b8290673ef9d2895908e69b2f92"},{url:"/next-pwa-example/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/next-pwa-example",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:n})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
