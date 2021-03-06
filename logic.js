// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Calls generatePassword Function
  var password = generatePassword();
  console.log(password);
  // Chooses where to put the password on website
  var passwordText = document.querySelector("#password");
  // Replaces the previous text with generated password
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Define what characters are
var upperCaseAlphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercaseAlphabet = upperCaseAlphabet.map(element => {
  return element.toLocaleLowerCase();
});
var specialCharacters = ['!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[',',',']','^','_','`','{','|','}','~',`\\`];
var numbersArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

function passwordOption() {
  // Stores the desiered password length in characterAmount
  var characterAmount = prompt('How many characters do you want your password to be?', 15);
  // To make sure data is clean
  if (characterAmount === null) {
    // If user cancels initial prompt
    alert('Password Generator Exited');
    return passwordOption();
    // Tells user password parameters and restarts function
  } else if (characterAmount < 8 || characterAmount > 128) {
    alert('Passwords must be between 8 and 128 characters');
    // characterAmount = 0;
    return passwordOption();
  // Tells user to use numbers for selection
  // } else if(typeof characterAmount != 'number') {
  //   alert('You must use numbers for your selection');
  //   generatePassword();
  };

  // Include lowercase?
  var wantLowercase = confirm('Do you want to include lowercase characters?');
 
  // Include UpperCase?
  var wantUppercase = confirm('Do you want to include uppercase characters?');

  // Include Special Characters?
  var wantSpecial = confirm('Do you want to include special characters?');

  // Include Numbers?
  var wantNumber = confirm('Do you want to include numbers?');

   // If user cancels all selections
   if (wantLowercase == false && 
    wantUppercase == false &&
    wantSpecial == false &&
    wantNumber == false) {
      alert("Your password has to be made of something!\nLet's try this again... Shall we?");
      return passwordOption();
    }  
  
  var obj = {
    characterAmount: characterAmount,
    wantLowercase: wantLowercase,
    wantUppercase: wantUppercase,
    wantSpecial: wantSpecial,
    wantNumber: wantNumber
  }

  return obj;
}

// Starts generatePassword Function
function generatePassword() {

    var options = passwordOption()
    console.log(options);
    // Defining what passwordCharacters to add to later
    var passwordCharacters = [];
    // Defining what passwordCharacters to add to later
    var password = [];
    //
    if (options.wantLowercase == true) {
      passwordCharacters = passwordCharacters.concat(lowercaseAlphabet);
    };
    if (options.wantUppercase == true) {
      passwordCharacters = passwordCharacters.concat(upperCaseAlphabet);
    };
    if (options.wantSpecial == true) {
      passwordCharacters = passwordCharacters.concat(specialCharacters);
    };
    if (options.wantNumber == true) {
      passwordCharacters = passwordCharacters.concat(numbersArray);
    };
  
    console.log(passwordCharacters);
    console.log(options.characterAmount);
  
    // Randomly selects numbers = characterAmount from passwordCharacters and adds them to the password array
    for (let i = 0; i < options.characterAmount; i++) {
      password.push(passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)])
    };
  
    // Changes password characters from array with characterAmount items to one string
    password = password.join('');
  
    console.log(password);
  
    return password;
  };