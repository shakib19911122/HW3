//Assignment Code
var characterAmountRange = document.querySelector('#charactersAmountRange') 
var characterAmountNumber = document.querySelector('#charactersAmountNumber') 
var includeUppercaseElement = document.querySelector('#includeUppercase') 
var includeNumbersElement = document.querySelector('#includeNumbers') 
var includeSymbolsElement = document.querySelector('#includeSymbols') 
var passward = document.querySelector("#password") 
var form = document.getElementById('passwordGeneratorForm') 


// setting up variable for the upper case, lower case, numbers and special characters. 
var arrayUpperCase = arrayFromLowToHigh(65, 90)
var arrayLowercase = arrayFromLowToHigh(97, 122)
var arrayNumber = arrayFromLowToHigh(48, 57)
var arraySymble = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)


characterAmountNumber.addEventListener('input', syncCharacterAmount); 
characterAmountRange.addEventListener('input', syncCharacterAmount); 


// Add event listener to generate button
form.addEventListener("submit", e => {
  e.preventDefault()
  var characterAmount = characterAmountNumber.value;
  var includeUpperCase = includeUppercaseElement.checked;
  var includeNumbers = includeNumbersElement.checked;
  var includeSymbols = includeSymbolsElement.checked;
  var password = generatePassword (characterAmount, includeUpperCase, includeNumbers, includeSymbols);
  password.innerText  = password

})


function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
  var charCodes = arrayLowercase
  if (includeUppercase) charCodes = charCodes.concat(arrayUpperCase)
  if (includeSymbols) charCodes = charCodes.concat(arraySymble)
  if (includeNumbers) charCodes = charCodes.concat(arrayNumber)
  
  var passwordCharacters = []
  for (var i = 0; i < characterAmount; i++) {
    var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')
}

function arrayFromLowToHigh (low, high){
  var array = [];
  for( var i = low; i<=high; i++); {
    array.push(i);
  }
  return array;
 }



function syncCharacterAmount(e) {
  var value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
}






