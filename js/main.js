$(function () {
  $(".nav__btn").on("click", function () {
    $(".nav__list").toggle("slow");
    $(".nav__btn").toggleClass("nav__btn-active");
  });
});
