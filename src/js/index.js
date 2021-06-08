//menu hide and show
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      document.getElementById("navbar_top").classList.add("fixed-top");
      // add padding top to show content behind navbar
      navbar_height = document.querySelector(".navbar").offsetHeight;
      document.body.style.paddingTop = navbar_height + "px";
    } else {
      document.getElementById("navbar_top").classList.remove("fixed-top");
      // remove padding top from body
      document.body.style.paddingTop = "0";
    }
  });
});

// collapse menu on click
$(".navbar-nav>li>a").on("click", function () {
  $(".navbar-collapse").collapse("hide");
});

// smooth scrolling
var scroll = new SmoothScroll('a[href*="#"]', {
  // Selectors
  // ignore: "[data-scroll-ignore]",
  header: "#navbar-top",
  topOnEmptyHash: true,

  // Speed & Duration
  speed: 500,
  speedAsDuration: false,
  // durationMax: null,
  // durationMin: null,
  // clip: true,
  // offset: 0,

  // Easing
  easing: "easeInOutCubic",
  // customEasing: null,

  // History
  updateURL: true,
  popstate: true,

  // Custom Events
  // emitEvents: true,
});
