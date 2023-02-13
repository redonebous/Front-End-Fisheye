// LikeEvent + SortEvent
// EventListener in photographers page

function mediaEvent() {
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

                elem.textContent = found.likes + ' ';
                likeCount.textContent = state.totalLike + ' ';
                elem.appendChild(icon);
                likeCount.appendChild(icon2);

            })
        })

    }

    return { setLikeEvent };
}


export { mediaEvent };