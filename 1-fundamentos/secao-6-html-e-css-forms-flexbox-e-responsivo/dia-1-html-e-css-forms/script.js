const button = document.querySelector('#submit-button');
const clearBtn = document.querySelector('#clear-button');
const authorizes = document.querySelector('#input-agree-2');


button.addEventListener('click', (event) => {
  const validation = textInputValidation();
  if (validation === false) {
    alert('Dados inválidos');
    event.preventDefault();
  } else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
  }
});


function textInputValidation() {
  const email = document.querySelector('#input-email').value.length;
  const invalidEmail = email < 10 || email > 50;

  const name = document.querySelector('#input-text').value.length;
  const invalidName = name < 10 || name > 40;

  const reason = document.querySelector('#input-answer').value.length;
  const invalidReason = reason > 500;

  if (invalidEmail || invalidName || invalidReason) {
    return false;
  }
  else {
    return true;
  }
}


authorizes.addEventListener('change', () => {
  if (!authorizes.checked) {
    button.disabled = true;
  }
  button.disabled = false;

})


clearBtn.addEventListener('click', () => {
  const formElements = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea');
  for (let index = 0; index < formElements.length; index += 1) {
    const userInput = formElements[index];
    userInput.value = '';
    userInput.checked = false;
  }
  textArea.value = '';
});