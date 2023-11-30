const sidebarMenu = document.querySelectorAll('.header-navigation__call');
const sidebarCont = document.querySelector('.sidebar-call__container ');
const menuClose = document.querySelector('.sidebar-call__close-button');
const headerContainer = document.querySelector('.header-container');
const mainContainer = document.querySelector('.main-wrapper');
const appWidth1 = window.innerWidth;

for (const callIcon of sidebarMenu) {
  callIcon.addEventListener('click', () => {
    sidebarCont.classList.add('sidebar-opened');
    headerContainer.style.filter = 'blur(6px)';
    mainContainer.style.filter = 'blur(6px)';
  });
}

menuClose.addEventListener('click', () => {
  sidebarCont.classList.remove('sidebar-opened');
  headerContainer.style.filter = 'blur(0px)';
  mainContainer.style.filter = 'blur(0px)';
});

mainContainer.addEventListener('click', () => {
  if (appWidth1 < 1440) {
    sidebarCont.classList.remove('sidebar-opened');
    headerContainer.style.filter = 'blur(0px)';
    mainContainer.style.filter = 'blur(0px)';
  }
});
