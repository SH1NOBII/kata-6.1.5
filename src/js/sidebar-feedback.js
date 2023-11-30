const sidebarMenu = document.querySelectorAll('.header-navigation__chat');
const sidebarCont = document.querySelector('.sidebar-feedback__container ');
const menuClose = document.querySelector('.sidebar-feedback__close-button');
const headerContainer = document.querySelector('.header-container');
const mainContainer = document.querySelector('.main-wrapper');
const appWidth1 = window.innerWidth;

for (const feedbackIcon of sidebarMenu) {
  feedbackIcon.addEventListener('click', () => {
    sidebarCont.classList.add('sidebar-feedback--opened');
    headerContainer.style.filter = 'blur(6px)';
    mainContainer.style.filter = 'blur(6px)';
  });
}

menuClose.addEventListener('click', () => {
  sidebarCont.classList.remove('sidebar-feedback--opened');
  headerContainer.style.filter = 'blur(0px)';
  mainContainer.style.filter = 'blur(0px)';
});

mainContainer.addEventListener('click', () => {
  if (appWidth1 < 1440) {
    sidebarCont.classList.remove('sidebar-feedback--opened');
    headerContainer.style.filter = 'blur(0px)';
    mainContainer.style.filter = 'blur(0px)';
  }
});
