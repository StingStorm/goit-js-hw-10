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
    .then(fulfilled => iziToast.success(fulfilled))
    .catch(error => iziToast.error(error));
});

function makePromise(delay, typeOfPromise) {
  const successToastOpt = {
    title: 'OK',
    titleSize: '16px',
    titleLineHeight: 1.5,
    message: `Fulfilled promise in ${delay}ms`,
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
    title: 'OK',
    titleSize: '16px',
    titleLineHeight: 1.5,
    message: `Rejected promise in ${delay}ms`,
    messageSize: '16px',
    messageLineHeight: 1.5,
    messageColor: '#fff',
    backgroundColor: '#ef4040',
    iconUrl: '/img/toastIcon.svg',
    iconColor: '#fff',
    position: 'topRight',
    theme: 'dark',
    closeOnEscape: true,
    transitionIn: 'bounceInDown',
    transitionOut: 'fadeOutUp',
  };

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeOfPromise === 'fulfilled') {
        resolve(successToastOpt);
      } else {
        reject(errorToastOpt);
      }
    }, delay);
  });
}
