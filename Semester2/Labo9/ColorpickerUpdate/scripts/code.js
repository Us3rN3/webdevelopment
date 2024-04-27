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

	let savedColors = localStorage.getItem("savedColors");
	if (savedColors) {
		let colors = JSON.parse(savedColors);
		for (let i = 0; i < colors.length; i++) {
			let color = colors[i];
			let savedColor = document.createElement("div");
			savedColor.classList.add("savedColor");
			savedColor.style.backgroundColor = "rgb(" + color.red + "," + color.green + "," + color.blue + ")";

			let closeButton = document.createElement("span");
			closeButton.textContent = "\u00D7";

			closeButton.classList.add("closeButton");

			closeButton.addEventListener("click", function() {
				savedColor.remove();
				removeColorFromStorage(color);
			});

			savedColor.appendChild(closeButton);

			document.getElementById("savedColors").appendChild(savedColor);

			savedColor.addEventListener("click", () => {
				document.getElementById("sldRed").value = color.red;
				document.getElementById("sldGreen").value = color.green;
				document.getElementById("sldBlue").value = color.blue;
				update();
			})
		}
	}

	document.getElementById("button").addEventListener("click", saveColor);
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
		removeColorFromStorage({ red, green, blue });
	});

	savedColor.appendChild(closeButton);

	document.getElementById("savedColors").appendChild(savedColor);

	savedColor.addEventListener("click", () => {
		document.getElementById("sldRed").value = red;
		document.getElementById("sldGreen").value = green;
		document.getElementById("sldBlue").value = blue;
		update();
	})

	let savedColors = localStorage.getItem("savedColors");
	if (savedColors) {
		let colors = JSON.parse(savedColors);
		colors.push({ red, green, blue });
		localStorage.setItem("savedColors", JSON.stringify(colors));
	} else {
		localStorage.setItem("savedColors", JSON.stringify([{ red, green, blue }]));
	}
};

const removeColorFromStorage = (color) => {
	let savedColors = localStorage.getItem("savedColors");
	if (savedColors) {
		let colors = JSON.parse(savedColors);
		let index = colors.findIndex((c) => c.red === color.red && c.green === color.green && c.blue === color.blue);
		if (index!== -1) {
			colors.splice(index, 1);
			localStorage.setItem("savedColors", JSON.stringify(colors));
		}
	}
};

window.addEventListener("load", initialize);