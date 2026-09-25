const CACHE='ssj-v2-1-20260925';
const ASSETS=[
 './','./index.html','./manifest-v21.webmanifest','./manifest.webmanifest',
 './apple-touch-icon-v21.png','./apple-touch-icon.png','./ssj-icon-192-v21.png','./ssj-icon-512-v21.png',
 './feature.jpg','./candles.jpg','./blossoms.jpg','./forestlight.jpg','./horizon.jpg','./wavewide.jpg','./goldsea.jpg',
 './QUICK_START.md','./README.md','./GITHUB_UPDATE_GUIDE.md','./LOCKED_BRIEF.md'
];
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
});
self.addEventListener('activate', event => {
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', event => {
  if(event.request.mode==='navigate'){
    event.respondWith(fetch(event.request).then(resp=>{
      const copy=resp.clone(); caches.open(CACHE).then(c=>c.put('./index.html',copy)); return resp;
    }).catch(()=>caches.match('./index.html')));
    return;
  }
  event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(resp=>{
    const copy=resp.clone(); caches.open(CACHE).then(c=>c.put(event.request,copy)); return resp;
  })));
});
