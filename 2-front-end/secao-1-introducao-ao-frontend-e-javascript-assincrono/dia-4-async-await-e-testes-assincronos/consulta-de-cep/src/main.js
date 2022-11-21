import "./style.css";
import Swal from "sweetalert2";

const inputCEP = document.querySelector('#input-cep');
const confirmBTN = document.querySelector('#confirm-btn');
const renderedData = document.querySelector('#rendered-data');

async function consultCepAsync() {
  try {
    const cep = inputCEP.value;

    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const resp = await fetch(url);
    const data = await resp.json();

    if (data.erro) throw new Error('CEP inválido');

    renderedData.innerHTML = `${data.logradouro} - ${data.localidade}`;

  } catch (error) {
    renderedData.innerHTML = '';
    inputCEP.value = '';
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
    })
  }
}












confirmBTN.addEventListener('click', consultCepAsync);