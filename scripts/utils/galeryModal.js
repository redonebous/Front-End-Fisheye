import { mediaFactory } from "../factories/media.js";

// Event ligthbox 

function galeryModal() {

    function setLightBox(state) {
        let contents = document.querySelectorAll(".media-content");
        contents = Array.from(contents);
        const ligthbox = document.querySelector("#ligthbox");
        const body = document.querySelector("body");
        const contentBox = document.querySelector(".content-lightbox");
        contents.map(elem => {
            elem.addEventListener('click', () => {
                ligthbox.style.display = "block";
                body.style.overflow = "hidden";
                let contentId = elem.id;
                contentId = contentId.split('-');
                contentId = Number(contentId[1]);
                let found = state.media.find(elem => elem.id == contentId);

                const mediaModel = mediaFactory(found);
                let img = mediaModel.getContent(found);
                contentBox.appendChild(img);

                console.log(found);
            })
        })

    }

    return { setLightBox };


}

export { galeryModal };