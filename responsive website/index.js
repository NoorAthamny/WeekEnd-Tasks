const openNav = document.querySelector(".menu__open");
const openBtn = document.querySelector(".navbar__toggle");

openBtn.addEventListener("click", function () {
  openNav.classList.toggle("show");
});

// openBtn.addEventListener("click", function () {
//   if ((openNav.style.opacity = "1")) {
//     openNav.style.opacity = "0";
//   }
// });
