const initialize = () => {
	let sliders = document.getElementsByClassName("slider");

	for (let i = 0; i < sliders.length; i++) {
		sliders[i].addEventListener("change", update);
		sliders[i].addEventListener("input", update);
	}

	let savedSettings = localStorage.getItem("settingColorpicker");
	if (savedSettings) {
		let settings = JSON.parse(savedSettings);
		document.getElementById("sldRed").value = settings.red;
		document.getElementById("sldGreen").value = settings.green;
		document.getElementById("sldBlue").value = settings.blue;
		update();
	} else {
		update(); // If no saved settings, apply default
	}

	document.getElementById("button").addEventListener("click", saveSettings)
};

const update = () => {
	let red = document.getElementById("sldRed").value;
	let green = document.getElementById("sldGreen").value;
	let blue = document.getElementById("sldBlue").value;

	document.getElementById("lblRed").innerHTML = red;
	document.getElementById("lblGreen").innerHTML = green;
	document.getElementById("lblBlue").innerHTML = blue;

	let swatch = document.getElementById("swatch");

	swatch.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
};

const saveColor = () => {
	let red = document.getElementById("sldRed").value;
	let green = document.getElementById("sldGreen").value;
	let blue = document.getElementById("sldBlue").value;

	let savedColor = document.createElement("div");
	savedColor.classList.add("savedColor");
	savedColor.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";

	let closeButton = document.createElement("span");
	closeButton.textContent = "\u00D7";

	closeButton.classList.add("closeButton");

	closeButton.addEventListener("click", function() {
		savedColor.remove();
	});

	savedColor.appendChild(closeButton);

	document.getElementById("savedColors").appendChild(savedColor);

	savedColor.addEventListener("click", () => {
		document.getElementById("sldRed").value = red;
		document.getElementById("sldGreen").value = green;
		document.getElementById("sldBlue").value = blue;
		update();
	})

};

const saveSettings = () => {
	let settings = {};
	let settingsJSON;

	settings.red = parseInt(document.getElementById("sldRed").value);
	settings.green = parseInt(document.getElementById("sldGreen").value);
	settings.blue = parseInt(document.getElementById("sldRed").value);

	settingsJSON = JSON.stringify(settings);
	localStorage.setItem("settingColorpicker", settingsJSON);
}


window.addEventListener("load", initialize);

document.getElementById("button").addEventListener("click", saveColor);
