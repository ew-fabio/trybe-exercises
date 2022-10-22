const verificacaoBranco = (value1, value2) => {
  if (value1 === '' || value2 === '') {
    throw new Error('Os valores não podem estar em branco!');
  }
};

const verificacaoLetras = (value1, value2) => {
  if (isNaN(value1) || isNaN(value2)) {
    throw new Error('Os valores precisam ser números!');
  }
};


function sum() {
  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value;
  try {
    verificacaoBranco(value1, value2);
    verificacaoLetras(value1, value2);
    const result = Number(value1) + Number(value2);
    document.getElementById('result').innerHTML = `Resultado: ${result}`;
  } catch (error) {
    document.getElementById('result').innerHTML = error.message;
  } finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
}

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}































