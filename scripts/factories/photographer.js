function photographerFactory(data) {
    const { id, name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/portrait/${portrait}`;

    function getUserCardDOM() {
        const card = document.createElement('a');
        card.setAttribute("href", `/photographer.html?page=${id}`);
        card.setAttribute("aria-label", `Page photographe de ${name}, venant de ${city} ${country}. Taux journalier de ${price} euros.`)
        card.classList.add("flex-col");

        const img = getPictureProfileDOM();

        const h2 = document.createElement('h2');
        h2.textContent = name;

        card.appendChild(img);
        card.appendChild(h2);
        return (card);
    }

    function getUserDescDOM() {
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

    function getUserHeaderDOM() {

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
        userHeader.appendChild(description)

        return (userHeader);
    }

    function getPictureProfileDOM() {
        const img = document.createElement('img');
        img.setAttribute("src", picture);
        img.setAttribute("alt", `Photo de ${name}`);

        return (img);
    }


    return { getUserCardDOM, getUserDescDOM, getUserHeaderDOM, getPictureProfileDOM }
}

export { photographerFactory };