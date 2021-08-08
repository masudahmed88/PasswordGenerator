var genBtn = document.querySelector("#generate");


//created the var for the 4 different type of characters also created a var for the combination(allChoices) of all the characters
//then created a var "character" for the password that displays in the textarea after the user specifies all selections. 
var specialCharacters   = "!#$%&')(*+,-./:;<=>?@][_`}{|~^"; 
var numericalCharacters = "1234567890";
var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var allChoices = "";
var character = "";

function generatePassword() {
  var passLength = prompt("Please select a number between 8 and 128 for your password!");
console.log(passLength)
  if (passLength < 8 || passLength > 128) {
    alert("You have to have a password aleast 8 characters long and lower than 128 characters!");
    
    return;
  }

  var useLowerCase = confirm("Would you  like lowercase characters in your password?");
  var useUpperCase = confirm("Would you like uppercase characters in your password?");
  var useSpecialCharacters = confirm("Would you like special characters in your password?");
  var useNumericalCharacters = confirm("Would you like numerical characters in your password?");
  
   if(useLowerCase === true){
     allChoices += lowerCaseCharacters;
     console.log(allChoices);
   }

   if(useUpperCase === true){
    allChoices += upperCaseCharacters;
    console.log(allChoices);
  }

  if(useSpecialCharacters === true){
    allChoices += specialCharacters;
    console.log(allChoices);
  }

  if(useNumericalCharacters === true){
    allChoices += numericalCharacters;
    console.log(allChoices);
  }

  console.log(allChoices)

  if (useLowerCase === false && useUpperCase === false && useSpecialCharacters === false && useNumericalCharacters === false) {
    confirm("You must choose at least one character type for your password!");

    return;
  }


  for (var i=0; i < passLength; i++) {

    var password = Math.floor(allChoices.length * Math.random())
    character += allChoices.charAt(password);
    console.log(character);
   //action
  }
document.getElementById("password").textContent = character;
return;
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
