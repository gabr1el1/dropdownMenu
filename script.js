const menus = document.querySelectorAll(".menu");
const subMenus = document.querySelectorAll(".submenu");

Array.from(menus).forEach((menu) => {
  menu.addEventListener("mouseover", show);

  menu.addEventListener("mouseleave", hide);
});

Array.from(subMenus).forEach((subMenu) => {
  subMenu.addEventListener("mouseover", show);

  subMenu.addEventListener("mouseleave", hide);
});

function show() {
  this.classList.add("visible");
}
function hide() {
  this.classList.remove("visible");
}
