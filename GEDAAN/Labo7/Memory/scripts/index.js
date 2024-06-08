// Globale instellingen
const AANTAL_HORIZONTAAL = 4;
const AANTAL_VERTICAAL = 3;
let isBusy = false;
let count = 0;
let gevonden = 0;
let moves = 0;

// Array met afbeeldingen
const kaartNamen = ['kaart1.jpg', 'kaart2.jpg', 'kaart3.jpg', 'kaart4.jpg', 'kaart5.jpg', 'kaart6.jpg'];

// Dubbele kaarten maken
const dubbeleKaarten = [];
kaartNamen.forEach(kaart => {
    dubbeleKaarten.push(kaart, kaart);
});

// Functie om kaarten willekeurig te schudden
const shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Functie om het spelbord op te zetten
const setup = () => {
    createBoard();
}

// Functie om het spelbord en kaarten te maken
const createBoard = () => {
    const board = document.querySelector('.memory-board');
    shuffle(dubbeleKaarten);
    for (let i = 0; i < AANTAL_HORIZONTAAL * AANTAL_VERTICAAL; i++) {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');

        const imgElement = document.createElement('img');
        imgElement.src = 'images/' + dubbeleKaarten[i];
        cardElement.appendChild(imgElement);

        board.appendChild(cardElement);

        cardElement.addEventListener('click', handleClick);
    }
}
const aangeklikt = (imgElement, cardElement) => {
    // Controleer of er al twee kaarten zijn omgedraaid
    if (count === 2 || isBusy) {
        return;
    }

    moves++;
    imgElement.style.display = 'block';
    imgElement.style.zIndex = '1'; // Zorg ervoor dat de afbeelding bovenop de kaart ligt
    cardElement.style.background = 'none';
    cardElement.classList.add('gekozenkaart');

    count++;

    if (count === 2 && gevonden !== 6) {
        controleren();
    }

    if (gevonden === 6) {
        stoppen();
    }
}
// Event handler voor het klikken op een kaart
const handleClick = (event) => {
    const cardElement = event.currentTarget; // Haal het huidige doelelement op (de kaart)
    const imgElement = cardElement.querySelector('img'); // Vind de afbeelding binnen de kaart
    aangeklikt(imgElement, cardElement);
}

// Functie om te controleren of de gekozen kaarten matchen
const controleren = () => {
    isBusy = true; // Zet isBusy op true voordat de controle begint
    const gekozenKaarten = document.querySelectorAll('.gekozenkaart');

    const eersteKaartKlasse = gekozenKaarten[0].firstElementChild.classList[0]; // Klasse van de eerste gekozen kaart
    const tweedeKaartKlasse = gekozenKaarten[1].firstElementChild.classList[0]; // Klasse van de tweede gekozen kaart

    const klassenOvereenkomen = eersteKaartKlasse === tweedeKaartKlasse;

    if (klassenOvereenkomen) {
        console.log('Match gevonden!');
        gevonden++;
        gekozenKaarten.forEach(imgElement => {
            imgElement.parentElement.removeEventListener('click', handleClick);
            imgElement.classList.add('correct');
        });
    } else {
        console.log('Geen match gevonden!');
        gekozenKaarten.forEach(imgElement => {
            imgElement.classList.add('incorrect');
        });

        setTimeout(() => {
            gekozenKaarten.forEach(imgElement => {
                imgElement.style.display = 'none';
                imgElement.parentElement.style.background = '';
                imgElement.parentElement.addEventListener('click', handleClick); // Voeg klikgebeurtenissen opnieuw toe
                imgElement.classList.remove('gekozenkaart', 'incorrect');
            });
            isBusy = false; // Zet isBusy op false nadat de controle is voltooid
        }, 1000);
    }

    count = 0; // Reset de count-variabele
}

// Functie om het spel te beëindigen
const stoppen = () => {
    setTimeout(() => {
        alert(`Gefeliciteerd! Je hebt gewonnen in ${moves} zetten.`);
        location.reload();
    }, 1000);
}

// Wacht tot het DOM is geladen en roep de setup functie aan om het spel op te zetten
document.addEventListener('DOMContentLoaded', setup);
