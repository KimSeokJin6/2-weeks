document.querySelectorAll(".services").forEach((element) => {
  window.addEventListener("DOMContentLoaded", () => {
    const services = new Swiper(element, {
      slidesPerView: 5,
      initialSlide: 1,
      rewind: true,

      breakpoints: {
        1900: {
          slidesPerView: 5,
          spaceBetween: 35,
        },
        1700: {
          slidesPerView: 5,
          spaceBetween: 0,
        },
        1500: {
          slidesPerView: 4,
          spaceBetween: 130,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 58,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 100,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        320: {
          slidesPerView: 1,
        },
      },
      direction: "horizontal",
      navigation: {
        nextEl: ".categories-next",
        prevEl: ".categories-prev",
      },
    });
  });
});
document.querySelectorAll(".product").forEach((element) => {
  window.addEventListener("DOMContentLoaded", () => {
    const product = new Swiper(element, {
      slidesPerView: 4,
      initialSlide: 1,
      rewind: true,
      breakpoints: {
        1900: {
          slidesPerView: 4,
          spaceBetween: 100,
        },

        1600: {
          slidesPerView: 4,
          spaceBetween: 100,
        },

        1400: {
          slidesPerView: 3,
          spaceBetween: 200,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 180,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        859: {
          slidesPerView: 2,
          spaceBetween: 250,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 80,
        },
        497: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        325: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      },
      direction: "horizontal",
      navigation: {
        nextEl: ".new-next",
        prevEl: ".new-prev",
      },
    });
  });
});
document.querySelectorAll(".also").forEach((element) => {
  window.addEventListener("DOMContentLoaded", () => {
    const also = new Swiper(element, {
      slidesPerView: 2,
      initialSlide: 1,
      rewind: true,
      direction: "horizontal",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        1900: {
          spaceBetween: 100,
        },

        1400: {
          spaceBetween: 140,
        },
        1200: {
          spaceBetween: 140,
        },
        992: {
          spaceBetween: 140,
        },
        768: { spaceBetween: 70 },
        615: { spaceBetween: 14, slidesPerView: 2 },
        576: { spaceBetween: 40, slidesPerView: 2 },
        374: { spaceBetween: 40, slidesPerView: 1 },
      },
    });
  });
});

document.getElementById("burger").addEventListener("click", function () {
  document.querySelector(".header").classList.toggle("open");
});

//Range
const rangeInput = document.querySelectorAll(".range-input input");
const progress = document.querySelector(".progress");

if (rangeInput && progress) {
  rangeInput.forEach((input) => {
    input.addEventListener("input", () => {
      let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

      progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      progress.style.right = (maxVal / rangeInput[0].max) * 100 + "%";
      console.log(percent);
    });
  });
}

// Maska
const elements = document.querySelectorAll("input[name=tel]");

elements.forEach((element) => {
  const maskOptions = {
    mask: "+{7}(000)000-00-00",
  };
  const mask = IMask(element, maskOptions);
});

//Настройка
// let options = {
//   root: null,
//   rootMargin: "5px",
//   threshold: 0.5,
// };

// //функция обратного вызова
// let callback = function (entries, observer) {
//   entries.forEach(entry =>
//     //если элемент является наблюдаемым
//     if(
//       entry.isInterseting
//     )
// console.log('find', entry);//добавляем класс ac

//   )

// }

// //Наблюдатель
// let observer = new IntersectionObserver(callback, options);

// // определяем элементы за которыми наблюдаем
// let targets = document.querySelectorAll(".anim");
// targets.forEach((targets) => {
//   observer.observe(targets);
// });

// let swiper = new Swiper(".slider-block", {
//   slidesPerView: 1,
// });

// const sliderNavItems = document.querySelectorAll(".slider-nav__item");

// sliderNavItems.forEach((el, index) => {
//   el.setAttribute("data-index", index);
// });

//Для инпута числа (перелистование работало)
// $(function () {
//   $(document).on("mousemove", function (e) {
//     e.preventDefault();
//   });
// });

// Slider

const sliderThumbnail = document.getElementById("slider-thumbnail");

if (sliderThumbnail) {
  const sliderBig = sliderThumbnail.querySelector(
    ".slider-thumbnail__slider-big .swiper"
  );
  const sliderSmall = sliderThumbnail.querySelector(
    ".slider-thumbnail__slider-small .swiper"
  );

  const swiperBig = new Swiper(sliderBig, {
    modules: [Navigation],
    spaceBetween: 8,
    navigation: {
      prevEl: ".slider-thumbnail__button-nav_prev",
      nextEl: ".slider-thumbnail__button-nav_next",
      disabledClass: "button-main_disabled",
    },
  });

  swiperBig.on("slideChange", () => {
    setActiveTrigger(swiperBig.activeIndex);
  });

  const swiperSmall = new Swiper(sliderSmall, {
    slidesPerView: "auto",
    spaceBetween: 8,
    breakpoints: {
      992: {
        direction: "vertical",
      },
    },
  });
}
