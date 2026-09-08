// yapcasia.org 互換リダイレクタ(2015)。tools/compare-mirror/proposal/query-rewrites.tsv から生成(手で編集しない)。
// Cloudflare の URL Rewrite と同じ許可リストのみ転送する。未知・不正・順序違いのクエリでは何もしない。
(function () {
  var map = {
  "/2015/talk/schedule?date=2015-08-20&format=mobile": "/2015/talk/schedule-2015-08-20-sp.html",
  "/2015/talk/schedule?date=2015-08-21&format=mobile": "/2015/talk/schedule-2015-08-21-sp.html",
  "/2015/talk/schedule?date=2015-08-22&format=mobile": "/2015/talk/schedule-2015-08-22-sp.html",
  "/2015/talk/schedule?date=2015-08-20": "/2015/talk/schedule-2015-08-20-pc.html",
  "/2015/talk/schedule?date=2015-08-21": "/2015/talk/schedule-2015-08-21-pc.html",
  "/2015/talk/schedule?date=2015-08-22": "/2015/talk/schedule-2015-08-22-pc.html",
  "/2015/talk/schedule?date=2015-08-20&lang=en": "/2015/talk/schedule-2015-08-20-pc.html",
  "/2015/talk/schedule?date=2015-08-21&lang=en": "/2015/talk/schedule-2015-08-21-pc.html",
  "/2015/talk/schedule?date=2015-08-22&lang=en": "/2015/talk/schedule-2015-08-22-pc.html",
  "/2015/talk/schedule?date=2015-08-20&format=json": "/2015/talk/schedule-2015-08-20.json",
  "/2015/talk/schedule?date=2015-08-21&format=json": "/2015/talk/schedule-2015-08-21.json",
  "/2015/talk/schedule?date=2015-08-22&format=json": "/2015/talk/schedule-2015-08-22.json"
  };
  var key = location.pathname + location.search;
  if (Object.prototype.hasOwnProperty.call(map, key)) {
    location.replace(map[key] + location.hash);
  }
})();
