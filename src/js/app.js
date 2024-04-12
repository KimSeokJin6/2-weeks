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

document.getElementById("burger").addEventListener("click", function () {
  document.querySelector(".header").classList.toggle("open");
});

const elements = document.querySelectorAll("input[name=tel]");

elements.forEach((element) => {
  const maskOptions = {
    mask: "+{7}(000)000-00-00",
  };
  const mask = IMask(element, maskOptions);
});
