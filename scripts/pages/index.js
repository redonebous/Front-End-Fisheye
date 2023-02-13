import { photographerFactory } from '../factories/photographer.js';
import { getPhotographers } from '../utils/dataProvider.js'

let state = {};

async function displayData() {
    let photographers = await getPhotographers();
    state.userList = photographers['photographers'];
    const photographersSection = document.querySelector(".photographer_section");

    console.log(state)
    const photographerModel = photographerFactory(state);
    const galeryPhotographers = photographerModel.getGaleryPhotographers();

    photographersSection.appendChild(galeryPhotographers);



    /*  state.userList.forEach((photographer) => {
         const photographerModel = photographerFactory(photographer);
         const userWrapper = document.createElement('article');
         const userCardDOM = photographerModel.getUserCardDOM(photographer);
         const userDescDOM = photographerModel.getUserDescDOM();
         userWrapper.appendChild(userCardDOM);
         userWrapper.appendChild(userDescDOM);
         userWrapper.classList.add('flex-col');
 
         photographersSection.appendChild(userWrapper);
     }); */
};

async function init() {
    await displayData();
};

init();
