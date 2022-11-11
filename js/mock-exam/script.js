var popup = document.querySelector(".popup")
var cartAmount = document.querySelector("span")

// setTimeout(function () {
//     popup.style.display = "block"
// }, 10000)


//remove popup after button is clicked
function removePopup(element) {
    element.remove ();
    // You can do this in multiple ways //
    popup.style.display = "none"
}

//Search alert
function searchAlert(event, element) {
    event.prevent.Default();
    var formData = new FormData(element);
    console.log(formData.get(searchbar));
    alert(formData.get('search-bar'));
}

function increaseCart() {
    cartAmount.innerText++;
}