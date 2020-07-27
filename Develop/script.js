// Assignment Code
var generateBtn = document.querySelector("#generate");

var lengthEl = document.querySelector("#length")
var uppercaseEl = document.querySelector("#uppercase")
var lowercaseEl = document.querySelector("#lowercase")
var numbersEl = document.querySelector("#numbers")
var symbolEl = document.querySelector("#special")

// var submit = document.querySelector("#submit")

var upper = "ABCDEFGHIJKLMNOPQRSTUVWZYZ"
var lower = "abcdefghijklmnopqrstuvwxyz"
var numb = "123456789"
var symbol = "!@#$%^&"


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password(lengthEl.value, choices);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) {

    var choices = lower;
    (uppercaseEl.checked) ? choices += upper : '';
    (numbersEl.checked) ? choices += numb : '';
    (symbolEl.checked) ? choices += symbolEl : '';

}
  


// Functiion Generate Password and stuff
function generatePassword (x,choices){
  var password = "";

  for (var i = 0; i < x; i++){
      password += choices.charAt(Math.floor(Math.random) * choices.length)
  }
    return password;
}
