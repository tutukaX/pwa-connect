const CACHE_NAME = 'pwa-connect-v1';
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './assets/icon-192x192.png',
  './assets/icon-512x512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});