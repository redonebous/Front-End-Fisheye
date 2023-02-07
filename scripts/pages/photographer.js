import { mediaFactory } from '../factories/media.js';
import { photographerFactory } from '../factories/photographer.js';
import { getPhotographers, getMedias } from '../utils/dataProvider.js';
import { contactModal } from '../utils/contactForm.js';

let state = {};

async function prepareData() {
    let media = await getMedias();
    let photographer = await getPhotographers();

    let params = new URLSearchParams(window.location.search);
    let userId = params.get('page');


    state.media = media['media'].filter(media => media.photographerId == userId);
    photographer = photographer['photographers'].filter(user => user.id == userId);
    state.photographer = photographer[0];

    state.totalLike = 0;

    state.media.forEach(media => state.totalLike += media.likes);

    /* const data = { media, photographer, totalLike };

    return data; */
}


async function displayData() {
    const main = document.querySelector("#main");
    const header = document.querySelector('.photograph-header');
    const galery = document.querySelector('.galery-section');
    const modal = document.querySelector('.modal');
    const modalHeader = document.querySelector('.modal-header');
    console.log(state);
    console.log(state.photographer);

    const photographerModel = photographerFactory(state);

    const userHeader = photographerModel.getUserHeaderDOM();
    const profilePicture = photographerModel.getPictureProfileDOM();
    const infoUser = photographerModel.getUserAnalytics(state.totalLike);
    const titleModal = photographerModel.getHeaderContactForm();
    const contactForm = photographerModel.getContactForm();


    header.appendChild(userHeader);
    header.appendChild(profilePicture);
    modalHeader.appendChild(titleModal);
    modal.appendChild(contactForm);

    state.media.forEach((media) => {
        const galeryModel = mediaFactory(media);
        const mediaCard = galeryModel.getMediaCardDOM();
        galery.appendChild(mediaCard);
    });

    main.appendChild(infoUser);

    const contactFormUtil = contactModal();
    contactFormUtil.setEventModal();

};

async function init() {
    // Récupère les datas utiles à la page 
    await prepareData();
    await displayData();
};

init();
