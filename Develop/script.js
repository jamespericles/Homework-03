let generateBtn = document.querySelector("#generate");
// let clipboard = new clipboard(".copy");
let lowercase = "abcdefghijklmnopqrstuvwxyz",
  uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers = "0123456789",
  specialChar = "!@#$%^&*()_+~`|}{[]:;?><,./-=",
  lowercaseInput = document.getElementById("lowercase"),
  uppercaseInput = document.getElementById("uppercase"),
  numbersInput = document.getElementById("numbers"),
  specialCharInput = document.getElementById("specialChar");
lengthInput = document.getElementById("length");
passwordField = document.getElementById("pass-field");
generateBtn = document.getElementById("generate");
copyButton = document.getElementById("copy");

function writePassword() {
  userPassword = "";
  passwordCharSet = "";
  if (lowercaseInput.checked) {
    passwordCharSet += lowercase;
  }
  if (uppercaseInput.checked) {
    passwordCharSet += uppercase;
  }
  if (specialCharInput.checked) {
    passwordCharSet += specialChar;
  }
  if (numbersInput.checked) {
    passwordCharSet += numbers;
  }
}
