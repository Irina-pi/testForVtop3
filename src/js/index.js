const headerMenuEl = document.getElementById("headerMenu");
const toggleClass = "active";
const menuSvgEl = document.getElementById("menuSvg");
const menuCloseSvgEl = document.getElementById("menuCloseSvg");
const headerButtonsBlockEl = document.getElementById("headerButtonsBlock");

menuSvgEl.addEventListener("click", (event) => {
  menuSvgEl.classList.toggle(toggleClass);
  menuCloseSvgEl.classList.toggle(toggleClass);
  headerMenuEl.classList.toggle(toggleClass);
  headerButtonsBlockEl.classList.toggle(toggleClass);
});

menuCloseSvgEl.addEventListener("click", (event) => {
  menuSvgEl.classList.toggle(toggleClass);
  menuCloseSvgEl.classList.toggle(toggleClass);
  headerMenuEl.classList.toggle(toggleClass);
  headerButtonsBlockEl.classList.toggle(toggleClass);
});
