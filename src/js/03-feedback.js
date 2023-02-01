// import throttle from 'lodash.throttle';

// const refs = {
//   form: document.querySelector('form'),
//   input: document.querySelector('input'),
//   textarea: document.querySelector('textarea'),
// };

// const LOCALSTORAGE_KEY = 'feedback-form-state';
// const getValue = localStorage.getItem(LOCALSTORAGE_KEY);
// const saveValue = JSON.parse(getValue);
// let inputObject = {};

// refs.form.addEventListener('input', throttle(funcLocalStorage, 500));
// refs.form.addEventListener('submit', saveEmailMessage);

// updateOutput();

// function saveEmailMessage(event) {
//   inputObject[event.target.name] = event.target.value.trim();
//   localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(inputObject));
// }

// function funcLocalStorage(event) {
//   event.preventDefault();
//   const savedInfo = localStorage.getItem(LOCALSTORAGE_KEY);
//   console.log(savedInfo);

//   event.currentTarget.reset();
//   localStorage.removeItem(LOCALSTORAGE_KEY);
//   inputObject = {};
// }
// function updateOutput() {
//   if (getValue) {
//     // for (let key in savedDataObject) {
//     //   refs.form.elements[key].value = savedDataObject[key];
//     // }
//     refs.input.value = saveValue.email || '';
//     refs.textarea.value = saveValue.message || '';
//   }
// }
import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';

const getValue = localStorage.getItem(LOCALSTORAGE_KEY);
const saveValue = JSON.parse(getValue);
let objData = {};

const refs = {
  form: document.querySelector('form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};

refs.form.addEventListener('input', throttle(funcLocalStorage, 500));
refs.form.addEventListener('submit', funcSubmit);

updateOutput();

function funcLocalStorage(event) {
  objData[event.target.name] = event.target.value.trim();
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(objData));
}

function funcSubmit(event) {
  event.preventDefault();

  const savedDatas = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  console.log(savedDatas);

  updateOutput();
  event.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
  objData = {};
}

function updateOutput() {
  if (getValue) {
    refs.input.value = saveValue.email || '';
    refs.textarea.value = saveValue.message || '';
  }
}
