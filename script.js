// Assignment Code
var lowerCase = ["a","b","c","d","e","f","g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var special = ["!", "@", "#", "$", "%", "^", "&", "*"]

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //a callback function
  var passwordText = document.querySelector("#password");

  passwordText.value = password; //sets the value of the password text box to be the generated password

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// create varaibles to store the info needed to generate the password as an array
    //start a function -> generatePassword() can do all in one or as multiple
//on button click show series of prompts
    //length between 8 and 128 characters -> prompt user for their password length


  function generatePassword() {
    var pwLength = prompt("Choose password length between 8 and 128 characters");
    console.log(pwLength);
      if (pwLength  < 8) {
        alert("Password length must be at least 8 characters");
        generatePassword();
      } if (pwLength > 128) {
        alert("Password length must be less than 128 characters");
        generatePassword();
      }}
      //why does putting it in a function make it not work???
    
    
        //check that the value is 1.a number, 2. 8 or more characters 3. 128 or less characters. check to make sure it makes criteria
    //type of character: lowercase, uppercase, numbers, special characters
        // a series of  confirm windows that has the user decide if they want to include the type of characters
        var lowerPrompt = confirm("Do you want to include lower case letters?");
        var upperPrompt = confirm("Do you want to include upper case letters?");
        var numberPrompt = confirm("Do you want to include numbers?");
        var specialPrompt = confirm("Do you want to include special characters?");
        console.log (pwLength, lowerPrompt, upperPrompt, numberPrompt, specialPrompt)

        // take confirms and combine the true into a holder
    // make sure at least one character type is selected. if all confirms are false we have to stop the function and start over
      //make each confirm window its own variable check the boolean values to be a variable to use the conditionals
//generate a random password using Math.floor and Math.random
// for (let i = 0; i < pwlength; i++) 
//show password in an alert or on the page
  //return

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

function generatePassword () {
  var finalPassword = []
}


// prompts go into the () of functions. they are values you can pass into the function to be used
// function generatePassword ()
function getRandom(arr) {
  var randomIdx = Math.floor(Math.random () * arr.length)
}