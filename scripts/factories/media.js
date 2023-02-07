function mediaFactory(data) {
    const { id, photographerId, title, image, video, likes, date, price } = data;

    function getMediaCardDOM() {
        const card = document.createElement('article');
        card.setAttribute("aria-label", `#`)
        card.classList.add("flex-col");
        // Fontcion de check de la valeur de picture
        const content = getContent();

        const description = document.createElement('p');
        description.classList.add('flex-header');

        const titre = document.createElement('span');
        titre.textContent = title;

        const like = document.createElement('button');
        const icon = document.createElement('i');
        icon.classList.add('fa-solid', 'fa-heart');

        like.textContent = likes + ' ';
        like.appendChild(icon);
        description.appendChild(titre);
        description.appendChild(like);

        card.appendChild(content);
        card.appendChild(description);

        return (card);
    }


    function getContent() {

        let content;
        let path;

        if ('image' in data) {
            path = `assets/photographers/media/photographer_${photographerId}/${image}`
            content = document.createElement('img');

        } else {
            path = `assets/photographers/media/photographer_${photographerId}/${video}`;
            content = document.createElement('video');

        }
        content.setAttribute("src", path);
        content.setAttribute("alt", `#`);

        let wrapper = document.createElement('a');
        wrapper.setAttribute('href', "#");
        wrapper.appendChild(content)


        return (wrapper);
    }


    return { getMediaCardDOM }
}

export { mediaFactory };