import { mediaFactory } from '../factories/media.js';
import { photographerFactory } from '../factories/photographer.js';
import { getPhotographers, getMedias } from '../utils/dataProvider.js';
import { displayModal, closeModal } from '../utils/contactForm.js';

async function prepareData() {
    let media = await getMedias();
    let photographer = await getPhotographers();

    let params = new URLSearchParams(window.location.search);
    let userId = params.get('page');

    media = media['media'].filter(media => media.photographerId == userId);
    photographer = photographer['photographers'].filter(user => user.id == userId);

    const data = { media, photographer };

    return data;
}


async function displayData({ media, photographer }) {
    const main = document.querySelector("#main");
    const header = document.querySelector('.photograph-header');
    const galery = document.querySelector('.galery-section');

    const photographerModel = photographerFactory(photographer[0]);
    const userHeader = photographerModel.getUserHeaderDOM();
    const profilePicture = photographerModel.getPictureProfileDOM();

    header.appendChild(userHeader);
    header.appendChild(profilePicture);

    media.forEach((media) => {
        const galeryModel = mediaFactory(media);
        const mediaCard = galeryModel.getMediaCardDOM();
        galery.appendChild(mediaCard);
    });

    /* medias.forEach((media) => {
        const galeryModel = mediaFactory(media);
        const photographerModel = photographerFactory(photopgrapher);
        main.appendChild();
    }); */
};

async function init() {
    // Récupère les datas utiles à la page 
    const data = await prepareData();
    displayData(data);
};

init();
