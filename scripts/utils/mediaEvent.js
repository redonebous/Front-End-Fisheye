import { mediaFactory } from "../factories/media.js";
import { galeryModal } from "./galeryModal.js";

// LikeEvent + SortEvent

/* 
    - Mettre en place le style - OK
    - Recuperer l'index avec findIndex - OK
    - btn prev => findIndex - OK
    - if (index == 0) revenir au dernier et inverement - OK

    - AddEvent change sur select - OK
    - switch avec les case popu / date / titre - OK
    - sort dans chacun des case sur state.media - OK
    - vider galery section avec innerHTML = "" - OK
    - relancer getMediaCardDOM - OK
    - setLigthBox + setLikeEvent => relancer tous les event (à mettre direct dans getMediaCardDom) - OK

    - Sortir le getContactForm du JS et le coder en HTML - OK
    - Corriger les noms des images dans le dossier image pour correspondre au JSON pour Marcel

    - Faire un tour de la maquette et ajouter les attributs d'accessibilités
    - Ajouter le focus sur les elem de la modal contact + Ligthbox - OK
*/
// EventListener in photographer's page

function mediaEvent() {

    function setMediaEvent(state) {
        setLikeEvent(state);
        setSortEvent(state);
    }

    function setLikeEvent(state) {
        let btnLike = document.querySelectorAll(".btn-like");
        btnLike = Array.from(btnLike);
        const likeCount = document.querySelector(".likeCount");
        // recup l'id du media via l'id du btn + incrementer le totalLike et le likes + set le isLike 
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

                // Modifier l'affichage du btn like + totalLike dans userInfo
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