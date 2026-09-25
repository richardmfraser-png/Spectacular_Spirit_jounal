const CACHE='ssj-v1';
const ASSETS=['./','index.html','manifest.webmanifest','assets/icons/icon-192.png','assets/icons/icon-512.png','assets/icons/apple-touch-icon.png','assets/images/feature.jpg','assets/images/candles.jpg','assets/images/blossoms.jpg','assets/images/forestlight.jpg','assets/images/horizon.jpg','assets/images/wavewide.jpg','assets/images/goldsea.jpg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).catch(()=>caches.match('index.html')))));
