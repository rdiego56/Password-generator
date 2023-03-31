// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  let passwordlenght = parseInt(prompt("How long should the passwrond be?"))
  if(passwordlenght < 8 || passwordlenght > 128) {
    alert("Error, invalid password lenght.\nPlease choose a password greater than 8 and less than 128 characters.");
    return "";
  }

var includeLowercase = confirm("Include lower case letters in password?");
var includeUppercase = confrim("Include upper case letters in password?");
var inludeNumbers = confirm("Include numbers in password");
var includeSpecialCharacters = confirm("Include special characters in password?");

if (!includeLowercase && !includeUppercase && !inludeNumbers && !includeSpecialCharacters) {
  alert ("Error, invalid character types.\nPleaseinclude at least one type of character.");
  return "";
}

let passwordCharacters =[]
const specialCharacters = " !";

if(includeSpecialCharacters) {
  passwordCharacters = passwordCharacters.concat(specialCharacters.split (""));
}

let result = "";

}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
