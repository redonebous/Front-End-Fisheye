function contactModal() {

    let form = {
        prenom: document.querySelector('.input-prenom'),
        nom: document.querySelector('.input-nom'),
        email: document.querySelector('.input-email'),
        message: document.querySelector('.input-message')
    };

    let errors = [];


    function setEventModal() {
        setDisplayModal();
        setCheckForm();
        setCtrlForm();
    }


    function setDisplayModal() {
        const body = document.querySelector('body');
        const modal = document.getElementById("contact_modal");
        const button = document.querySelector(".contact_button");
        const close = document.querySelector('.sub-btn-close');

        button.addEventListener('click', () => {
            errors = [];
            validationFail();
            modal.style.display = "block";
            body.style.overflow = "hidden";
            window.scroll(0, 0);
            close.focus();

        })

        close.addEventListener('click', () => {
            errors = [];
            modal.style.display = "none";
            body.style.overflow = "unset";

        })
    }

    // Fonction de mise en place des listeners 
    function setCtrlForm() {

        let textControl = [form['prenom'], form['nom']];
        textControl.forEach((crtl) => crtl.addEventListener('keydown', (e) => {
            let allowKeyPress = /[a-zA-Z]/g;
            if (allowKeyPress.test(e.key)) {
            } else {
                e.preventDefault();
            }
        }))
    }


    function setCheckForm() {

        let formContact = document.querySelector('.formContact');

        formContact.addEventListener('input', (e) => {
            checkInput(e.target.name);
        })

        formContact.addEventListener("submit", (e) => {
            // Avoid form submit
            e.preventDefault();
            errors = [];
            checkForm();
            if (errors.length === 0) {
                console.log('Submit Ok')
            } else {
                console.log('Mauvaise complétion du formulaire !');
                console.log(errors);
            }
        })

        function checkInput(name) {

            let checks = {
                prenom: /([A-Z][a-z]{1,})|([a-z]{2,})/g.test(form['prenom'].value),
                nom: /^([A-Z][a-z]{1,})|([a-z]{2,})/g.test(form['nom'].value),
                email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(form['email'].value),
                message: form['message'].value != ''
            };

            if (!checks[name]) {
                errors.push(name);
            } else {
                errors = errors.filter(err => err != name);
            }

            validationFail();
        }

        function checkForm() {
            for (let prop in form) {
                checkInput(prop);
            }
        }
    }

    function validationFail() {
        for (let prop in form) {
            // Reset error display on the input

            if (form[prop].hasAttribute("data-error")) {
                form[prop].removeAttribute("data-error");
            }
            errors.forEach(err => {
                // Add error display and text error on the input
                if (err == prop) {
                    form[prop].setAttribute("data-error", 'true');
                }
            })
        }
    }

    return { setEventModal }
}


export { contactModal };