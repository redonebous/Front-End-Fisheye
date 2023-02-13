function mediaFactory(data) {
    const { id, photographerId, title, image, video, likes, date, price } = data;

    function getMediaCardDOM() {
        const card = document.createElement('article');
        card.setAttribute("aria-label", `#`)
        card.classList.add("flex-col");

        const img = getContent(data)

        const content = document.createElement('a');
        content.setAttribute("id", `content-${id}`);
        content.classList.add("media-content");
        content.setAttribute('href', "#");
        content.appendChild(img)

        const description = document.createElement('p');
        description.classList.add('flex-header');

        const titre = document.createElement('span');
        titre.textContent = title;

        const like = document.createElement('button');
        like.setAttribute("id", `like-${id}`);
        like.classList.add("btn-like");
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


    function getContent({ image, video, id, photographerId }) {

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
        content.classList.add("content");


        return (content);
    }


    return { getMediaCardDOM, getContent }
}

export { mediaFactory };