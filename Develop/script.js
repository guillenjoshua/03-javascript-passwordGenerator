// Assignment Code

var lengthEl = document.querySelector("#length")
var uppercaseEl = document.querySelector("#uppercase")
var numbersEl = document.querySelector("#numbers")
var symbolEl = document.querySelector("#special")

var generateBtn = document.querySelector("#generate");


var upper = "ABCDEFGHIJKLMNOPQRSTUVWZYZ"
var lower = "abcdefghijklmnopqrstuvwxyz"
var numb = "123456789"
var symbol = "!@#$%^&"


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  var choices = lower;
    (uppercaseEl.checked) ? choices += upper : '';
    (numbersEl.checked) ? choices += numb : '';
    (symbolEl.checked) ? choices += symbol : '';

  passwordText.value = generatePassword(lengthEl.value, choices)

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

   

// Functiion Generate Password and stuff

function generatePassword (x,howMany){  

var password = document.querySelector("#password");
var passBox = "";
for (var i = 0; i < x; i++){
  var random = Math.floor(Math.random()*howMany.length);
  passBox += howMany.charAt(random)
}
  return passBox;
}
