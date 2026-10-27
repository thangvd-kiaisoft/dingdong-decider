// Shows one language at a time: the one in the URL hash (#vi, #ja, #en),
// otherwise the browser's language, otherwise Vietnamese.
(function () {
  var languages = ['vi', 'ja', 'en'];

  function pick() {
    var fromHash = location.hash.slice(1);
    if (languages.indexOf(fromHash) >= 0) return fromHash;
    var browser = (navigator.language || 'vi').slice(0, 2).toLowerCase();
    return languages.indexOf(browser) >= 0 ? browser : 'vi';
  }

  function show() {
    var lang = pick();
    document.documentElement.lang = lang;
    languages.forEach(function (code) {
      document.getElementById(code).hidden = code !== lang;
    });
    document.querySelectorAll('.langs a').forEach(function (link) {
      link.classList.toggle('active', link.dataset.lang === lang);
    });
  }

  window.addEventListener('hashchange', show);
  show();
})();
