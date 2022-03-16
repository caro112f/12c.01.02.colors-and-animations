"use strict";

let theme = localStorage.getItem("data-theme");
const changeThemeToDark = () => {
  document.documentElement.setAttribute("data-theme", "dark"); // set theme to dark
  localStorage.setItem("data-theme", "dark"); // save theme to local storage
};

const changeThemeToLight = () => {
  document.documentElement.setAttribute("data-theme", "light"); // set theme light
  localStorage.setItem("data-theme", "light"); // save theme to local storage
};
// Get the element based on ID
const checkbox = document.getElementById("switch");
// Apply retrived them to the website
checkbox.addEventListener("change", () => {
  let theme = localStorage.getItem("data-theme"); // Retrieve saved them from local storage
  if (theme === "dark") {
    changeThemeToLight();
  } else {
    changeThemeToDark();
  }
});

window.addEventListener("scroll", function () {
  showText1();
  showText2();
});

function showText1() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    document.querySelector(".text_highlight1").style.display = "block";
    //document.querySelector(".text_highlight2").style.display = "block";
  } else {
    document.querySelector(".text_highlight1").style.display = "none";
    //document.querySelector(".text_highlight2").style.display = "none";
  }
}
function showText2() {
  if (
    document.body.scrollTop > 2500 ||
    document.documentElement.scrollTop > 2500
  ) {
    document.querySelector(".text_highlight2").style.display = "block";
  } else {
    document.querySelector(".text_highlight2").style.display = "none";
  }
}
