// Assignment Code
var generateBtn = document.querySelector("#generate");

//Arrays of characters to include in passwords
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var capital = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var specialChr = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "}", "|", '{', "~"]

// Write password to the #password input
function writePassword() {
  var numberofCharacters = prompt("How many characters would you like your password to contain? \n(Minimum: 8, Maximum: 128)")
  if (numberofCharacters < 129 && numberofCharacters > 7){
    alert("Good job doing math");
    console.log("You want " + numberofCharacters + " characters.");
    return (numberofCharacters);
  } else if (numberofCharacters < 8) {
    alert("Your Password needs to contain at least 8 characters.");
  } else if (numberofCharacters > 128) {
    alert("Your Password needs to contain 128 or fewer characters.");
  } else {
    alert("Invalid Input")
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Generate a password using selected characters and length
function generatePassword() {
  console.log("Ran generatePassword")
}

// Add event listener to generate button
document.getElementById("generate").addEventListener("click", writePassword);
