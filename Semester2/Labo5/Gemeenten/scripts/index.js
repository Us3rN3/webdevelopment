let gemeenten = [];
while (true) {
    let gemeente = prompt("Voer een gemeente in (of typ 'stop' om te stoppen):");
    if (gemeente === null || gemeente.toLowerCase() === "stop") {
        break;
    }
    gemeenten.push(gemeente);
}
gemeenten.sort();

let gemeenteSelect = document.getElementById("gemeenteSelect");
gemeenten.forEach(function(gemeente) {
    let option = document.createElement("option");
    option.text = gemeente;
    gemeenteSelect.add(option);
});
