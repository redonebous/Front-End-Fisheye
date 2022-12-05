import { photographerFactory } from '../factories/photographer.js';

async function getPhotographers() {
    const photographers = await fetch('../../data/photographers.json')
        .then(res => res.json())
        .then(res => res.photographers)

    return ({
        photographers: [...photographers]
    })
}

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userWrapper = document.createElement('article');
        const userCardDOM = photographerModel.getUserCardDOM();
        const userDescDOM = photographerModel.getUserDescDOM();
        userWrapper.appendChild(userCardDOM);
        userWrapper.appendChild(userDescDOM);
        userWrapper.classList.add('flex-col');

        photographersSection.appendChild(userWrapper);
    });
};

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
};

init();
