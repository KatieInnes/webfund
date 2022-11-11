// Clicking the "Donate" button will remove the button

function hide(element) {
    element.remove();
}

// Clicking the "Pet Name" button will increase the number of pettings by one

var likesOne = document.querySelector("span#one")
var likesTwo = document.querySelector("span#two")
var likesThree = document.querySelector("span#three")

function increaseLikesOne() {
    likesOne.innerText++;
}

function increaseLikesTwo() {
    likesTwo.innerText++;
}

function increaseLikesThree() {
    likesThree.innerText++;
}


// Changing the <select> will alert what type of animal we are looking for

function pickPet(select) {
    alert("You are looking for a: " + select.options[select.selectedIndex].text);
}