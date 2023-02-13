import { photographerFactory } from '../factories/photographer.js';
import { getPhotographers } from '../utils/dataProvider.js'

let state = {};

async function displayData() {
    let photographers = await getPhotographers();
    state.userList = photographers['photographers'];
    const photographersSection = document.querySelector(".photographer_section");

    const photographerModel = photographerFactory(state);
    const galeryPhotographers = photographerModel.getGaleryPhotographers();

    photographersSection.appendChild(galeryPhotographers);


};

async function init() {
    await displayData();
};

init();
