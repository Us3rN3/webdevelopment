const setup = () =>{
 //let tekst = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    let tekst = "De man riep de"
 const zoekString = [" de ", "De ", "de ", " de"];
 const vervangend = " het "

 for(let zoekWoord of zoekString) {
     let index = tekst.indexOf(zoekWoord);

     while (index !== -1) {
         tekst = tekst.substring(0, index) + vervangend + tekst.substring(index + zoekWoord.length);

         index = tekst.indexOf(zoekWoord, index + vervangend.length);
     }
 }
 console.log(tekst);
}

window.addEventListener("load", setup)