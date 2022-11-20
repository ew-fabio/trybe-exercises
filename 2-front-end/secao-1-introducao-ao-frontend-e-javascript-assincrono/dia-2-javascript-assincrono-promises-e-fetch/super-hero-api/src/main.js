import Swal from "sweetalert2";
import "./style.css";

const choiceBTN = document.querySelector('#sort-btn');

const imageHero = document.querySelector('#image');

const nameHero = document.querySelector('#name');


function randomHero() {
  const idHero = Math.floor(Math.random() * 732);

  const url = `https://akabab.github.io/superhero-api/api/id/${idHero}.json`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {

      const card = document.createElement('img');
      card.src = data.images.sm;
      imageHero.innerHTML = '';
      imageHero.appendChild(card);

      nameHero.innerHTML = data.name;

      console.log(data);
    })
    // .catch((error) => {
    //   return Swal.fire({
    //     title: error.message,
    //     text: 'Personagem não encontrado...',
    //     icon: 'warning',
    //     confirmButtonText: 'OK'
    //   })
    // })

  console.log('ok');
}


choiceBTN.addEventListener('click', randomHero);
