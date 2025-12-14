// public/sw.js
const CACHE_NAME = 'missera-market-v1';
const urlsToCache = [
  '/',
  '/manifest.json',
  '/favicon_io/favicon.ico'
];
// Service Worker minimal mais efficace
self.addEventListener('install', function(event) {
  console.log('[Service Worker] Installation');
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', function(event) {
  console.log('[Service Worker] Activation');
  event.waitUntil(self.clients.claim());
});

// Optionnel : stratégie de cache
self.addEventListener('fetch', function(event) {
  // Laisser passer toutes les requêtes
  event.respondWith(fetch(event.request));
});