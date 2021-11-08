//letters and numbers variables for matching against RegEx. Declared outside the function so they're global
var letters = /^[a-zA-Z]+$/;
var numbers = /^[0-9]+$/;

//Checks to make sure the form is complete without any mistakes like numbers in a name
function checker() {
    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var phone = document.getElementById('phone-number').value;
    var zip = document.getElementById('zip-code').value;
    if (nameCheck(firstName)) {
        if (nameCheck(lastName)) {
            if (digitCheck(phone, "phone")) {
                if (digitCheck(zip, "zip")) {
                    alert("Account Created");
                } else {
                    alert("Please enter a 5 digit zip code with no letters or special characters.");
                }
            } else {
                alert("Please enter a 10 digit phone number with no hyphens.");
            }
        } else {
            alert("Please enter a last name (must contain letters only).");
        }
    } else {
        alert("Please enter a first name (must contain letters only).");
    }
}

//Checks name inputs
function nameCheck(fName) {
    if (fName.match(letters)) {
        return true;
    }
}

//Checks number inputs
function digitCheck(digit, t) {
    if (t === "phone") {
        if (digit.match(numbers) && digit.length === 10) {
            return true;
        }
    } else if (t === "zip") {
        if (digit.match(numbers) && digit.length === 5) {
            return true;
        }
    }
}