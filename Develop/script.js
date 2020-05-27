// Assignment Code
let generateBtn = document.querySelector("#generate");
let clipboard = new Clipboard(".copy");
const lowercase = "abcdefghijklmnopqrstuvwxyz",
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
plength;

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
