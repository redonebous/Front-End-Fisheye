function photographerFactory(data) {
    const { id, name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/portrait/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement('article');
        const img = document.createElement('img');
        img.setAttribute("src", picture)
        const h2 = document.createElement('h2');
        h2.textContent = name;
        article.appendChild(img);
        article.appendChild(h2);
        return (article);
    }

    function getUserDescDOM() {
        const description = document.createElement('p');
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


    return { name, picture, getUserCardDOM, getUserDescDOM }
}

export { photographerFactory };