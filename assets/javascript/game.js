// 1. Have word bank with them
// 2 Generate random word from word bank
// 2. display blanks for number of letters in word
// 		a. determine x number of characters in word
// 		b. push  x "_" into an array
// 3. detect letters chosen by user
//      a. if letter matches any of the letters in the word,
//          then display letter of the word.
//      b. else, add letter to a bank of letters chosen
//          i. if word has already been chosen before, do not allow it to be chosen again.
// 4.

var wordBank = ["Argentina","Bolivia","Brazil","Chile","Colombia","Venezuela","Ecuador","Guyana","Peru","Paraguay","Suriname", "Uruguay","Venezuela", "Canada", "Cuba", "Guatemala", "Jamaica", "Mexico", "Panama", "Nicaragua", "Austria", "Belgium", "Bosnia", "Bulgaria", "Croatia", "Denmark", "France", "Georgia", "Germany", "Greece", "Hungary", "Italy", "Iceland", "Kazakhstan", "Netherlands", "Norway", "Poland", "Portugal", "Russia", "Spain", "Sweden", "Turkey", "Afghanistan", "Cambodia", "China", "India", "Japan", "Israel", "Iran", "Kazakhstan", "Lebanon", "Malaysia", "Pakistan", "Palestine", "Syria", "Thailand", "Vietnam" ,"Algeria", "Chad", "Egypt", "Ethiopia", "Kenya", "Liberia", "Lybia", "Madagascar", "Rwanda", "Nigeria", "Uganda", "Sudan", "Zimbabwe"]

// Random word is chosen from word bank
// words turned into lower case
var randomWord = wordBank[Math.floor(Math.random()*wordBank.length)].toLowerCase();

// random word is made into an array of each letter and space
var randomWordArr = randomWord.split("");
console.log(randomWord);
console.log(randomWordArr);
console.log("-------------------");

//array to store the blank letters of the random word
var blankWordArr = [];

// loop adds "_ " for each letter of randomWord
for (var i = 0; i<randomWordArr.length; i++) {
	blankWordArr.push("_ ");
}
console.log(blankWordArr);
console.log("-------------------");

//To display blank word, join array into a string
var blankWordDisplay = blankWordArr.join(' ');
console.log(blankWordDisplay);

console.log("-------------------");
var userGuessArr = []
document.addEventListener('keyup', function(event){
	// to detect which key was pressed and store it in userGuess
	if ((event.keyCode == 13) || (event.keyCode == 32)){ //space or enter start game
		alert("game begins");
		document.addEventListener('keyup', function(event){
			var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
			
			if ((event.keyCode <=90) && (event.keyCode >= 65)) { // to detect only numbers
				for(var i = 0; i<randomWordArr.length;i++){
					if (userGuess === randomWordArr[i]) {
						console.log("letter correct!")
						userGuessArr.push(userGuess);
					} else {
						console.log("letter not in word.")
					}
				}
			console.log(userGuessArr);
			}
		})
	}
});

