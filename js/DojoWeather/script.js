// Remove Cookie Time

function hide(element) {
    element.parentElement.remove();
}

// Click on city to display an alert

function cityClick() {
    alert("Loading weather report...");
}

// Convert temperatures when the <select> is changed

function celFahr(temp) {
    return Math.round (1.8 * temp + 32);
}

function farCel(temp) {
    return Math.round (5 / 9 * (temp - 32));
}

function convert(element) {
    console.log(element.value);
    for(var i=1; i<9; i++) {
        var tempSpan = document.querySelector("#temp" + i);
        var tempVal =parseInt(tempSpan.innerText);
        // console.log(celFahr(tempVal));
        if(element.value == "˚C") {
            tempSpan.innerText = farCel(tempVal);
        }
        else {
            tempSpan.innerText = celFahr(tempVal);
        }
    }
}