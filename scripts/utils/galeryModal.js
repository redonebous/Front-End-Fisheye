import { mediaFactory } from "../factories/media.js";

// Event ligthbox 

function galeryModal() {
    const ligthbox = document.querySelector("#ligthbox");
    const body = document.querySelector("body");
    const contentBox = document.querySelector(".content-lightbox");
    const close = document.querySelector(".close-ligthbox");
    const btnPost = document.querySelector(".btn-post");
    const btnPrev = document.querySelector(".btn-prev");
    const ligthDesc = document.createElement("span");
    ligthDesc.classList.add("ligth-desc");

    function setLightBox(state) {
        let contents = document.querySelectorAll(".media-content");
        let cards = Array.from(contents);

        let currentIndex;

        cards.map(elem => {
            elem.addEventListener('click', () => {
                ligthbox.style.display = "flex";
                body.style.overflow = "hidden";

                btnPost.setAttribute("tabindex", 1);
                btnPrev.setAttribute("tabindex", 2);
                close.setAttribute("tabindex", 3);
                btnPost.focus();


                let contentId = elem.id;
                contentId = contentId.split('-');
                contentId = Number(contentId[1]);
                let found = state.media.find(elem => elem.id == contentId);
                currentIndex = state.media.findIndex(elem => elem.id == found.id);
                window.scroll(0, 0);

                changeContent(found);
            })
        });

        close.addEventListener('click', () => {
            ligthbox.style.display = "none";
            body.style.overflow = "unset";
            contentBox.innerHTML = "";

            btnPost.removeAttribute("tabindex");
            btnPrev.removeAttribute("tabindex");
            close.removeAttribute("tabindex");
            contents[currentIndex].focus();
        });

        btnPost.addEventListener("click", () => {
            let postIndex = currentIndex + 1;

            if (postIndex == state.media.length) postIndex = 0;

            contentBox.innerHTML = "";
            changeContent(state.media[postIndex]);
            currentIndex = postIndex;
        })

        btnPrev.addEventListener("click", () => {
            let prevIndex = currentIndex - 1;

            if (currentIndex == 0) prevIndex = state.media.length - 1;

            contentBox.innerHTML = "";
            changeContent(state.media[prevIndex]);
            currentIndex = prevIndex;
        })

    }

    function changeContent(content) {
        const mediaModel = mediaFactory();
        let img = mediaModel.getContent(content);
        contentBox.appendChild(img);
        ligthDesc.textContent = content.title;
        contentBox.appendChild(ligthDesc);

    }

    return { setLightBox };


}

export { galeryModal };