let global = {
    player: "",
    words: ["vives", "appel", "tafel", "staat", "maart"],
    randomWoord: "",
    gokken: 0,
    maxGokken: 6,
    highscores: JSON.parse(localStorage.getItem('highscores')) || []
};

const setup = () => {
    let startButton = document.getElementById("nieuw");
    startButton.addEventListener("click", loadpage);

    let goButton = document.getElementById("go");
    goButton.addEventListener("click", getSaveWord);

    let clearButton = document.getElementById("clear");
    clearButton.addEventListener("click", clearHighscores);

    document.getElementById("gok").disabled = true;
    document.getElementById("go").disabled = true;

    updateHighscores();
};

const loadpage = () => {
    global.player = window.prompt("Voer een naam in", "");
    if (global.player !== "" && global.player !== null) {
        console.log(global.player);

        const startButton = document.getElementById("nieuw");
        startButton.style.display = 'none';
        document.getElementById("gok").disabled = false;
        document.getElementById("go").disabled = false;
        document.getElementById("gokken").innerHTML = ""; // Reset guesses
        global.randomWoord = getRandomWord();
        global.gokken = 0;
        console.log(global.randomWoord);
    }
};

const getRandomWord = () => {
    let number = Math.floor(Math.random() * global.words.length);
    return global.words[number];
};

const getSaveWord = () => {
    let input = document.getElementById("gok").value.toLowerCase();
    document.getElementById("gok").value = ""; // Clear the input field

    if (input.length === 5) {
        let gok = document.getElementById("gokken");
        let div = document.createElement("div");

        for (let i = 0; i < input.length; i++) {
            let word = document.createElement("div");
            word.textContent = input.charAt(i).toUpperCase();

            if (global.randomWoord.charAt(i) === input.charAt(i)) {
                word.classList.add("juist");
            } else if (global.randomWoord.includes(input.charAt(i))) {
                word.classList.add("bevat");
            } else {
                word.classList.add("fout");
            }

            div.appendChild(word);
        }
        gok.appendChild(div);
        global.gokken++;

        if (input === global.randomWoord) {
            alert(`Gefeliciteerd ${global.player}, je hebt het woord geraden!`);
            saveScore();
            resetGame();
        } else if (global.gokken >= global.maxGokken) {
            alert(`Helaas, je hebt het woord niet geraden. Het woord was: ${global.randomWoord}`);
            resetGame();
        }
    } else {
        alert("Het woord moet precies 5 letters lang zijn.");
    }
    console.log(global.gokken);
};

const saveScore = () => {
    global.highscores.push({ name: global.player, guesses: global.gokken });
    localStorage.setItem('highscores', JSON.stringify(global.highscores));
    updateHighscores();
};

const updateHighscores = () => {
    let highscoresDiv = document.getElementById("highscores");
    let highscoresList = highscoresDiv.querySelector("ul");
    if (!highscoresList) {
        highscoresList = document.createElement("ul");
        highscoresDiv.appendChild(highscoresList);
    }
    highscoresList.innerHTML = ""; // Clear current list

    global.highscores.sort((a, b) => a.guesses - b.guesses);

    global.highscores.forEach(score => {
        let li = document.createElement("li");
        li.textContent = `${score.name}: ${score.guesses} pogingen`;
        highscoresList.appendChild(li);
    });
};

const clearHighscores = () => {
    global.highscores = [];
    localStorage.removeItem('highscores');
    updateHighscores();
};

const resetGame = () => {
    document.getElementById("nieuw").style.display = 'block';
    document.getElementById("gok").disabled = true;
    document.getElementById("go").disabled = true;
};

window.addEventListener("load", setup);
