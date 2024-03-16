const setup = () => {
    const validate = document.getElementById("validate");
    validate.addEventListener("click", validateForm);
};

const validateForm = () => {
    validateFirstName();
    validateLastName();
    validateBirthDate();
    validateEmail();
    validateNumberOfChildren();
};

const validateFirstName = () => {
    const firstNameInput = document.getElementById("voornaam");
    const errorFirstName = document.getElementById("foutVoornaam");
    const firstName = firstNameInput.value.trim();

    if (firstName.length > 30) {
        firstNameInput.classList.add("invalid");
        errorFirstName.innerHTML = "Max. 30 karakters";
    } else {
        firstNameInput.classList.remove("invalid");
        errorFirstName.innerHTML = "";
    }
};

const validateLastName = () => {
    const lastNameInput = document.getElementById("familienaam");
    const errorLastName = document.getElementById("foutFamilienaam");
    const lastName = lastNameInput.value.trim();

    if (lastName === "") {
        lastNameInput.classList.add("invalid");
        errorLastName.innerHTML = "Verplicht veld";
    } else if (lastName.length > 50) {
        lastNameInput.classList.add("invalid");
        errorLastName.innerHTML = "Max 50 karakters";
    } else {
        lastNameInput.classList.remove("invalid");
        errorLastName.innerHTML = "";
    }
};

const validateBirthDate = () => {
    const birthDateInput = document.getElementById("geboortedatum");
    const errorBirthDate = document.getElementById("foutGeboortedatum");
    const birthDate = birthDateInput.value.trim();
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;

    if (birthDate === "") {
        birthDateInput.classList.add("invalid");
        errorBirthDate.innerHTML = "Verplicht veld";
    } else if (!datePattern.test(birthDate)) {
        birthDateInput.classList.add("invalid");
        errorBirthDate.innerHTML = "Formaat is niet jjjj-mm-dd";
    } else {
        birthDateInput.classList.remove("invalid");
        errorBirthDate.innerHTML = "";
    }
};

const validateEmail = () => {
    const emailInput = document.getElementById("email");
    const errorEmail = document.getElementById("foutEmail");
    const email = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        emailInput.classList.add("invalid");
        errorEmail.innerHTML = "Verplicht veld";
    } else if (!emailPattern.test(email)) {
        emailInput.classList.add("invalid");
        errorEmail.innerHTML = "Geen geldig email adres";
    } else {
        emailInput.classList.remove("invalid");
        errorEmail.innerHTML = "";
    }
};

const validateNumberOfChildren = () => {
    const numberOfChildrenInput = document.getElementById("aantalKinderen");
    const errorNumberOfChildren = document.getElementById("foutAantalKinderen");
    const numberOfChildren = parseInt(numberOfChildrenInput.value.trim());

    if (isNaN(numberOfChildren) || numberOfChildren < 0) {
        numberOfChildrenInput.classList.add("invalid");
        errorNumberOfChildren.innerHTML = "Is geen positief getal";
    } else if (numberOfChildren >= 99) {
        numberOfChildrenInput.classList.add("invalid");
        errorNumberOfChildren.innerHTML = "Is te vruchtbaar";
    } else {
        numberOfChildrenInput.classList.remove("invalid");
        errorNumberOfChildren.innerHTML = "";
    }
};

window.addEventListener("load", setup);
