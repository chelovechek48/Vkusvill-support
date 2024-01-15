import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

import '../styles/plugins/swiper.scss';

const swiper = new Swiper('.FAQ__swiper', {
  modules: [Navigation],
  navigation: {
    nextEl: '.FAQ__swiper-nav-next',
    prevEl: '.FAQ__swiper-nav-prev',
  },
  loop: false,
  slidesPerView: 'auto',
  spaceBetween: 30,
  grabCursor: true,
});
