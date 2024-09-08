const small1 = document.getElementById("img1hover");
const small2 = document.getElementById("img2-hover");
const big1 = document.getElementById("img1");
const big2 = document.getElementById("img2");
const big3 = document.getElementById("img3");
const big4 = document.getElementById("img4");
const big5 = document.getElementById("img5");
const big6 = document.getElementById("img6");

small1.addEventListener("mouseover"),
  function () {
    big2.style.display = "none";
    big3.style.display = "none";
    big4.style.display = "none";
    big5.style.display = "none";
    big6.style.display = "none";
  };
