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
  lengthInput = document.getElementById("length-box"),
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
  lengthBox = Number(lengthInput.value);
  for (let i = 0; i < lengthBox; i++) {
    userPassword += passwordCharSet.charAt(
      Math.floor(Math.random() * passwordCharSet.length)
    );
    console.log(passwordCharSet.length);
  }

  console.log(userPassword);
}
