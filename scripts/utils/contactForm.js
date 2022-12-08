function setDisplayModal() {
    const body = document.querySelector('body');
    const modal = document.getElementById("contact_modal");
    const button = document.querySelector(".contact_button");
    const close = document.querySelector('.sub-btn-close');

    button.addEventListener('click', () => {
        modal.style.display = "block";
        body.style.overflow = "hidden";
        window.scroll(0, 0);
    })

    close.addEventListener('click', () => {
        modal.style.display = "none";
        body.style.overflow = "unset";
    })
}

// Fonction de mise en place des listeners 
function setCtrlForm() {

}


function setCheckForm() {

}


function setEventModal() {
    setDisplayModal();
    setCtrlForm();
    setCheckForm();
}


export { setDisplayModal, setEventModal };