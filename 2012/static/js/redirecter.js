// yapcasia.org 互換リダイレクタ(2012)。tools/compare-mirror/proposal/query-rewrites.tsv から生成(手で編集しない)。
// Cloudflare の URL Rewrite と同じ許可リストのみ転送する。未知・不正・順序違いのクエリでは何もしない。
(function () {
  var map = {
  "/2012/talk/schedule?date=2012-09-27": "/2012/talk/schedule@date=2012-09-27.html",
  "/2012/talk/schedule?date=2012-09-28": "/2012/talk/schedule@date=2012-09-28.html",
  "/2012/talk/schedule?date=2012-09-29": "/2012/talk/schedule@date=2012-09-29.html"
  };
  var key = location.pathname + location.search;
  if (Object.prototype.hasOwnProperty.call(map, key)) {
    location.replace(map[key] + location.hash);
  }
})();
