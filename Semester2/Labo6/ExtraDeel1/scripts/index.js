const setup = () => {
    let buttonDom = document.getElementById("buttonDom")
    buttonDom.addEventListener("click", execute);
}

const execute = () =>{
    const pElements = document.querySelectorAll('p');
    pElements.forEach(pElement => {pElement.textContent = 'Good Job!';});
}

window.addEventListener("load", setup);