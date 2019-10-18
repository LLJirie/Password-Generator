document.getElementById("password-btn").addEventListener("click", function () {
    getPasswordOptions();
});

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "Y", "Z"]

var uppercase = ["a", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S"."T", "U", "V", "W", "X", "Y", "Z"]

var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]



function getPasswordOptions() {
    var length = parseInt(
        prompt("How many characters would you like your password to contain?")
    );
   


    if (isNaN(length)) {
        alert("Password length must be a number");
        return;
    }

    if (length < 8) {
        alert("Password length must be greater than 8");
        return;
    }

    if (length > 128) {
        alert("Password length must be less than 128");
        return;
    }

    var specialChars = confirm("Would you like to use special character?");

    var numericChars = confirm("Would you like to use numeric character?");

    var uppercaseChars = confirm("Would you like to use uppercase character?");

    var lowercaseChars = confirm("Would you like to use lowercase character?");

    if (!specialChars && !numericChars && !uppercaseChars && !lowercaseChars) {
        alert("We can't help you, you are to picky...");
        return;
    }

    var passwordOptions = {
        length: length,
        specialChars: specialChars,
        numericChars: numericChars,
        uppercaseChars: uppercaseChars,
        lowercaseChars: lowercaseChars
    };
  

    return passwordOptions;

  
}

function makePassword () {
    var passwordOptions = getPasswordOptions();

    var selectedChars = [];
    var result = []

if(passwordOptions.specialChars) {
    selectedChars.concat(specialCharacter);
}

}

console.log("your password is" + specialChars + numericChars + uppercaseChars + loweraseChars) 


 console.log("We Made it!")















varInputUpperCase = prompt ("Input Capital letter") ||
varInputLowerCase = prompt ("Input lowercase letter") ||
varInputNum = Prompt("Choose # 1 - 9") ||
varInputSpecialCharacter = prompt("Input Special Character")

for (var i = 0; i < myLowercase.length, i++){
console.log ("I chose letter" = myLowercase[i])
}
for (var i = 0; i < myLowercase.length, i++){
    console.log ("I chose letter" = myLowercase[i])
}
for (var i = 0; i < myLowercase.length, i++){
    console.log ("I chose letter" = myLowercase[i])
}
 for (var i = 0; i < myLowercase.length, i++){
    console.log ("I chose letter" = myLowercase[i])
}

