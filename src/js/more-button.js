const moreButton = document.querySelector('.more-button');
const contentText = document.querySelector('.content-text');
const buttonText = document.querySelector('.more-button__text');
const moreButtonIcon = document.querySelector('.icon-more-button');

const contentTextHeight = contentText.style.height;

let moreStatus = '';

moreButton.addEventListener('click', function () {
  if (moreStatus === '' || moreStatus === 'hidden') {
    contentText.style.height = 'auto';
    buttonText.textContent = 'Скрыть';
    moreButtonIcon.style.transform = 'rotate(180deg)';
    return (moreStatus = 'opened');
  }

  if (moreStatus === 'opened') {
    contentText.style.height = contentTextHeight;
    buttonText.textContent = 'Читать далее';
    moreButtonIcon.style.transform = 'rotate(0)';
    return (moreStatus = 'hidden');
  }
});
