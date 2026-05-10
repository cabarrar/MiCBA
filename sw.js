const CACHE_NAME = 'micba-v1';

// Se ejecuta al instalar
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(['./', './index.html', './manifest.json']);
    })
  );
});

// Necesario para que sea instalable
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
