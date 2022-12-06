function mediaFactory(data) {
    const { id, photographerId, title, image, likes, date, price } = data;

    const picture = `assets/photographers/media/photographer_${photographerId}/${image}`;

    function getMediaCardDOM() {

        return (0);
    }

    function getMediaDescDOM() {

        return (0);
    }


    return { getMediaCardDOM, getMediaDescDOM }
}

export { mediaFactory };