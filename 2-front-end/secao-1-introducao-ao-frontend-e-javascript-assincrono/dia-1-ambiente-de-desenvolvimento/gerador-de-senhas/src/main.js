import { nanoid } from 'nanoid'
import copy from 'clipboard-copy';
import './style.css'

const passwordBtnEl = document.querySelector('button');
const displayPasswordEl = document.querySelector('h2');
const copyBtn = document.querySelector('.copy');
const phrase = document.querySelector('p');

passwordBtnEl.addEventListener('click', () => {
  const randomPassword = nanoid();
  displayPasswordEl.innerHTML = randomPassword;
})

copyBtn.addEventListener('click', () => {
  copy(displayPasswordEl.innerHTML);
  phrase.style.visibility = 'visible';
})


// gabarito
// displayPasswordEl.addEventListener('click', (event) => {
//   copy(event.target.innerHTML);
//   alert('Senha copiada!');
// });
