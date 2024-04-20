let persons = [];

const resetForm = () => {
    document.getElementById("txtVoornaam").value = "";
    document.getElementById("txtFamilienaam").value = "";
    document.getElementById("txtGeboorteDatum").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtAantalKinderen").value = "";
};

const saveEditedPerson = () => {
    console.log("Click on the save button");
    valideer();
    let newPerson;
    if (document.getElementsByClassName("invalid").length === 0) {
        const firstName = document.getElementById("txtVoornaam").value;
        const lastName = document.getElementById("txtFamilienaam").value;
        const birthDate = document.getElementById("txtGeboorteDatum").value;
        const email = document.getElementById("txtEmail").value;
        const numberOfChildren = document.getElementById("txtAantalKinderen").value;
        newPerson = {
            firstName: firstName,
            lastName: lastName,
            birthDate: birthDate,
            email: email,
            numberOfChildren: numberOfChildren
        };
        let selectedIndex = document.getElementById("lstPersonen").selectedIndex;
        if (selectedIndex === -1) {
            persons.push(newPerson);
        } else {
            persons[selectedIndex] = newPerson;
        }
        updatePersonsList();
        resetForm();
    }
};

const editNewPerson = () => {
    console.log("Click on the new button");
    document.getElementById("lstPersonen").selectedIndex = -1;
    resetForm();
};

const updatePersonsList = () => {
    const lstPersons = document.getElementById("lstPersonen");
    lstPersons.innerHTML = "";
    persons.forEach((person, index) => {
        const option = document.createElement("option");
        option.text = `${person.firstName} ${person.lastName}`;
        option.value = index;
        lstPersons.add(option);
    });
};

const showSelectedPerson = () => {
    const selectedIndex = document.getElementById("lstPersonen").selectedIndex;
    if (selectedIndex !== -1) {
        const selectedPerson = persons[selectedIndex];
        document.getElementById("txtVoornaam").value = selectedPerson.firstName;
        document.getElementById("txtFamilienaam").value = selectedPerson.lastName;
        document.getElementById("txtGeboorteDatum").value = selectedPerson.birthDate;
        document.getElementById("txtEmail").value = selectedPerson.email;
        document.getElementById("txtAantalKinderen").value = selectedPerson.numberOfChildren;
    }
};

const setup = () => {
    const btnSave = document.getElementById("btnBewaar");
    btnSave.addEventListener("click", saveEditedPerson);
    const btnNew = document.getElementById("btnNieuw");
    btnNew.addEventListener("click", editNewPerson);
    const lstPersons = document.getElementById("lstPersonen");
    lstPersons.addEventListener("change", showSelectedPerson);
};

window.addEventListener("load", setup);
