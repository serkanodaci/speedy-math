importScripts('./static/js/workbox-sw.js');
workbox.skipWaiting();
workbox.clientsClaim();


workbox.routing.registerRoute(/.*(?:googleapis|gstatic)\.com.*$/,
    workbox.strategies.cacheFirst({
        cacheName: 'googleapis',
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 30
            }),
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200]
            })
        ]
    })
);

workbox.precaching.precacheAndRoute([
  {
    "url": "images/favicon.ico",
    "revision": "f5565e294d3fb5eb9af007d78fd7e1a1"
  },
  {
    "url": "images/icon-128x128.png",
    "revision": "285c456bcf811c7d03b323eff66bf0d7"
  },
  {
    "url": "images/icon-144x144.png",
    "revision": "eec88fbed9db0830c59fe57eb1edaef9"
  },
  {
    "url": "images/icon-152x152.png",
    "revision": "9afb190e126d50bda5fdb73378fd3521"
  },
  {
    "url": "images/icon-192x192.png",
    "revision": "5a068e5a9233a2bb0439005e7c55d6fa"
  },
  {
    "url": "images/icon-384x384.png",
    "revision": "6119e119510204ece208df7983267b31"
  },
  {
    "url": "images/icon-512x512.png",
    "revision": "993aa45abe7e1efec5c7e893dbff97ad"
  },
  {
    "url": "images/icon-72x72.png",
    "revision": "f5565e294d3fb5eb9af007d78fd7e1a1"
  },
  {
    "url": "images/icon-96x96.png",
    "revision": "08b352a2336feb74713b60c595ac0a0c"
  },
  {
    "url": "index.html",
    "revision": "c5c2e38572457ddfe12fc2cfb7f9fd7a"
  },
  {
    "url": "static/css/main.524101a3.css",
    "revision": "a827c4bc0906b9b68e08ec727f934305"
  },
  {
    "url": "static/js/main.11d47499.js",
    "revision": "b49db79d4b658f1072e6f636caa176af"
  },
  {
    "url": "static/js/workbox-sw.js",
    "revision": "ed25dc64f757df940d68d70073faac6c"
  }
]);