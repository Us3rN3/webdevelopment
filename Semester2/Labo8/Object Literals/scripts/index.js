const setup = () =>{
    let student1={
        voornaam : "Jan",
        familienaam : "Janssens",
        geboorteDatum : new Date("1993-12-31"),
        adres : { // een object
            straat : "Kerkstraat 13",
            postcode : "8500",
            gemeente : "Kortrijk"
        },
        isIngeschreven : true,
        namenVanExen : ["Sofie", "Berta", "Philip", "Albertoooo_Waar_Is_De_Spaghetti"], // een array
        aantalAutos : 2
    }
    let tekst = JSON.stringify(student1);
    console.log(tekst);
    let tekst1 = JSON.parse(tekst);
    console.log(tekst1)
}

window.addEventListener("load", setup)