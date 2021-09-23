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


Listener
refs.toogle.addEventListener("change", switchTheme);

function switchTheme() {
    $('body').on('change', function () { // при выборе темы..
        let val = $(this).val(); // получим в переменную атрибут value
        $('body') // обратимся к body
            .attr('class', val + 'theme'); // добавим выбранную тему с префиксом 'theme-'
    
        // Далее сохраняем значение в localStorage
        localStorage.setItem(val, 'theme');
        // Но я её закоментил, ибо в сниппете она работать не будет.
    });

    // Сохранение мы написали, но если обновить страницу, то дизайн слетит, по этому пишем ещё код, который будет брать значение из локального хранилища и ставить его..
    $(document).on('ready', function () {
        let theme = localStorage('theme') || 'light'; // Получаем значение из хранилища, если его нет, то используем 'light' как дефолтное.
        // P.s. это код тоже не будет работать в сниппете.
        // А дальше как и выше
        $('body') // обращаемся к body
            .attr('class', theme + '-theme'); // ставим класс с префиксом.
    
        // ещё для красоты можно сделать так
        $('#theme option:selected') // обратимся к селектору с темой
            .prop('selected', false); // у "выбранного" уберём  "выбор"
        $('#theme option[value="' + theme + '"]') // найдём так же тот option с сохранённой темой
            .prop('selected', true); // и поставим "выбор" на него.
    });
}