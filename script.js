// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  let passwordlength = parseInt(prompt("How long should the password be?"))
  if(passwordlength < 8 || passwordlength > 128) {
    alert("Error, invalid password lenght.\nPlease choose a password greater than 8 and less than 128 characters.");
    return "";

  }
// added for for requirments nedded for code
  var includeLowercase = confirm("Include lower case letters in password?");
  var includeUppercase = confirm("Include upper case letters in password?");
  var includeNumbers = confirm("Include numbers in password");
  var includeSpecialCharacters = confirm("Include special characters in password?");

  if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecialCharacters) {
    alert ("Error, invalid character types.\nPleaseinclude at least one type of character.");
    return "";
  }
// added var for characters able to be used
  var chars = ""
  if (includeLowercase) {
    chars += "abcdefghijklmnopqrstuvwxyz";
  }
  if (includeUppercase) {
    chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (includeNumbers) {
    chars += "0123456789";
  }
  if (includeSpecialCharacters) {
    chars += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  }
// added forloop to generate password
  var Code = "";
  for(var i = 0; i < passwordlength; i++) {
    Code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return Code;
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  alert("Generate password: " + password);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

