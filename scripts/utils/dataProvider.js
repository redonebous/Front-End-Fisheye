async function getMedias() {
    const media = await fetch('../../data/photographers.json')
        .then(res => res.json())
        .then(res => res.media)
    return ({
        media: [...media]
    })
}

async function getPhotographers() {
    const photographers = await fetch('../../data/photographers.json')
        .then(res => res.json())
        .then(res => res.photographers)

    return ({
        photographers: [...photographers]
    })
}

export { getMedias, getPhotographers };