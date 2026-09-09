// yapcasia.org 2011: ?lang=en を静的ミラーの *@lang=en.html へ振り分ける。
// ディレクトリ URL(末尾が / または index.html)には対応ファイルが無いので何もしない(S0-10 / D-18)。
(function () {
  if (location.search !== '?lang=en') return;
  var path = location.pathname;
  if (path.slice(-1) === '/' || /\/index\.html$/.test(path)) return;
  location.replace(path.replace(/\.html$/, '') + '@lang=en.html' + location.hash);
})();
