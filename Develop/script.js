let lowercase = "abcdefghijklmnopqrstuvwxyz",
  uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers = "0123456789",
  specialChar = "!@#$%^&*()_+~`|}{[]:;?><,./-=",
  lowercaseInput = document.getElementById("lowercase"),
  uppercaseInput = document.getElementById("uppercase"),
  specialCharInput = document.getElementById("specialChar"),
  numbersInput = document.getElementById("numbers"),
  lengthBox = document.getElementById("length-box").value,
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
  for (let i = 0; i <= lengthBox; i++) {
    let randomNumber = Math.floor(Math.random() * passwordCharSet.length);
    userPassword += passwordCharSet.charAt(randomNumber);
  }
  console.log(userPassword);
}
document
  .getElementById("generate")
  .addEventListener("click", writePassword(event));
