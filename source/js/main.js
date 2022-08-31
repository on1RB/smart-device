// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  // Modules
  // ---------------------------------
  const acc = document.querySelectorAll('.page-footer__accordion');
  const accList = Array.prototype.slice.call(acc);
  const panelList = document.querySelectorAll('.page-footer__panel');
  const panels = Array.prototype.slice.call(panelList);

  panels.forEach((element) => {
    element.classList.remove('page-footer__panel--nojs');
  });

  accList.forEach((element) => {
    element.classList.remove('page-footer__accordion--open');
  });

  accList.forEach((element, index) => {
    element.addEventListener('click', () => {
      element.classList.toggle('page-footer__accordion--open');
      const panel = element.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }

      // eslint-disable-next-line max-nested-callbacks, no-shadow
      accList.filter((_, i) => i !== index).forEach((element) => {
        element.classList.remove('page-footer__accordion--open');
        element.nextElementSibling.style.maxHeight = null;
      });
    });
  });

  const button = document.querySelector('.about__btn');
  const text = document.querySelectorAll('.about__hidden');
  const textList = Array.prototype.slice.call(text);
  const textHidden = document.querySelector('.about__text-hidden');

  if (button) {
    button.addEventListener('click', () => {
      if (textHidden.classList.contains('about__text-hidden')) {
        textHidden.classList.remove('about__text-hidden');
      } else {
        textHidden.classList.add('about__text-hidden');
      }
      textList.forEach((element) => {
        if (element.classList.contains('about__hidden')) {
          element.classList.remove('about__hidden');
          button.textContent = 'Свернуть';
        } else {
          element.classList.add('about__hidden');
          button.textContent = 'Подробнее';
        }
      });
    });
  }

  const phoneInput = document.querySelector('input#phone');

  phoneInput.addEventListener('input', (e) => {
    const {target, data, inputType} = e;

    if (!isStringifiedNumber(data)) {
      target.value = target.value.slice(0, -1);
    }

    if (inputType !== 'deleteContentBackward') {
      if (!target.value.startsWith('+7(')) {
        target.value = `+7(${target.value}`;
      }

      if (target.value.length >= 6 && target.value[6] !== ')') {
        target.value = `${target.value.slice(0, 6)})${target.value.slice(6)}`;
      }
    }
  });

  function isStringifiedNumber(str) {
    return !isNaN(Number(str));
  }

  const phoneInputModal = document.querySelector('input#tel');

  phoneInputModal.addEventListener('input', (e) => {
    const {target, data, inputType} = e;

    if (!isStringifiedNumber(data)) {
      target.value = target.value.slice(0, -1);
    }

    if (inputType !== 'deleteContentBackward') {
      if (!target.value.startsWith('+7(')) {
        target.value = `+7(${target.value}`;
      }

      if (target.value.length >= 6 && target.value[6] !== ')') {
        target.value = `${target.value.slice(0, 6)})${target.value.slice(6)}`;
      }
    }
  });

  const pageBody = document.querySelector('body');
  const headerButton = document.querySelector('.page-header__button');
  const modal = document.querySelector('.modal');
  const modalClose = document.querySelector('.modal__close');
  const modalOverlay = document.querySelector('.modal__overlay');
  const nameInput = document.querySelector('#user-name');

  headerButton.addEventListener('click', () => {
    pageBody.classList.add('scroll-lock-ios');
    modal.classList.add('modal--open');
    nameInput.focus();
  });

  modalClose.addEventListener('click', () => {
    modal.classList.remove('modal--open');
    pageBody.classList.remove('scroll-lock-ios');
  });

  modalOverlay.addEventListener('click', (e) => {
    const target = e.target;

    if (target.classList.contains('modal__overlay')) {
      modal.classList.remove('modal--open');
      pageBody.classList.remove('scroll-lock-ios');
    }
  });

  window.addEventListener('load', () => {
  });
});
