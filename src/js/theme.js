const body = document.querySelector('body');
const switcher = document.querySelector('.js-switch-input');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

switcher.addEventListener('change', choiceOfTheme);
switcher.addEventListener('change', onLocalStorage);

// function choiceOfTheme() {
//   const choice = switcher.checked;

//   if (choice) {
//     body.classList.add(Theme.DARK);
//     body.classList.remove(Theme.LIGHT);
//   } else {
//     body.classList.add(Theme.LIGHT);
//     body.classList.remove(Theme.DARK);
//   }
// }

function switchTheme(on, off) {
  body.classList.add(on);
  body.classList.remove(off);
}

function choiceOfTheme() {
  const choice = switcher.checked;

  if (choice) {
    switchTheme(Theme.DARK, Theme.LIGHT);
  } else {
    switchTheme(Theme.LIGHT, Theme.DARK);
  }
}

function onLocalStorage() {
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
