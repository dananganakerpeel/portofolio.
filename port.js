function setActive(el) {
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
  el.classList.add('active');
}

document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById('carouselCustom');

  carousel.addEventListener('slid.bs.carousel', (e) => {
    const item = e.relatedTarget;

    const footerTitle = document.getElementById('footerTitle');
    const footerSub = document.getElementById('footerSub');

    footerTitle.innerText = item.dataset.title;
    footerSub.innerText = item.dataset.sub;

    footerTitle.href = item.dataset.link1;
    footerSub.href = item.dataset.link2;
  });
});