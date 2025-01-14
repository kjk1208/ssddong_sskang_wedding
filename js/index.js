import './default';
import '../css/index.css';

const importAllDefaultImages = function importAllDefaultImages() {
  const images = require.context('../images/', true, /index1-.*\.jpg$/);
  images.keys().forEach(images);
};

const initLoader = function initLoader() {
  let loadedCount = 0;
  const bgImgs = document.querySelectorAll('.bg__img');
  bgImgs.forEach((bgImg) => {
    const image = new Image();
    image.onload = () => {
      if (image.complete) {
        loadedCount += 1;
      }
      if (loadedCount === bgImgs.length) {
        document.getElementById('js-loader').classList.add('hide');
        document.getElementById('js-main').classList.add('show');
        document.getElementById('js-header').classList.add('show');
        document.getElementById('js-footer').classList.add('show');
      }
    };
    image.src = bgImg.dataset.src;
  });
};

window.addEventListener('DOMContentLoaded', () => initLoader());
window.onlaod = importAllDefaultImages;
