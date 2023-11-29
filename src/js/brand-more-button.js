const moreBtn = document.querySelector('.brand__more-button');
const brandItems = document.querySelectorAll('.brand__item');
const btnTitle = document.querySelector('.brand__more-button-text');

moreBtn.addEventListener('click', function () {
  if (btnTitle.textContent === 'Показать всё') {
    btnTitle.textContent = 'Скрыть';
    for (let item of brandItems) {
      item.classList.add('brand__item--opened');
    }
  } else {
    for (let item of brandItems) {
      item.classList.remove('brand__item--opened');
    }
    btnTitle.textContent = 'Показать всё';
  }
});
