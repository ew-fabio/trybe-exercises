import "./style.css";

const dogBTN = document.querySelector('#get-dog');
const catBTN = document.querySelector('#get-cat');
const surpriseBTN = document.querySelector('#random-pet');
const image = document.querySelector('#img-pet');


function getDog() {
  const url = `https://dog.ceo/api/breeds/image/random`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      image.src = data.message;
    })
}


function getCat() {
  const url = `https://aws.random.cat/meow`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      image.src = data.file;
    })
}


function surprisePet() {
 const promises = [getDog(), getCat()];

 Promise.any(promises)
}


dogBTN.addEventListener('click', getDog);
catBTN.addEventListener('click', getCat);
surpriseBTN.addEventListener('click', surprisePet);


