import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper";
SwiperCore.use([Pagination, Navigation, EffectFade]);
export const featuredcarousel = {
  slidesPerView: 4,
  speed: 400,
  spaceBetween: 20,
  slideToClickedSlide: true,
  loop: true,
  loopFillGroupWithBlank: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    560: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    800: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: ".featured-carousel-icon.swiper-button-next",
    prevEl: ".featured-carousel-icon.swiper-button-prev",
  },
};
export const itemscategoriescarousel = {
  slidesPerView: 3,
  spaceBetween: 20,
  slideToClickedSlide: true,
  createElements: true,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    414: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: ".items-categories-icon.swiper-button-next",
    prevEl: ".items-categories-icon.swiper-button-prev",
  },
};
export const featuredsellerscarousel = {
  slidesPerView: 2,
  spaceBetween: 20,
  slideToClickedSlide: true,
  createElements: true,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: ".featured-sellers-icon.swiper-button-next",
    prevEl: ".featured-sellers-icon.swiper-button-prev",
  },
};

export const iconSlider = {
  slidesPerView: 5,
  spaceBetween: 8,
  initialSlide: 0,
  watchSlidesProgress: true,
  slideVisibleClass: "swiper-slide-visible",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
};
