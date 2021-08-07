var genBtn = document.querySelector("#generate");



var specialCharacters =    "!#$%&')(*+,-./:;<=>?@][_`}{|~^"; 
var numericalCharacters = "1234567890";
var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var allchoices = "";
var character = "";

function generatePassword() {
  //parseInt()
  var passLength = prompt("How many characters do you want as your password?");
console.log(passLength)
  if (passLength < 8 || passLength > 128) {
    alert("You have to have at least 8 characters long and lower than 128 characters");

    return;
  }

  var useLowerCase = confirm("Do you want to use lower case?");
  var useUpperCase = confirm("Do you want to use upper case?");
  var useSpecialCharacters = confirm("Do you want to use special characters?");
  var useNumericalCharacters = confirm("Do you want to use numerical characters");
 
   if(useLowerCase === true){
     allchoices += lowerCaseCharacters;
   }

   if(useUpperCase === true){
    allchoices += upperCaseCharacters;
  }

  if(useSpecialCharacters === true){
    allchoices += specialCharacters;
  }

  if(useNumericalCharacters === true){
    allchoices += numericalCharacters;
  }

  console.log(allchoices)

  if (useLowerCase === false && useUpperCase === false && useSpecialCharacters === false && useNumericalCharacters === false) {
    alert("You must choose at least one character type!");
  }


  for (var i=0; i < passLength; i++) {

    var password = Math.floor(allchoices.length * Math.random())
    character += allchoices.charAt(password)
    console.log(character);
   //action
  }
document.getElementById("password").textContent = character;
}



genBtn.addEventListener("click", generatePassword); 









// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
