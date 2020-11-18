// Assignment Code
var generateBtn = document.querySelector("#generate");

//Arrays of characters to include in passwords
var specialChr = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "}", "|", '{', "~"]
var numbersChr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var lowercaseChr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var capitalChr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// Write password to the #password input
function writePassword() {
  var numberofCharacters = prompt("How many characters would you like your password to contain? \n(Minimum: 8, Maximum: 128)")
  if (numberofCharacters < 129 && numberofCharacters > 7){
    var specialIf = confirm("Would you like to include special characters? Click OK to confirm");
    var numbersIf = confirm("Would you like to include numbers? Click OK to confirm");
    var lowercaseIf = confirm("Would you like to include lowercase letters? Click OK to confirm");
    var capitalIf = confirm("Would you like to include capital letters? Click OK to confirm");
    console.log("You want " + numberofCharacters + " characters.");
    console.log ("You want Special Characters: " + specialIf + "\nYou want Numbers: " + numbersIf + "\nYou want Lowercase letters: " + lowercaseIf + "\nYou want Capital letters: " + capitalIf)
    var password = generatePassword();
    return (numberofCharacters);
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
  console.log("Ran generatePassword")
}

// Add event listener to generate button
document.getElementById("generate").addEventListener("click", writePassword);
