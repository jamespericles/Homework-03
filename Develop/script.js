let lowercase = "abcdefghijklmnopqrstuvwxyz",
  uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers = "0123456789",
  specialChar = "!@#$%^&*()_+~`|}{[]:;?><,./-=",
  lowercaseInput = document.getElementById("lowercase"),
  uppercaseInput = document.getElementById("uppercase"),
  specialCharInput = document.getElementById("specialChar"),
  numbersInput = document.getElementById("numbers"),
  lengthInput = document.getElementById("length"),
  passwordFeild = document.getElementById("pass-field"),
  generateBtn = document.getElementById("generate"),
  copyButton = document.getElementById("copy"),
  plength,
  userPassword,
  passwordCharSet;

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
document.getElementById("generate").addEventListener("click", writePassword());
