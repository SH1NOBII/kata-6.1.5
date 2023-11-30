const burgerMenu = document.querySelector('.header-navigation__main-burger');
const dropDown = document.querySelector('.aside-menu-container');
const menuClose = document.querySelector('.btn-close-burger ');
const headerContainer = document.querySelector('.header-container');
const mainContainer = document.querySelector('.main-wrapper');
const appWidth = window.innerWidth;

burgerMenu.addEventListener('click', () => {
  dropDown.classList.add('aside-menu--active');
  headerContainer.style.filter = 'blur(6px)';
  mainContainer.style.filter = 'blur(6px)';
});

menuClose.addEventListener('click', () => {
  dropDown.classList.remove('aside-menu--active');
  headerContainer.style.filter = 'blur(0px)';
  mainContainer.style.filter = 'blur(0px)';
});

mainContainer.addEventListener('click', () => {
  if (appWidth < 1440) {
    dropDown.classList.remove('aside-menu--active');
    headerContainer.style.filter = 'blur(0px)';
    mainContainer.style.filter = 'blur(0px)';
  }
});

// document.addEventListener('click', (env) => {
//   const click = env.composedPath().includes(dropDown);
//   if (!click) {
//     dropDown.classList.remove('aside-menu--active');
//   }
// });
