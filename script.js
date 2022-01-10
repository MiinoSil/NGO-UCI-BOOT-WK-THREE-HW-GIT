// Assignment Code
var generateBtn = document.querySelector("#generate");

// Define or declare character arrays for lowercase, uppercase, special characters, and numbers.
var AlphaLoCase = ["abcdefjhijklmnopqrstuvwxyz"];
var AlphaUpCase = ["ABCDEFJHIJKLMNOPQRSTUVWXYZ"];
var SpChar = ["`~!@#$%^&*)(-_=+}{][:?><"];
var Numbers = ["0123456789"];


console.log(AlphaLoCase);
console.log(AlphaUpCase);
console.log(SpChar);
console.log(Numbers);

// Write password to the #password input
function writePassword() {

  // Prompt user to input length of password between 8 to 128 characters?
  var pwlength = (window.prompt("Please input password length between 8 to 128 character?")); {
    // Confirm user input for password length meets 8 to 128 character limit, if outside criteria rerun function.
    if (pwlength >= 8 && pwlength <=128) {
      console.log(pwlength);
    } else {
      window.alert("Please enter a password length between 8 to 128 characters.");
      return writePassword();
    };
  };

  var availableChars = [];

  // Prompt user to confirm to lowercase characters in password?
  if (cmfLo = (window.confirm("Click OK to include lowercase characters (e.g. a to z) in the password?"))) {
    availableChars = availableChars.concat(AlphaLoCase); 
  }; 
  
  // Prompt user to confirm to include uppercase characters in password?
  if (cmfUp = (window.confirm("Click OK to include uppercase characters (e.g. A to Z) in the password?"))) {
    availableChars = availableChars.concat(AlphaUpCase);
  }; 
  
  // Prompt user to confirm to include special characters in password?
  if (cmfSp = (window.confirm("Click OK to include special characters (e.g. !@#$%^&*? and more) in the password?"))) {
    availableChars = availableChars.concat(SpChar);
  }; 
  
  // Prompt user to confirm to include numbers in password?
  if (cmfNm = (window.confirm("Click OK to include numbers (e.g. 0 to 9) in the password?"))) {
    availableChars = availableChars.concat(Numbers);
  }; 
  
  console.log(availableChars);
  
  // Loop in the case user does not make a selection for any criteria.
  if (cmfLo + cmfUp + cmfSp + cmfNm === 0) {
    window.alert("Please select at least one criteria.");
    return writePassword();
  };

  //Generate password based on defined function.
  var password =  generatePassword();
  function generatePassword () {
    // Math function to fill in characters based upon confirmed password criteria based upon input password length.
    for (var i = 0; i < pwlength; i++) {
      password = password + availableChars.charAt(Math.floor(Math.random() * availableChars.length + 1))
    } 
    console.log(password);
  };



  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)