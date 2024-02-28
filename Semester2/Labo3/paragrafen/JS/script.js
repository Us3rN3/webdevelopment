const setup = () => {
    let opvallend = document.getElementsByClassName("belangrijk");
    for(let i = 0; i < opvallend.length; i++){
        opvallend[i].classList.add("opvallend");
    }
}

window.addEventListener("load", setup);