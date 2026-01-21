document.addEventListener('DOMContentLoaded', function () {
  // 360px未満のレイアウト崩れ防止
  const viewport = document.querySelector('meta[name="viewport"]');
  function switchViewport() {
    const value =
      window.outerWidth > 360
        ? 'width=device-width,initial-scale=1'
        : 'width=360';

    if (viewport && viewport.getAttribute('content') !== value) {
      viewport.setAttribute('content', value);
    }
  }

  window.addEventListener('resize', switchViewport);
  switchViewport();

  // タイトルやテキストのアニメーション表示
  const fadeUpElements = document.querySelectorAll('.fade-up');
  const openFadeUpElements = document.querySelectorAll('.open-fade-up');

  // 初期表示で即表示する要素
  openFadeUpElements.forEach(function (element) {
    element.classList.add('show');
  });

  // Intersection Observer の設定
  const observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target); // 一度表示したら監視解除
        }
      });
    },
    {
      root: null,          // ビューポートを基準
      rootMargin: '0px',
      threshold: 0.1       // 10%表示されたら発火
    }
  );

  // 監視開始
  fadeUpElements.forEach(function (element) {
    observer.observe(element);
  });
});