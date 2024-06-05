const setup = () => {
    let tekst = "De man riep de";

    const zoekString = [" de ", "De ", "de ", " de"];
    let vervangend = " het ";

    for(let zoekWoord of zoekString) {
        let index = tekst.indexOf(zoekWoord);

        while (index !== -1) {
            if (zoekWoord[0] === zoekWoord[0].toUpperCase()) {
                vervangend = " Het ";
            } else {
                vervangend = " het ";
            }

            tekst = tekst.substring(0, index) + vervangend + tekst.substring(index + zoekWoord.length);
            index = tekst.indexOf(zoekWoord, index + vervangend.length);
        }
    }
    console.log(tekst);
}

window.addEventListener("load", setup);
