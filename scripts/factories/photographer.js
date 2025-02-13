function photographerFactory(data) {

    if (data.photographer) {
        const { id, name, portrait, city, country, tagline, price } = data.photographer;
        const picture = `assets/photographers/portrait/${portrait}`;
    }

    const totalLike = data.totalLike;
    const userList = data.userList;

    function getGaleryPhotographers() {
        const wrapper = document.createElement('div');
        console.log(userList);
        userList.forEach((photographer) => {
            const userWrapper = document.createElement('article');
            const userCardDOM = getUserCardDOM(photographer);
            const userDescDOM = getUserDescDOM(photographer);
            userWrapper.appendChild(userCardDOM);
            userWrapper.appendChild(userDescDOM);
            userWrapper.classList.add('flex-col');
            wrapper.appendChild(userWrapper);
        });

        return wrapper;

    }

    function getUserCardDOM({ id, name, city, country, price, portrait }) {
        const card = document.createElement('a');
        card.setAttribute("href", `photographer.html?page=${id}`);
        card.classList.add("flex-col");
        card.setAttribute("aria-label", `${name}`);

        const img = getPictureProfileDOM({ portrait, name });

        const h2 = document.createElement('h2');
        h2.textContent = name;

        card.appendChild(img);
        card.appendChild(h2);
        return (card);
    }

    function getUserDescDOM({ city, country, price, tagline }) {
        const description = document.createElement('p');
        description.classList.add('flex-col');

        const localisation = document.createElement('span');
        localisation.textContent = city + ', ' + country;

        const devise = document.createElement('span');
        devise.textContent = tagline;

        const tarif = document.createElement('span');
        tarif.textContent = price + '€/jours';

        description.appendChild(localisation);
        description.appendChild(devise);
        description.appendChild(tarif);
        return (description);
    }

    function getUserHeaderDOM({ name, city, country, tagline }) {

        const userHeader = document.createElement('div');
        userHeader.classList.add('flex-col');


        const title = document.createElement('h1');
        title.textContent = name;

        const description = document.createElement('p');
        description.classList.add('flex-col');

        const localisation = document.createElement('span');
        localisation.textContent = city + ', ' + country;

        const devise = document.createElement('span');
        devise.textContent = tagline;

        description.appendChild(localisation);
        description.appendChild(devise);
        userHeader.appendChild(title);
        userHeader.appendChild(description);

        return (userHeader);
    }

    function getPictureProfileDOM({ portrait, name }) {
        const picture = `assets/photographers/portrait/${portrait}`;
        const img = document.createElement('img');
        img.setAttribute("src", picture);
        img.setAttribute("alt", "");

        return (img);
    }

    function getUserAnalytics({ price }, likes) {
        const p = document.createElement('p');
        p.classList.add('userInfo');

        const tarif = document.createElement('span');
        tarif.textContent = price + '€ / jours';

        const like = document.createElement('span');
        like.classList.add("likeCount");
        like.textContent = likes + ' ';

        const icon = document.createElement('i');
        icon.classList.add('fa-solid', 'fa-heart');

        like.appendChild(icon);
        p.appendChild(like);
        p.appendChild(tarif);

        return (p);
    }

    function getHeaderContactForm({ name }) {
        const h2 = document.createElement('h2');
        h2.innerHTML = `Contactez-moi<br>${name}`;
        h2.setAttribute("aria-label", `Contact me ${name}`);
        return h2;
    }



    return { getUserCardDOM, getUserDescDOM, getUserHeaderDOM, getPictureProfileDOM, getUserAnalytics, getHeaderContactForm, getGaleryPhotographers }
}

export { photographerFactory };