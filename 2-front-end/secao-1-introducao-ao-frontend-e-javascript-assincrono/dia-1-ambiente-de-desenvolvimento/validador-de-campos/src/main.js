import validator from 'validator';

const textToCheck = document.querySelector('#text');
const checker = document.querySelector('#validators');
const btnConfirm = document.querySelector('#btn-confirm');
const result = document.querySelector('.result');

btnConfirm.addEventListener('click', (e) => {
  e.preventDefault();

  const verifications = {
    lowerCase: validator.isLowercase(textToCheck.value),
    strongPassword: validator.isStrongPassword(textToCheck.value),
    onlyNumbers: validator.isNumeric(textToCheck.value),
    onlyAlphaNum: validator.isAlphanumeric(textToCheck.value),
    mobilePhone: validator.isMobilePhone(textToCheck.value, 'pt-BR'),
  };

  // console.log(`${verifications.lowerCase}.`);
  // console.log(`${verifications.strongPassword}.`);
  // console.log(`${verifications.onlyNumbers}.`);
  // console.log(`${verifications.onlyAlphaNum}.`);
  // console.log(`${verifications.mobilePhone}.`);

  result.innerHTML = `${verifications[checker.value]}.`;
});

