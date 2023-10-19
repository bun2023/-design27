'use strict';

const navbar = document.querySelector(".navbar");

document.querySelector("#bars").onclick = () => {
  navbar.classList.toggle("active");
}

window.onscroll = () => {
  navbar.classList.remove("active");
}

