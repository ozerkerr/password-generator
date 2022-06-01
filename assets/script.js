// Assignment Code
var generateBtn = document.querySelector("#generate");
var criteriaQuestionsArray = [
  "Would  you like to add lowercase characters?",
  "Would  you like to add uppercase characters?",
  "Would  you like to add numeric characters?",
  "Would  you like to add special characters?"
]
var criteriaCharacters = [
  "abcdefghijklmnopqrstuvwxyz",
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "1234567890",
  ` !"#$%&'()*+,-./:;<=>?@[]^_{|}~`
]

var numberOfChar = 0;
var possibleCharArray = [];
var possibleCharString = "";
var generatedPasswordString = "";

function generatePassword() {
  var numberOfCharacter = prompt("How many characters would you like in your password?\n\n\n(Between 8 and 128)")
  if (numberOfCharacter === null) {
    return;
  }

  // Validate that number of characters is between 8 to 128
  if (numberOfCharacter < 8 || numberOfCharacter > 128) {
    if (confirm("Please enter number of characters between 8 to 128.\n\n\nStart again?") == true) {
      return generatePassword()
    } else {
      return null;
    }
  } else if (numberOfCharacter % 1 !== 0) {
    // Validate that number of characters added is whole number 
    if (confirm("Please enter whole numbers between 8 to 128.\n\n\nStart again?") == true) {
      return generatePassword()
    } else {
      return null;
    }
  } else {
    numberOfChar = numberOfCharacter;
  }

  // Check and push what criterias do user want to add into password generator 
  for (i = 0; i < criteriaQuestionsArray.length; i++) {
    if (confirm(criteriaQuestionsArray[i]) == true) {
      possibleCharArray.push(criteriaCharacters[i])
    }
  }
  // transform array into string 
  possibleCharString = possibleCharArray.join()

  // validate that user selected at least one criteria
  if (possibleCharString === "") {
    if (confirm("Please select at least one option.\n\n\nStart again?") == true) {
      return generatePassword()
    } else {
      return
    }
  }

  // get string with randomed characters
  for (i = 0; i < numberOfChar; i++) {
    var randomIndex = Math.floor(Math.random() * possibleCharString.length);
    generatedPasswordString += possibleCharString[randomIndex];
  }
  return generatedPasswordString;
}

// Write password to the #password input
function writePassword() {
  // set to empty string and array 
  if (generatedPasswordString !== "" || possibleCharArray !== []) {
    generatedPasswordString = "";
    possibleCharArray = [];
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password) {
    passwordText.value = password;
  }

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
