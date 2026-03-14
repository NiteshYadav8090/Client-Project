// slider 1
document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    speed: 500,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: { el: ".swiper-pagination", clickable: true },
    breakpoints: {
      640: { slidesPerView: 3, spaceBetween: 20 },
      768: { slidesPerView: 4, spaceBetween: 25 },
      1024: { slidesPerView: 5, spaceBetween: 30 },
      1280: { slidesPerView: 6, spaceBetween: 30 },
    },
  });
});

// slider 2

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".pro", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 600,

    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      640: {
        slidesPerView: 1.2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1.5,
        spaceBetween: 25,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
      1280: {
        slidesPerView: 2.2,
        spaceBetween: 30,
      },
    },

    grabCursor: true,
  });
});
