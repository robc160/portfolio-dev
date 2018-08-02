//SELECT ITEMS
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBrand = document.querySelector(".menu-branding");
const menuNavItems = document.querySelectorAll(".nav-item");
const menuBtn = document.querySelector(".menu-btn");
let showMenu = false;

menuBtn.addEventListener("click", toggelMenu);

function toggelMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBrand.classList.add("show");
    menuNavItems.forEach(item => item.classList.add("show"));
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBrand.classList.remove("show");
    menuNavItems.forEach(item => item.classList.remove("show"));
    showMenu = false;
  }
}
