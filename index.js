const listToAdd = ['Loans', 'Finance', 'Debt'];
const list = document.getElementById('menu-items');
let isLogged = false;

let toggleMenu = function () {
    const menu = document.getElementById('menu-toggle');
    menu.click();
}

let scrollTo = function (elementId) {
    const element = document.getElementById(elementId);
    element.scrollIntoView({ behavior: 'smooth' })
}

let loggingFunction = function () {
    scrollTo('footer');

    toggleMenu();

    listToAdd.forEach((element) => {
        const li = document.createElement('li');
        const a = document.createElement('a');

        li.className = 'added-menu';

        a.appendChild(document.createTextNode(element));
        a.href = '#';
        a.className = 'menu__item';

        li.appendChild(a);
        list.appendChild(li);
    });

    isLogged = true;
}

let closeMenu = function () {
    if (isLogged) {
        const liToRemove = document.querySelectorAll('.added-menu');
        liToRemove.forEach((li) => {
            li.remove();
        });

        scrollTo('content');
        isLogged = false;
    }
    toggleMenu();

}

