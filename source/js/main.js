// import {iosVhFix} from './utils/ios-vh-fix';
// import {initModals} from './modules/modals/init-modals';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  // iosVhFix();

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

  const phoneInput = document.querySelector('input#phone');

  phoneInput.addEventListener('input', (e) => {
    const {target, data, inputType} = e;

    if (!isStringifiedNumber(data)) {
      target.value = target.value.slice(0, -1);
    }

    if (inputType === 'deleteContentBackward' && target.value.length <= 3) {
      target.value = '+7(';
    }

    if (inputType !== 'deleteContentBackward' && target.value.length >= 6 && target.value[6] !== ')') {
      target.value = `${target.value.slice(0, 6)})${target.value.slice(6)}`;
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

    if (inputType === 'deleteContentBackward' && target.value.length <= 3) {
      target.value = '+7(';
    }

    if (inputType !== 'deleteContentBackward' && target.value.length >= 6 && target.value[6] !== ')') {
      target.value = `${target.value.slice(0, 6)})${target.value.slice(6)}`;
    }
  });

  const pageBody = document.querySelector('.page-body');
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

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    // initModals();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
