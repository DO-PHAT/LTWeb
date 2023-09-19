// Menu
//tao 1 bien ten menu va chon class

const menu = document.querySelector(".navbar__links");
const menuButton = document.querySelector(".navbar__icons");
const overlay = document.querySelector("#overlay");

//click de hien menu

menuButton.addEventListener("click", () => {
  menu.classList.toggle("navbar__open");//hien menu ra
  menuButton.classList.toggle("open"); //thanh button bien thanh dau X
  overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
  menu.classList.toggle("navbar__open");
  menuButton.classList.toggle("open");
  overlay.classList.toggle("show");
});