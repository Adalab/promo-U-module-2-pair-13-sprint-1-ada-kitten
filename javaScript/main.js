'use strict'

/*poner lo primero definidas las variables que nos piden el segundo dia de clase, name, imagen, race, desc, y luego poner las kittenOne, Two y Three*/

const kittenImage1 = 'https://dev.adalab.es/gato-siames.webp';
const kittenName1 = 'Anastacio';
const kittenDesc1 = ' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';
const kittenRace1 = 'Siamés';

/*esto ya no hace falta porque hemos definido cada caracteristica (variable const) dentro de la variable grande, kittenOne, kittenTwo, kittenThree
const kittenOne = kittenImage1 + kittenName1 + kittenDesc1 + kittenRace1;*/

const kittenImage2 = 'https://dev.adalab.es/sphynx-gato.webp';
const kittenName2 = 'Fiona';
const kittenDesc2 = 'Produce fascinación y curiosidad. Exótico, raro, bello, extraño…hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.';  
const kittenRace2 = 'Sphynx';

/*esto ya no hace falt porque hemos definido cada caracteristica (variable const) dentro de la variable grande, kittenOne, kittenTwo, kittenThree
const kittenTwo = kittenImage2 + kittenName2 + kittenDesc2 + kittenRace2;*/

const kittenImage3 = 'https://dev.adalab.es/maine-coon-cat.webp';
const kittenName3 = 'Cielo';
const kittenDesc3 = 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.';   
const kittenRace3 = 'Main Coon'; /**/

/*esto ya no hace falta porque hemos definido cada caracteristica (variable const) dentro de la variable grande, kittenOne, kittenTwo, kittenThree
const kittenThree = kittenImage3 + kittenName3 + kittenDesc3 + kittenRace3;*/


const catsSection = document.querySelector(".js-list");
const input_search_desc = document.querySelector('.js_in_search_desc');
const descrSearchText = input_search_desc.value;

/****************para lo de la raza*********************/
/*en kittenOne, en <h4 class="card_race"> ponemos ${html} (en vez de kittenRace1) </h4>*/

let html = '';
if (kittenRace1 === "") {html= `Uy que despiste, no sabemos su raza`;} else {html = kittenRace1;}


const kittenOne = `<li class="card">
<article>
    <img
    class="card_img"
    src=${kittenImage1}
    alt="gatito"
    />
        <h3 class="card_title">${kittenName1.toUpperCase()}</h3>
        <h4 class="card_race">${html}</h4>
        <p class="card_description">${kittenDesc1}</p>
</article>
</li>`;




const kittenTwo = `<li class="card">
    <img
        class="card_img"
        src=${kittenImage2}
        alt="sphynx-cat"
    />
        <h3 class="card_title">${kittenName2.toUpperCase()}</h3>
        <h4 class="card_race">${kittenRace2}</h4>
        <p class="card_description">${kittenDesc2}</p>
</li>`;


const kittenThree  = `<li class="card">
    <img
        class="card_img"
        src=${kittenImage3}
        alt="maine-coon-cat"
    />
        <h3 class="card_title">${kittenName3.toUpperCase()}</h3>
        <h4 class="card_race">${kittenRace3}</h4>
        <p class="card_description">${kittenDesc3}
            </p>
</li>`; 

/*
catsSection.innerHTML = kittenOne;
catsSection.innerHTML += kittenTwo;
catsSection.innerHTML += kittenThree;*/

// += lo que hace es concatenar los elementos para que no se sobreescriban. 

/*
let html = document.querySelector('.card_race');
if (kittenRace1 === "") {html= `Uy que despiste, no sabemos su raza`;} else {html = kittenRace1;}

  if (kittenRace2 === "") {html = `Uy que despiste, no sabemos su raza`;} else {html = kittenRace2;}

  if (kittenRace3.value === '') {html = 'Uy que despiste, no sabemos su raza';} else {html = kittenRace3.value;}
*/


if( kittenDesc1.includes(descrSearchText) ) {catsSection.innerHTML = kittenOne;
}
if( kittenDesc2.includes(descrSearchText) ) {catsSection.innerHTML = kittenTwo;
}
if( kittenDesc3.includes(descrSearchText) ) {catsSection.innerHTML = kittenThree;
}
else {catsSection = null;}
       
/*catsSection.innerHTML = kittenOne + kittenTwo + kittenThree;*/

