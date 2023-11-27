document.addEventListener("scroll", (e) => {
  let startReadingBtn = document.getElementById("startReadingBtn");
  let header = document.querySelector("header");
  if (!isElementVisible(startReadingBtn)) {
    headerColorToggle(header);
  }
});

function headerColorToggle(el) {
  if (el.classList.contains("whiteNav")) {
    el.classList.remove("whiteNav");
  } else {
    el.classList.add("whiteNav");
  }
}

function isElementVisible(el) {
  const rect = el.getBoundingClientRect();
  const vWidth = window.innerWidth || doc.documentElement.clientWidth;
  const vHeight = window.innerHeight || doc.documentElement.clientHeight;

  if (
    rect.right < 0 ||
    rect.bottom < 0 ||
    rect.left > vWidth ||
    rect.top > vHeight
  )
    return false;

  return true;
}
