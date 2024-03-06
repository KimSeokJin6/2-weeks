const swiper1 = new Swiper(".swiper1", {
  // Optional parameters
  direction: "horizontal",
  speed: 500,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },

  // And if we need scrollbar
});
