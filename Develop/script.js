var generateBtn = document.querySelector("#generate");


var upper = "ABCDEFGHIJKLMNOPQRSTUVWZYZ"
var lower = "abcdefghijklmnopqrstuvwxyz"
var numb = "123456789"
var symbol = "!@#$%^&"


var lengthEl = document.querySelector("#length")
var uppercaseEl = document.querySelector("#uppercase")
var numbersEl = document.querySelector("#numbers")
var symbolEl = document.querySelector("#special")


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

    // var choices = lower;
    // (uppercaseEl.checked) ? choices += upper : '';
    // (numbersEl.checked) ? choices += numb : '';
    // (symbolEl.checked) ? choices += symbolEl : '';


  // console.log(generatePassword(12,upper))

// Functiion Generate Password and stuff
function generatePassword (x,howMany){  
//alert('hello')

var password = document.querySelector("#password");
var passBox = "";
for (var i = 0; i < x; i++){
  // var chars = "abcdefghijklmnopqrstuvwxyz123456789+-*/"
  var random = Math.floor(Math.random()*howMany.length);
  passBox += howMany.charAt(random)
}
  return passBox;
}
//lengthEl.value, choices