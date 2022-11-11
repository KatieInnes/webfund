// Click the edit profile button to change Jane Doe to a new name.

var h1 = document.querySelector("h1")

function changeName () {
    h1.innerText="Katie Innes";
}


// Clicking either button in the Connection Requests box will remove the user from the requests list.

// Clicking either button decreases the "Connection Requests" number.

function hide(element, action) {
    element.parentElement.parentElement.remove();
    decreaseConnect();

// The accept button also increases the "Your Connections" number.
    if(action == 'accept') {
        increaseConnect();
    }    
}
var connectOne = document.querySelector("span#number-1")
var connectTwo = document.querySelector("span#number-2 span")

function decreaseConnect() {
    connectOne.innerText--;
}

function increaseConnect() {
    connectTwo.innerText++;
}