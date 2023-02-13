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
                console.log(found.likes);
                console.log(state.totalLike);
            })
        })

    }

    return { setLikeEvent };
}


export { mediaEvent };