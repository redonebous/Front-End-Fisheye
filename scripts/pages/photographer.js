import { mediaFactory } from '../factories/media.js';
import { photographerFactory } from '../factories/photographer.js';
import { getPhotographers, getMedias } from '../utils/dataProvider.js';
import { contactModal } from '../utils/contactForm.js';

async function prepareData() {
    let media = await getMedias();
    let photographer = await getPhotographers();

    let params = new URLSearchParams(window.location.search);
    let userId = params.get('page');

    media = media['media'].filter(media => media.photographerId == userId);
    photographer = photographer['photographers'].filter(user => user.id == userId);

    let totalLike = 0;

    media.forEach(media => totalLike += media.likes);

    const data = { media, photographer, totalLike };

    return data;
}


async function displayData({ media, photographer, totalLike }) {
    const main = document.querySelector("#main");
    const header = document.querySelector('.photograph-header');
    const galery = document.querySelector('.galery-section');
    const modal = document.querySelector('.modal');
    const modalHeader = document.querySelector('.modal-header');

    const photographerModel = photographerFactory(photographer[0]);

    const userHeader = photographerModel.getUserHeaderDOM();
    const profilePicture = photographerModel.getPictureProfileDOM();
    const infoUser = photographerModel.getUserAnalytics(totalLike);
    const titleModal = photographerModel.getHeaderContactForm();
    const contactForm = photographerModel.getContactForm();


    header.appendChild(userHeader);
    header.appendChild(profilePicture);
    modalHeader.appendChild(titleModal);
    modal.appendChild(contactForm);

    media.forEach((media) => {
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
    const data = await prepareData();
    displayData(data);
};

init();
