// All variables are stored below, including
// the four different character ranges a user can select from
let lowercase = "abcdefghijklmnopqrstuvwxyz",
  uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers = "0123456789",
  specialChar = "!@#$%^&*()_+~`|}{[]:;?><,./-=",
  lowercaseInput = document.getElementById("lowercase"),
  uppercaseInput = document.getElementById("uppercase"),
  specialCharInput = document.getElementById("specialChar"),
  numbersInput = document.getElementById("numbers"),
  // This variable receives the length from the slider
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
  // The four if statements below alter what is character sets
  // are included based on the users button selections
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
  // This writes the password to the textarea in the html
  document.getElementById("password").innerHTML = userPassword;
  // This writes the password to the console log
  console.log(userPassword);
}
// This allows the copy button to work,
// and also prompts the user that the password was successfully copied
function copyPassword() {
  let copyText = document.getElementById("password");
  copyText.select();
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
}
