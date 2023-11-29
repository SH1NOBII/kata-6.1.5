const moreBtn = document.querySelector('.technique-type__more-button');
const techniqueTypeItems = document.querySelectorAll('.technique-type__item');
const btnTitle = document.querySelector('.technique-type__more-button-text');

moreBtn.addEventListener('click', function () {
  if (btnTitle.textContent === 'Показать всё') {
    btnTitle.textContent = 'Скрыть';
    for (let item of techniqueTypeItems) {
      item.classList.add('technique-type__item--opened');
    }
  } else {
    for (let item of techniqueTypeItems) {
      item.classList.remove('technique-type__item--opened');
    }
    btnTitle.textContent = 'Показать всё';
  }
});
