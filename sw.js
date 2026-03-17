const CACHE_NAME = 'stamprally-v1';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './manifest.json',
  './images/kirakira3.png',
  './icon/icon-192.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});