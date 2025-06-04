document.addEventListener('DOMContentLoaded', function () {
  // --- モバイルメニュー制御 ---
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-overlay a');

  hamburgerMenu.addEventListener('click', function () {
    mobileNavOverlay.classList.toggle('open');
  });

  // モバイルメニューリンククリックで閉じる
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', function () {
      mobileNavOverlay.classList.remove('open');
    });
  });

  // --- Heroスライド制御 ---
  const slides = document.querySelectorAll('.hero-images .slide');
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  if (slides.length > 1) {
    showSlide(current); // 初期表示
    setInterval(nextSlide, 5000); // 5秒ごとにスライド
  }
});
