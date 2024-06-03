const btnSubstring = document.getElementById("btnSubstring");
const txtOutput = document.getElementById("txtOutput");

btnSubstring.addEventListener("click", getSubstring);

function getSubstring() {
    const txtInput = document.getElementById("txtInput").value;
    const txtLinks = parseInt(document.getElementById("txtLinks").value);
    const txtRechts = parseInt(document.getElementById("txtRechts").value);

    if (isNaN(txtLinks) || isNaN(txtRechts)) {
        txtOutput.textContent = "Ongeldige invoer voor de posities.";
        return;
    }

    if (txtLinks < 0 || txtLinks >= txtInput.length || txtRechts < 0 || txtRechts >= txtInput.length) {
        txtOutput.textContent = "De posities moeten binnen de lengte van de tekst liggen.";
        return;
    }

    const substring = txtInput.substring(txtLinks, txtRechts);
    txtOutput.textContent = substring;
}
