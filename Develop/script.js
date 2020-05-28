let clipboard = new clipboard(".copy");
let lowercase = "abcdefghijklmnopqrstuvwxyz",
  uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers = "0123456789",
  specialChar = "!@#$%^&*()_+~`|}{[]:;?><,./-=",
  lowercaseInput = document.getElementById("lowercase"),
  uppercaseInput = document.getElementById("uppercase"),
  numbersInput = document.getElementById("numbers"),
  specialCharInput = document.getElementById("specialChar"),
  lengthInput = document.getElementById("length"),
  passwordField = document.getElementById("pass-field"),
  generateBtn = document.getElementById("generate"),
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

clipboard.on("success", function (e) {
  console.info("Action:", e.action);
  console.info("Text:", e.text);
  console.info("Trigger:", e.trigger);
  let alertbox = document.getElementById("alert");
  alertbox.innerHTML = "Copied!";
  alertbox.classList.add("success");
  setTimeout(function () {
    alertbox.classList.remove("success");
  }, 3000);

  e.clearSelection();
});

clipboard.on("error", function (e) {
  console.error("Action:", e.action);
  console.error("Trigger:", e.trigger);
  let alertbox = document.getElementById("alert");
  alertbox.innerHTML = "Try select the text to copy";
  alertbox.classList.add("fail");
  setTimeout(function () {
    alertbox.classList.remove("fail");
  }, 3000);
});
