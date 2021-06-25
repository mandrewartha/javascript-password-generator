// Assignment Code
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var special = ["!", "@", "#", "$", "%", "^", "&", "*"]

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var pwLength;

    function validateLength() {
        pwLength = prompt("Choose password length between 8 and 128 characters");
        console.log(pwLength);
        if (pwLength < 8) {
            alert("Password length must be at least 8 characters");
            validateLength();
        } if (pwLength > 128) {
            alert("Password length must be less than 128 characters");
            validateLength();
        }
    }

    validateLength();
    var lowerPrompt = confirm("Do you want to include lower case letters?");
    var upperPrompt = confirm("Do you want to include upper case letters?");
    var numberPrompt = confirm("Do you want to include numbers?");
    var specialPrompt = confirm("Do you want to include special characters?");
    console.log(pwLength, lowerPrompt, upperPrompt, numberPrompt, specialPrompt)

    var empty = []
    if (lowerPrompt === true) {
        console.log(lowerCase);
        empty = empty.concat(lowerCase);

    }
    if (upperPrompt === true) {
        console.log(upperCase);
        empty = empty.concat(upperCase);
    }
    if (numberPrompt === true) {
        console.log(number);
        empty = empty.concat(number);
    }
    if (specialPrompt === true) {
        console.log(special);
        empty = empty.concat(special);
    }
    console.log(empty)

    // We have array empty with our permitted characters
    // We have number pwLength with our amount of characters we'll want
    var password = ""; 

    for (let i = 0; i < pwLength; i++) {
        let randomIndex = Math.floor( Math.random () * empty.length );
        password = password + empty[randomIndex];
    }

    var passwordText = document.querySelector("#password");
    passwordText.value = password; //sets the value of the password text box to be the generated password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

