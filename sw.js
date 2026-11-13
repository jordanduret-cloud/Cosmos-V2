// COSMOS : cache hors ligne. Changer VERSION à chaque mise à jour pour forcer le rafraîchissement.
const VERSION = 'cosmos-v3-1';
const CORE = ['./', 'index.html', 'manifest.json', 'stars.json', 'earth-day.jpg', 'earth-night.jpg', 'earth-water.png', 'earth-clouds.jpg'];
self.addEventListener('install', e => { e.waitUntil(caches.open(VERSION).then(c => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const req = e.request; if (req.method !== 'GET') return;
  const page = req.mode === 'navigate' || req.url.endsWith('index.html');
  const put = res => { if (res && (res.ok || res.type === 'opaque')) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); } return res; };
  // La page : réseau d'abord (pour recevoir les mises à jour), cache en secours. Le reste : cache d'abord.
  e.respondWith(page ? fetch(req).then(put).catch(() => caches.match(req).then(r => r || caches.match('index.html')))
                     : caches.match(req).then(r => r || fetch(req).then(put)));
});
