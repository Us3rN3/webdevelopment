const setup = () =>{
    let printButton = document.getElementById("print");
    printButton.addEventListener("click", print);
}

const print = () => {
    let text = document.getElementById("trigram").value;
    let array = [];
    for (let i = 0; i < text.length - 2; i++){
        array.push(text.substring(i, i + 3));
    }
    for (let i = 0 ; i < array.length ; i++){
        console.log(array[i]);
    }
}

window.addEventListener("load", setup)