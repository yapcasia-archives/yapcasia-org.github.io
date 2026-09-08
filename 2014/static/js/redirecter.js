// yapcasia.org 互換リダイレクタ(2014)。tools/compare-mirror/proposal/query-rewrites.tsv から生成(手で編集しない)。
// Cloudflare の URL Rewrite と同じ許可リストのみ転送する。未知・不正・順序違いのクエリでは何もしない。
(function () {
  var map = {
  "/2014/talk/schedule?date=2014-08-28": "/2014/talk/schedule@date=2014-08-28.html",
  "/2014/talk/schedule?date=2014-08-29": "/2014/talk/schedule@date=2014-08-29.html",
  "/2014/talk/schedule?date=2014-08-30": "/2014/talk/schedule@date=2014-08-30.html",
  "/2014/talk/schedule?format=mobile": "/2014/talk/schedule@format=mobile.html",
  "/2014/talk/list?status=rejected": "/2014/talk/list@status=rejected.html"
  };
  var key = location.pathname + location.search;
  if (Object.prototype.hasOwnProperty.call(map, key)) {
    location.replace(map[key] + location.hash);
  }
})();
