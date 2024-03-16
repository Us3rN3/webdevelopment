document.getElementById("toonResultaat").addEventListener("click", function() {
    let form = document.getElementById("invoerFormulier");

    let isRoker = form.elements["isRoker"].checked;
    let moedertaal = form.elements["moedertaal"].value;
    let favorieteBuurland = form.elements["favorieteBuurland"].value;
    let bestellingOptions = form.elements["bestelling"].options;
    let bestelling = "";

    for (let i = 0; i < bestellingOptions.length; i++) {
        if (bestellingOptions[i].selected) {
            if (bestelling !== "") {
                bestelling += " ";
            }
            bestelling += bestellingOptions[i].value;
        }
    }

    console.log("Is roker:", isRoker ? "is roker" : "is geen roker");
    console.log("Moedertaal:", moedertaal);
    console.log("Favoriete buurland:", favorieteBuurland);
    console.log("Bestelling:", bestelling);
});
