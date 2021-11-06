function checker() {
    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var cell = document.getElementById('phone-number').value;
    var zip = document.getElementById('zip-code').value;
    if (validateFName(firstName)) {
        alert("It works");
    }
}

function validateFName (fName) {
    var characters = /^[a-bA-B]+$/;
    if (fName.match(chars)) {
        return true;
    }
}
