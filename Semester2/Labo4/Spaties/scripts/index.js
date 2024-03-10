const setup = () => {
    let printButton = document.getElementById("print");
    printButton.addEventListener("click", print);
    print();
}

const print = ()=> {
    const input = document.getElementById('spaties');
    let tekst = splits(input.value);
    console.log(tekst);
}

const splits = (input) => {
    return input.split('').join(' ');
}

window.addEventListener("load", setup);