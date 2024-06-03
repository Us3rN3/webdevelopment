let global = {
    player: " ",
    words: ["vives", "appel", "tafel", "staat", "maart"],
    randomWoord: "",
    gokken: 0
}
const setup = () => {
    let startButton = document.getElementById("nieuw");
    startButton.addEventListener("click", loadpage);

    let goButton = document.getElementById("go");
    goButton.addEventListener("click", getSaveWord);
}
const loadpage = () => {
    global.player = window.prompt("Voer een naam in", "");
    if(global.player !== "" && global.player !== null) {
        console.log(global.player);

        const startButton = document.getElementById("nieuw");
        startButton.style.display = 'none';
        global.randomWoord = getRandomWord();
        console.log(global.randomWoord);
    }
}
const getRandomWord = () => {
    let number = Math.floor(Math.random() * global.words.length);
    return global.words.at(number);
}

const getSaveWord = () => {
    let input = document.getElementById("gok").value;

    let gok = document.getElementById("gokken");

    if(input.length === 5){
        let div = document.createElement("div");
        for(let i = 0; i < input.length; i++){
            let word = document.createElement("div");
            word.textContent = input.charAt(i).toUpperCase();

            if(global.randomWoord.charAt(i) === input.charAt(i)){
                word.classList.add("juist");
            } else if (global.randomWoord.includes(input.charAt(i))){
                word.classList.add("bevat");
            } else {
                word.classList.add("fout");
            }

            div.appendChild(word);
        }
        gok.appendChild(div);
    }

    global.gokken++;
    console.log(global.gokken);
}

const saveScore = () => {

}

window.addEventListener("load", setup);