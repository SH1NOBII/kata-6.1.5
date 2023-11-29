import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.min.css';

const swiper = new Swiper('.swiper', {
  // If we need pagination
  modules: [Pagination],
  pagination: {
    el: '.swiper-pagination',

    clickable: true
  },

  grabCursor: true,

  slideToClickedSlide: true,

  mousewheel: {
    sensitivity: 1
  },

  slidesPerView: 1.2,

  spaceBetween: 16,

  loop: true,

  breakpoints: {
    520: {
      slidesPerView: 2
    },

    768: {
      enabled: false,
      loop: false,
      spaceBetween: 0,
      slidesPerView: 'auto'
    }
  }
});

// const moreBtn = document.querySelector('.more-button')
// const brandItems = document.querySelectorAll('.brand__item')
// const btnTitle = document.querySelector('.more-button__text')

// moreBtn.addEventListener('click', function () {
//   if (btnTitle.textContent === 'Показать всё') {
//     btnTitle.textContent = 'Скрыть'
//     for (let item of brandItems) {
//       item.classList.add('brand__item--opened')
//     }
//   } else {
//     for (let item of brandItems) {
//       item.classList.remove('brand__item--opened')
//     }
//     btnTitle.textContent = 'Показать всё'
//   }
// })
