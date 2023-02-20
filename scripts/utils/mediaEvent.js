// EventListener in photographer's page

import { mediaFactory } from "../factories/media.js";
import { galeryModal } from "./galeryModal.js";


function mediaEvent() {

    function setMediaEvent(state) {
        setLikeEvent(state);
        setSortEvent(state);
    }

    function setLikeEvent(state) {
        let btnLike = document.querySelectorAll(".btn-like");
        btnLike = Array.from(btnLike);
        const likeCount = document.querySelector(".likeCount");

        btnLike.map(elem => {
            elem.addEventListener('click', () => {
                let likeId = elem.id;
                likeId = likeId.split('-');
                likeId = Number(likeId[1]);
                let found = state.media.find(elem => elem.id == likeId);
                if (found.isLiked == true) {
                    found.likes = found.likes - 1;
                    found.isLiked = false;
                    state.totalLike = state.totalLike - 1;
                } else {
                    found.likes = found.likes + 1;
                    found.isLiked = true;
                    state.totalLike = state.totalLike + 1;
                }

                const icon = document.createElement('i');
                const icon2 = document.createElement('i');

                icon.classList.add('fa-solid', 'fa-heart');
                icon2.classList.add('fa-solid', 'fa-heart');

                elem.innerText = found.likes + ' ';
                likeCount.innerText = state.totalLike + ' ';
                elem.appendChild(icon);
                likeCount.appendChild(icon2);

            })
        });
    }

    function setSortEvent(state) {
        const tri = document.querySelector("#trier-galery");
        const galery = document.querySelector(".galery-section");
        const lightbox = galeryModal();
        tri.addEventListener("change", () => {
            galery.innerHTML = "";
            switch (tri.value) {
                case 'popularite':
                    state.media.sort((a, b) => b.likes - a.likes);
                    break;

                case 'titre':
                    state.media.sort((a, b) => a.title.localeCompare(b.title));
                    break;

                case 'date':
                    state.media.sort((a, b) => new Date(b.date) - new Date(a.date));
                    break;

                default:
                    break;
            }
            state.media.forEach(elem => {
                const mediaModel = mediaFactory();
                const card = mediaModel.getMediaCardDOM(elem);
                galery.appendChild(card);
            });
            setLikeEvent(state);
            lightbox.setLightBox(state);
        });
    }

    return { setLikeEvent, setSortEvent, setMediaEvent };
}


export { mediaEvent };