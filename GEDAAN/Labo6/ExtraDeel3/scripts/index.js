const setup = () => {

    let buttonDom = document.getElementById("buttonDom")
    buttonDom.addEventListener("click", append);
}

const append = () =>{
    let p = document.createElement("p");

    let tekst = document.createTextNode("tekst");
    p.appendChild(tekst);

    let div = document.getElementById("myDIV");
    div.appendChild(p);
}
window.addEventListener("load", setup);