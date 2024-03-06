let setup;
setup = () => {
    const sliders = document.getElementsByClassName("slider");
    for(let i = 0; i < sliders.length;i++){
        sliders[i].addEventListener("change", changeColor);
        sliders[i].addEventListener("input", changeColor);
    }
    changeColor();
};

let changeColor;
changeColor = () => {
    const colorSquare = document.getElementById("box")
    const redSlider = document.getElementById("red");
    const greenSlider = document.getElementById("green");
    const blueSlider = document.getElementById("blue");

    let red = redSlider.value;
    let green = greenSlider.value;
    let blue = blueSlider.value;
    let bgColor = `rgb(${red} , ${green}, ${blue})`;

    let valueRed = document.getElementById("valueRed");
    let valueGreen = document.getElementById("valueGreen");
    let valueBlue = document.getElementById("valueBlue");

    valueRed.textContent = " Red: " + red;
    valueGreen.textContent = " Green: " + green;
    valueBlue.textContent = " Blue: " + blue;
    colorSquare.style.backgroundColor = bgColor;
}
window.addEventListener("load", setup);