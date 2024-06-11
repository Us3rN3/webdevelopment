const setup = () => {
    let searchButton = document.getElementById('searchButton');
    searchButton.addEventListener('click', validateCommand);
    initializeStart(localStorage.getItem("SearchHistory"));
}

let global = {
    SearchHistory: [],
};

let validateCommand = () => {
    let input = document.getElementById('searchInput').value;
    if (!input.startsWith('/')) {
        alert('Invalid Command');
    } else {
        if (input.charAt(1) === "g" && input.charAt(2) === " ") {
            console.log('Google found!');
            let copy = input;
            let text = copy.substring(3);
            text = text.split(" ").join("+");
            let link = `https://www.google.com/search?q=${text}`
            addCard(link, text);
            window.open(link);
            saveToSearchHistory();

        } else if (input.charAt(1) === "y" && input.charAt(2) === " ") {
            console.log('YouTube found!');
            let copy = input;
            let text = copy.substring(3);
            text = text.split(" ").join("+");
            let link = `https://www.youtube.com/results?search_query=${text}`;
            addCard(link, text);
            window.open(link);
            saveToSearchHistory();

        } else if (input.charAt(1) === "i" && input.charAt(2) === " ") {
            console.log('Instagram found!');
            let copy = input;
            let text = copy.substring(3);
            text = text.split(" ").join("+");
            let link = `https://www.instagram.com/explore/tags/${text}`;
            addCard(link, text);
            window.open(link);
            saveToSearchHistory();

        } else if (input.charAt(1) === "t" && input.charAt(2) === " ") {
            console.log('Twitter found!');
            let copy = input;
            let text = copy.substring(3);
            text = text.split(" ").join("+");
            let link = `https://twitter.com/hashtag/${text}`;
            addCard(link, text);
            window.open(link);
            saveToSearchHistory();
        } else {
            console.log('Nothing found!');
            alert("Unknown command prefix");
        }
    }
}

const addCard = (link, text) => {
    let searchHistory = document.getElementById('searchHistory');
    let cardContainer = document.createElement("div");
    cardContainer.classList.add('card');
    cardContainer.classList.add('search-card');
    cardContainer.classList.add('text-white')
    cardContainer.style.width = "18rem";

    let container = document.createElement("div");
    container.classList.add("card-body");
    let cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    let cardText = document.createElement("p");
    cardText.classList.add("card-text");
    let cardLink = document.createElement("a");
    cardLink.classList.add("btn");

    cardLink.innerText = "GO!"
    cardLink.href = link;
    cardLink.target = "_blank"
    if (link.includes("google")) {
        cardTitle.innerText = "Google";
        cardText.innerText = text;
        cardContainer.classList.add("bg-primary"); // Hier toegevoegd
        cardLink.classList.add("btn-info");
    }
    else if (link.includes("youtube")) {
        cardTitle.innerText = "Youtube";
        cardText.innerText = text;
        cardContainer.classList.add("bg-danger"); // Hier toegevoegd
        cardLink.classList.add("btn-primary");
    }
    else if (link.includes("twitter")) {
        cardTitle.innerText = "Twitter";
        cardText.innerText = text;
        cardContainer.classList.add("bg-dark"); // Hier toegevoegd
        cardLink.classList.add("btn-secondary");
    }
    else if (link.includes("instagram")) {
        cardTitle.innerText = "Instagram";
        cardText.innerText = text;
        cardContainer.classList.add("bg-warning"); // Hier toegevoegd
        cardLink.classList.add("btn-secondary");
    }
    container.appendChild(cardTitle);
    container.appendChild(cardText);
    container.appendChild(cardLink);
    cardContainer.appendChild(container);
    searchHistory.appendChild(cardContainer)
}


const saveToSearchHistory = () => {
    global.SearchHistory = [];
    let cards = document.getElementsByClassName('search-card');
    for (let i = 0; i < cards.length; i++) {
        let link = cards[i].querySelector("a").getAttribute("href");
        let text = cards[i].querySelector("p").innerText;
        let info = [];
        info.push(text);
        info.push(link);
        global.SearchHistory.push(info);

    }
    let string = JSON.stringify(global.SearchHistory);
    localStorage.setItem("SearchHistory", string);
}

const initializeStart = (start) => {
    let arrayToPush = JSON.parse(start);
    if (arrayToPush !== null) {
        for (let i = 0; i < arrayToPush.length; i++) {
            addCard(arrayToPush[i][1], arrayToPush[i][0]);
        }
    }
}

window.addEventListener("load", setup);
