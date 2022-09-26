/* eslint-disable */
var u = new Set([
  'www.youtube.com',
  'music.youtube.com',
  'suggestqueries.google.com',
  'youtubei.googleapis.com',
  'youtubei.googleapis.com',
  'green-youtubei.sandbox.googleapis.com',
  'release-youtubei.sandbox.googleapis.com',
  'test-youtubei.sandbox.googleapis.com',
  'cami-youtubei.sandbox.googleapis.com',
  'uytfe.sandbox.google.com',
]);
self.addEventListener('fetch', (o) => {
  try {
    let s = new URL(o.request.url).hostname;
    if (!u.has(s)) return;
  } catch (s) {
    return;
  }
  let e = new URL(o.request.url);
  e.searchParams.set('__host', e.host), e.host = e.searchParams.get('__proxy');
  let t = new Request(e, o.request);
  o.respondWith(fetch(t));
});
//# sourceMappingURL=service-worker.js.map
