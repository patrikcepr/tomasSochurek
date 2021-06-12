//menu hide and show
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 150) {
      // add class
      document.getElementById("navbar_top").classList.add("add-color");
    } else {
      document.getElementById("navbar_top").classList.remove("add-color");
    }
  });
});

// collapse menu on click
$(".navbar-nav>li>a").on("click", function () {
  $(".navbar-collapse").collapse("hide");
});
