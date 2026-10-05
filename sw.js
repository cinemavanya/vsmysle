const CACHE = "vsmysle-site";
self.addEventListener("install", e => { self.skipWaiting(); e.waitUntil(caches.open(CACHE).then(c => c.addAll(["./", "stol/", "assets/fb.js", "assets/logo.webp", "assets/fonts/GolosText-normal-400-700-cyrillic.woff2", "assets/fonts/GolosText-normal-400-700-latin.woff2", "assets/fonts/RobotoCondensed-normal-500-800-cyrillic.woff2", "assets/fonts/RobotoCondensed-normal-500-800-latin.woff2", "assets/fonts/ShantellSans-normal-400-700-cyrillic.woff2", "assets/fonts/ShantellSans-normal-400-700-latin.woff2", "assets/fonts/name-AmaticSC.woff2", "assets/fonts/name-Caveat.woff2", "assets/fonts/name-Lobster.woff2", "assets/fonts/name-MarckScript.woff2", "assets/fonts/name-PixelifySans.woff2", "assets/fonts/name-RubikBubbles.woff2", "assets/fonts/name-RubikWetPaint.woff2", "assets/fonts/name-Unbounded.woff2"])).catch(() => {})); });
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => {
  const r = e.request;
  if (r.method !== "GET" || new URL(r.url).origin !== location.origin) return;
  e.respondWith(fetch(r).then(res => {
    if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(r, copy)); }
    return res;
  }).catch(() => caches.match(r, { ignoreSearch: true }).then(m => m || Response.error())));
});
