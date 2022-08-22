// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var submitBtn = document.querySelector("#submit");
var modalContainer = document.querySelector("#modal_container");

var generatePassword = function() {
  var password = 'password';

  return password;
}

var triggerModal = function() {
  modalContainer.classList.add('show');
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

submitBtn.addEventListener("click", function(){
  modalContainer.classList.remove('show');
  writePassword();
})

// Add event listener to generate button
generateBtn.addEventListener("click", triggerModal);
