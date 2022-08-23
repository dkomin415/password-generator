// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var submitBtn = document.querySelector("#submit");
var modalContainer = document.querySelector("#modal_container");
var lengthEl = document.querySelector("#length");
var upperCase = document.querySelector("#uppercase");
var lowerCase = document.querySelector("#lowercase");
var numbers = document.querySelector("#numbers");
var specChar = document.querySelector("#spec-char");

var randomNumber = function() {
  var randomNum = Math.floor(Math.random() * 10);
  console.log(randomNum);
  return randomNum;
}

var randomUpperChar = function() {
  var randomAscii = Math.floor((Math.random() * 25) + 65);
  var randomUpChar = String.fromCharCode(randomAscii);
  return randomUpChar;
}

var randomLowerChar = function() {
  var randomAscii = Math.floor((Math.random() * 25) + 97);
  var randomLowChar = String.fromCharCode(randomAscii);
  return randomLowChar;
}

var randomSpecialChar = function() {
  var specialCharArray = ['!', '@', '#', '$', '%', '&', '*', '?']
  var randomAscii = Math.floor(Math.random() * specialCharArray.length);
  return specialCharArray[randomAscii];
}

var generatePassword = function() {
  var password = '';
  var length = lengthEl.value;
  var arr = [];
  
  if (lowerCase.checked) {
    arr.push(1);
  }
  if (upperCase.checked) {
    arr.push(2);
  }
  if (numbers.checked) {
    arr.push(3);
  }
  if (specChar.checked) {
    arr.push(4);
  }


  for (var i = 0; i < length; i++) {
    var randomNum = Math.floor(Math.random() * arr.length);
    switch (arr[randomNum]) {
      case 1:
        password += randomLowerChar();
        break;
      case 2: 
        password += randomUpperChar();
        break;
      case 3: 
        password += randomNumber();
        break;
      case 4: 
        password += randomSpecialChar();
    }
  }

  console.log(password);
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
