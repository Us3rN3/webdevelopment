const setup = () =>{
    const verjaardag = new Date(2005, 3-1, 25);
    let vandaag = new Date();
    let verschil = Math.floor((vandaag - verjaardag) / 86400000);
    document.getElementById("verjaardag").innerHTML = verschil + " dagen";
}

window.addEventListener("load", setup)