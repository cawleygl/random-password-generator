// Assignment Code
var generateBtn = document.querySelector("#generate");

//Arrays of characters to include in passwords
var specialChr = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "}", "|", '{', "~"]
var numbersChr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var lowercaseChr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var capitalChr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numberofCharacters = 0

// Write password to the #password input
function writePassword() {
  var numberofCharacters = prompt("How many characters would you like your password to contain? \n(Minimum: 8, Maximum: 128)")
  if (numberofCharacters < 129 && numberofCharacters > 7){
    console.log(numberofCharacters);
    generatePassword()
  } else if (numberofCharacters < 8) {
    alert("Your Password needs to contain at least 8 characters.");
  } else if (numberofCharacters > 128) {
    alert("Your Password needs to contain 128 or fewer characters.");
  } else {
    alert("Invalid Input")
  }

  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

//Generate a password using selected characters and length
function generatePassword() {
  var specialIf = confirm("Would you like to include special characters? Click OK to confirm");
  var numbersIf = confirm("Would you like to include numbers? Click OK to confirm");
  var lowercaseIf = confirm("Would you like to include lowercase letters? Click OK to confirm");
  var capitalIf = confirm("Would you like to include capital letters? Click OK to confirm");
  var password = []

  if (specialIf === true && numbersIf === true && lowercaseIf === true && capitalIf === true) {
    var passwordChr = specialChr.concat(numbersChr, lowercaseChr, capitalChr);
    var i;
    console.log(numberofCharacters)
    for (i = 0; i < numberofCharacters; i++) {
      password.push(passwordChr[Math.floor(Math.random() * 95)]);
    }
    console.log(password)
  } else {
      console.log("Fail");
  }
}

// Add event listener to generate button
document.getElementById("generate").addEventListener("click", writePassword);
