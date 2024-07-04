// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const formOfPromises = document.querySelector('.form');

formOfPromises.addEventListener('submit', e => {
  e.preventDefault();
  const userDelay = e.target.elements.delay.value;
  const promiseType = e.target.elements.state.value;

  makePromise(userDelay, promiseType)
    .then(fulfilledDelay => {
      successToastOpt.message = `Fulfilled promise in ${fulfilledDelay}ms`;
      iziToast.success(successToastOpt);
    })
    .catch(errorDelay => {
      errorToastOpt.message = `Rejected promise in ${errorDelay}ms`;
      iziToast.error(errorToastOpt);
    });
});

function makePromise(delay, typeOfPromise) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeOfPromise === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}

const successToastOpt = {
  title: 'OK',
  titleSize: '16px',
  titleLineHeight: 1.5,
  messageColor: '#fff',
  messageSize: '16px',
  messageLineHeight: 1.5,
  backgroundColor: '#59a10d',
  position: 'topRight',
  theme: 'dark',
  closeOnEscape: true,
  transitionIn: 'bounceInDown',
  transitionOut: 'fadeOutUp',
};

const errorToastOpt = {
  title: 'Error',
  titleSize: '16px',
  titleLineHeight: 1.5,
  messageSize: '16px',
  messageLineHeight: 1.5,
  messageColor: '#fff',
  backgroundColor: '#ef4040',
  iconUrl: '../img/toastIcon.svg',
  iconColor: '#fff',
  position: 'topRight',
  theme: 'dark',
  closeOnEscape: true,
  transitionIn: 'bounceInDown',
  transitionOut: 'fadeOutUp',
};
