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

  //if the user enters a number smaller than 8
  if (numberofCharacters < 8) {
    alert("Your Password needs to contain at least 8 characters.");
    return
  }
  
  //if the user enters a number larger than 128
  if (numberofCharacters > 128) {
    alert("Your Password needs to contain 128 or fewer characters.");
    return
  }
  
  //if the user enters anything else
  if (isNaN(numberofCharacters) === true) {
    alert("Invalid Input: Please provide Password length as a number.");
    return
  }

  //if the user enters a number between 8 and 128
  if (numberofCharacters < 129 && numberofCharacters > 7){
    var numberofCharacters = Math.round(numberofCharacters);
    console.log(numberofCharacters)

    var specialIf = confirm("Would you like to include special characters? Click OK to confirm.");
    var numbersIf = confirm("Would you like to include numbers? Click OK to confirm.");
    var lowercaseIf = confirm("Would you like to include lowercase letters? Click OK to confirm.");
    var capitalIf = confirm("Would you like to include capital letters? Click OK to confirm.");

    var passwordChr = []
    var password = []

    //Alert to display if the user does not confirm any characters
    if (specialIf === false && numbersIf === false && lowercaseIf === false && capitalIf === false) {
      alert("Please select at least one type of character to include in your Password.");
      return
    }

    //Concat special character array into passwordChr array if the user confirmed special characters
    if (specialIf === true) {
      var passwordChr = passwordChr.concat(specialChr);
      console.log("Pass 1: " + passwordChr)

    }

    //Concat number array into passwordChr array if the user confirmed numbers
    if (numbersIf === true) {
      var passwordChr = passwordChr.concat(numbersChr);
      console.log("Pass 2: " + passwordChr)

    }
    
    //Concat lowercase letter array into passwordChr array if the user confirmed lowercase letters
    if (lowercaseIf === true) {
      var passwordChr = passwordChr.concat(lowercaseChr);
      console.log("Pass 3: " + passwordChr)

    }

    //Concat capital letter array into passwordChr array if the user confirmed capital letters
    if (capitalIf === true) {
      var passwordChr = passwordChr.concat(capitalChr);
      console.log("Pass 4: " + passwordChr)

    }
  
}
}

var passwordText = document.querySelector("#password");
passwordText.value = password;


// Add event listener to generate button
document.getElementById("generate").addEventListener("click", writePassword);
