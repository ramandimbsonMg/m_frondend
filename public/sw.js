// public/sw.js
const CACHE_NAME = 'missera-market-v1';
const urlsToCache = [
  '/',
  '/manifest.json',
  '/favicon_io/favicon.ico'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});