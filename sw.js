// Caché para que la app abra sin internet en el gimnasio.
// Cambia la versión cuando subas cambios para forzar la actualización.
const C = 'winterarc-v7';
const SHELL = ['./', './index.html', './firebase-config.js', './manifest.json', './icons/icon-180.png', './icons/icon-512.png'];
const EXT = ['www.gstatic.com', 'fonts.googleapis.com', 'fonts.gstatic.com'];
self.addEventListener('install', e => { e.waitUntil(caches.open(C).then(c => c.addAll(SHELL))); self.skipWaiting(); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== C).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const u = new URL(e.request.url);
  if (u.origin !== location.origin && !EXT.includes(u.hostname)) return; // Firestore y Auth van directo a la red
  e.respondWith(caches.open(C).then(async c => {
    const hit = await c.match(e.request);
    const net = fetch(e.request).then(r => { if (r.ok || r.type === 'opaque') c.put(e.request, r.clone()); return r; }).catch(() => hit);
    return hit || net;
  }));
});
