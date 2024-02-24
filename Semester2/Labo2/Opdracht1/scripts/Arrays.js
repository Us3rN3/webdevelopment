
let familieleden = ["Arnaud", "Jan", "Paulus", "Pim", "Gilles"];

function VoegNaamToe(arr, naam) {
    arr.push(naam);
}

console.log("Aantal elementen in de array:", familieleden.length);

console.log("Eerste element:", familieleden[0]);
console.log("Derde element:", familieleden[2]);
console.log("Vijfde element:", familieleden[4]);

let nieuweNaam = prompt("Voer een nieuwe naam in:");
VoegNaamToe(familieleden, nieuweNaam);
console.log("Familieleden na toevoegen nieuwe naam:", familieleden);

let familieledenString = familieleden.join(", ");
console.log("Familieleden als string:", familieledenString);
