import menu from '../menu.json';
import menuCards from '../templates/menu-cards.hbs';

const menuEl = document.querySelector('.js-menu');

function creatMenu(menu) {
  const menuMarkup = menu.map(post => menuCards(post)).join('');
  menuEl.insertAdjacentHTML('beforeend', menuMarkup);
}

creatMenu(menu);

// import galleryItems from '../templates/gallery-items.hbs';
// import menuItems from '../menu.json';

// const markup = galleryItems(menuItems);
// const menu = document.querySelector('.js-menu');

// menu.insertAdjacentHTML('beforeend', markup);
