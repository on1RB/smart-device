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

  accList.forEach((element) => {
    element.addEventListener('click', () => {
      element.classList.toggle('page-footer__accordion--open');
      const panel = element.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
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
