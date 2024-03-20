const setup = () =>{
    updatePagina()
    document.getElementById('kip').addEventListener('change', updatePagina);
    document.getElementById('count').addEventListener('input',  updateLetter)
}

let text = document.getElementById("note");

const updateLetter = () => {
 let count = 0;
 let countLetters = document.getElementById('count').value;


 let letter = document.getElementById('letter').value.toLowerCase();
 for(let i = 0; i < text.length; i++){
     if(text[i] === letter){
         count++;
     }
 }countLetters.innerHTML = count.toString();
}




const updatePagina = () => {
    let image = document.getElementById('img');
    let opties = document.getElementById('kip').value;
    if (opties === "kies") {
        image.className = 'hidden';
    } else if (opties === "ei") {
        image.className = 'with-egg';
        text.innerHTML = 'kip heeft een ei'
    } else if (opties === "zonder") {
        image.className = '';
    }
}

window.addEventListener("load", setup);
