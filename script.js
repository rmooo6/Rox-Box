function switchLang(lang) {
  const elements = document.querySelectorAll("[data-" + lang + "]");
  elements.forEach(el => {
    el.innerText = el.getAttribute("data-" + lang);
  });
}
