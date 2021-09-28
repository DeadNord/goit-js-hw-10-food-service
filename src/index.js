// Import
import main from "./main.hbs";
import menu from "./menu.json";

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// Links
const refs = {
    toogle: document.getElementById(`theme-switch-toggle`),
    checkbox: document.querySelector(".theme-switch__control"),
    body: document.querySelector("body"),
    cards: document.querySelector(".menu"),
    card: main(menu)
};


// Cards Insert
refs.cards.insertAdjacentHTML("beforeend", refs.card);

// ThemeSwitch
function addClass(color) {
    refs.body.classList.add(color);
}
function removeValue(light, dark) {
    refs.body.classList.toggle(light);
    refs.body.classList.toggle(dark);
}

// ThemeSwitchStorage
const localStorageValue = localStorage.getItem('Theme') || Theme.LIGHT;
refs.toogle.setAttribute("checked", "false");
refs.toogle.checked = localStorageValue === Theme.DARK;
addClass(localStorageValue);


refs.checkbox.addEventListener('change', e => {
  if (e.target.nodeName!=='INPUT') {
      return;
  }
    removeValue(Theme.LIGHT, Theme.DARK);
  if (e.target.checked) {
      localStorage.setItem('Theme', 'dark-theme');
  }else{
      localStorage.removeItem('Theme');
  }
})