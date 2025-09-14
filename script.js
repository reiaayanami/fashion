// timer
document.addEventListener("DOMContentLoaded", function () {
  const Hours = document.getElementById("hours");
  const Minutes = document.getElementById("minutes");
  const Seconds = document.getElementById("seconds");

  const targetDate = new Date("May 20, 2025 00:00:00").getTime();

  function timer() {
    const currentDate = new Date().getTime();
    const distance = targetDate - currentDate;

    if (distance > 0) {
      const hours = Math.floor(distance / (1000 * 60 * 60)) % 24;
      const minutes = Math.floor((distance / (1000 * 60)) % 60);
      const seconds = Math.floor((distance / 1000) % 60);

      Hours.textContent = String(hours).padStart(2, "0");
      Minutes.textContent = String(minutes).padStart(2, "0");
      Seconds.textContent = String(seconds).padStart(2, "0");
    } else {
      Hours.textContent = "00";
      Minutes.textContent = "00";
      Seconds.textContent = "00";
      clearInterval(interval);
    }
  }

  const interval = setInterval(timer, 1000);
  timer();
});
// scroll to top
const scrollToTopBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    // Показуємо стрілку при прокрутці вниз
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
// slider section third
// $(document).ready(function () {
//   $(".sliderCategories").slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     prevArrow: $(".prebtn"),
//     nextArrow: $(".nextbtn"),
//   });
// });
// slider section four
// $(document).ready(function () {
//   $(".sliderItem").slick({
//     infinite: true,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     prevArrow: $(".prebtnSecond"),
//     nextArrow: $(".nextbtnSecond"),
//   });
// });
$(document).ready(function () {
  $(".sliderItem").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $(".prebtnSecond"),
    nextArrow: $(".nextbtnSecond"),
    responsive: [
      {
        breakpoint: 768, // до 768px
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".sliderCategories").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $(".prebtn"),
    nextArrow: $(".nextbtn"),
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
function headerTop() {
  let header = $("header");
  let navHeader = $(".navHeader");
  let placeholder = $(".header-placeholder");
  let headerH = header.outerHeight();
  let lastScroll = 0;
  $(window).on("scroll", function () {
    let currentScroll = $(window).scrollTop();
    if (currentScroll > headerH) {
      if (currentScroll > lastScroll) {
        // Скрол вниз — показати і закріпити хедер
        navHeader.addClass("fixed").show();
        placeholder.height(headerH);
      } else {
        // Скрол вгору — сховати хедер
        navHeader.removeClass("fixed").hide();
        placeholder.height(0);
      }
    } else {
      navHeader.removeClass("fixed").show();
      placeholder.height(0);
    }
    lastScroll = currentScroll;
  });
}
headerTop();
