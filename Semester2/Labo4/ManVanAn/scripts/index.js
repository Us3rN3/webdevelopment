const setup = () =>{
    const tekst = "De man van An geeft geen hand aan ambetante verwanten";
    const zoekString = "an";
    let index = -1;
    let count = 0;
    
    while ((index = tekst.indexOf(zoekString, index + 1)) !== -1) {
        count++;
    }

    console.log(`Het aantal keer dat "${zoekString}" voorkomt met indexOf: ${count}`);

    count = 0;
    index = tekst.length;
    
    while ((index = tekst.lastIndexOf(zoekString, index - 1)) !== -1) {
        count++;
    }

    console.log(`Het aantal keer dat "${zoekString}" voorkomt met lastIndexOf: ${count}`);
}

window.addEventListener("load", setup)