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
    body: document.querySelector("body"),
    cards: document.querySelector(".menu"),
    card: main(menu)
};


// Cards Insert
refs.cards.insertAdjacentHTML("beforeend", refs.card);


// Listener
refs.toogle.addEventListener("change", switchTheme);

// ThemeSwitch
function switchTheme() {
    if(this.checked){
        refs.body.classList.add(Theme.DARK);
        refs.body.classList.remove(Theme.LIGHT); 
    }else{
        refs.body.classList.add(Theme.LIGHT);
        refs.body.classList.remove(Theme.DARK); 
    }
}