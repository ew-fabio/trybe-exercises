const body = document.querySelector('#container');/* body */
body.style.backgroundColor = 'lightgray';

const header = document.getElementById('header-container');/* header */
header.style.backgroundColor = 'rgb(11, 138, 58)';

const list = document.querySelectorAll('section[class$="tasks"]');/* lista das sections */
//console.log(list);
list[0].style.backgroundColor = 'lightsalmon';
list[1].style.backgroundColor = 'orange';

const titleListUrg = document.querySelectorAll('.emergency-tasks > div > h3');/* títulos urgentes */
//console.log(titleListUrg);
for (let index = 0; index < titleListUrg.length; index += 1) {
  titleListUrg[index].style.backgroundColor = 'magenta';
}

const titleListNotUrg = document.querySelectorAll('.no-emergency-tasks > div > h3');/* títulos não urgentes */
//console.log(titleListUrg);
for (let index = 0; index < titleListNotUrg.length; index += 1) {
  titleListNotUrg[index].style.backgroundColor = 'black';
}

const footer = document.getElementsByTagName('footer');/* footer */
//console.log(footer);
footer[0].style.backgroundColor = 'black';