let scrollpos = window.scrollY;
const header = document.querySelector("header");
const header_height = header.offsetHeight;
const button = document.getElementById("getStartedBtn");

const add_class_on_scroll = () => {
  button.classList.remove("revertGreenButton");
  header.classList.remove("revertWhiteNav");
  button.classList.add("greenButton");
  header.classList.add("whiteNav");
};
const remove_class_on_scroll = () => {
  button.classList.remove("greenButton");
  header.classList.remove("whiteNav");
  button.classList.add("revertGreenButton");
  header.classList.add("revertWhiteNav");
};

window.addEventListener("scroll", function () {
  scrollpos = window.scrollY;

  if (scrollpos >= header_height) {
    add_class_on_scroll();
  } else {
    remove_class_on_scroll();
  }
});
