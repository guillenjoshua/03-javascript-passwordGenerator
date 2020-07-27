// Assignment Code
var generateBtn = document.querySelector("#generate");

var lengthEl = document.querySelector("#length")
var uppercaseEl = document.querySelector("#uppercase")
var lowercaseEl = document.querySelector("#lowercase")
var numbersEl = document.querySelector("#numbers")
var specialEl = document.querySelector("#special")

var upperChar = charTable(65, 90)
var lowerChar = charTable(97, 122)
var numbersChar = charTable(48, 57)
var specialChar = charTable(33, 47)




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) {
  var length = lengthEl.value
  var uppercase = uppercaseEl.checked
  var lowercase = lengthEl.checked
  var numbers = numbersEl.checked
  var special = specialEl.checked
}


// Functiion Generate Password and stuff
function generatePassword (lengthEl, uppercaseEl, lowercaseEl, numbersEl, specialEl) {
    String.fromCharCode()
}


function charTable(a, z){
  var charList = []
  for (let i = a; i <= z; i++) {
    charList.push(i)
  }
    return charList
}
