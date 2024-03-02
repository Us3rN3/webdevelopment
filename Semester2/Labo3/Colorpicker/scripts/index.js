const updateColor = () => {
    const redSlider = document.getElementById('rood');
    const greenSlider = document.getElementById('groen');
    const blueSlider = document.getElementById('blauw');
    const colorBox = document.getElementById('box');
    const rgbValues = document.getElementById('values');

    const redValue = redSlider.value;
    const greenValue = greenSlider.value;
    const blueValue = blueSlider.value;

    const colorString = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    colorBox.style.backgroundColor = colorString;
    rgbValues.textContent = `RGB: ${redValue}, ${greenValue}, ${blueValue}`;
}

const setup = () => {
    const redSlider = document.getElementById('rood');
    const greenSlider = document.getElementById('groen');
    const blueSlider = document.getElementById('blauw');

    // Voeg event listeners toe aan de sliders
    redSlider.addEventListener('input', updateColor);
    greenSlider.addEventListener('input', updateColor);
    blueSlider.addEventListener('input', updateColor);

    // Initialiseer de kleur
    updateColor();
}

window.addEventListener("load", setup);