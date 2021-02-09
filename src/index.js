import menu from './menu.json';
import menuCards from './templates/menu-cards.hbs';
import './styles.css';

const body = document.querySelector('body');
const switcher = document.querySelector('.js-switch-input');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

switcher.addEventListener('change', choiceOfTheme);
switcher.addEventListener('change', onLocalStorage);

function choiceOfTheme(el) {
  const choice = switcher.checked;

  if (choice) {
    body.classList.add(Theme.DARK);
    body.classList.remove(Theme.LIGHT);
  } else {
    body.classList.add(Theme.LIGHT);
    body.classList.remove(Theme.DARK);
  }
}

function onLocalStorage(el) {
  const choice = switcher.checked;

  if (choice) {
    localStorage.setItem('theme', Theme.DARK);
  } else {
    localStorage.removeItem('theme');
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

const localTheme = localStorage.getItem('theme');

if (localTheme === Theme.DARK) {
  body.classList.add(Theme.DARK);
  switcher.checked = true;
}

const menuEl = document.querySelector('.js-menu');

function creatMenu(menu) {
  const menuMarkup = menu.map(post => menuCards(post)).join('');
  menuEl.insertAdjacentHTML('beforeend', menuMarkup);
}

creatMenu(menu);
