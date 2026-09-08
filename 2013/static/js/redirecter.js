// yapcasia.org 互換リダイレクタ(2013)。tools/compare-mirror/proposal/query-rewrites.tsv から生成(手で編集しない)。
// Cloudflare の URL Rewrite と同じ許可リストのみ転送する。未知・不正・順序違いのクエリでは何もしない。
(function () {
  var map = {
  "/2013/talk/schedule?date=2013-09-19": "/2013/talk/schedule@date=2013-09-19.html",
  "/2013/talk/schedule?date=2013-09-20": "/2013/talk/schedule@date=2013-09-20.html",
  "/2013/talk/schedule?date=2013-09-21": "/2013/talk/schedule@date=2013-09-21.html"
  };
  var key = location.pathname + location.search;
  if (Object.prototype.hasOwnProperty.call(map, key)) {
    location.replace(map[key] + location.hash);
  }
})();
