// 1. Word Bank
// 2  Generate random word from word bank:
// 3. Make random word into array of letters
// 3. display blanks for number of letters in word
// 		a. determine x number of characters in random word
// 		b. push  "_" into a new array: blankWord
// 4. make variable for blank word display (blankWordDisplay): join blanks together
// 3. detect letters chosen by user
//      a. if letter matches any of the letters in the word,
//          then display letter of the word.
// 			i. add into array for correctUserGuess
//      b. else, add letter to a bank of letters chosen
//          i. if word has already been chosen before, do not allow it to be chosen again.
// toDo:
// remove "game start" event listener
// Add countdown of available Guesses (The hangman)
// begin displaying game in DOM

var wordBank = ["Argentina","Bolivia","Brazil","Chile","Colombia","Venezuela","Ecuador","Guyana","Peru","Paraguay","Suriname", "Uruguay","Venezuela", "Canada", "Cuba", "Guatemala", "Jamaica", "Mexico", "Panama", "Nicaragua", "Austria", "Belgium", "Bosnia", "Bulgaria", "Croatia", "Denmark", "France", "Georgia", "Germany", "Greece", "Hungary", "Italy", "Iceland", "Kazakhstan", "Netherlands", "Norway", "Poland", "Portugal", "Russia", "Spain", "Sweden", "Turkey", "Afghanistan", "Cambodia", "China", "India", "Japan", "Israel", "Iran", "Kazakhstan", "Lebanon", "Malaysia", "Pakistan", "Palestine", "Syria", "Thailand", "Vietnam" ,"Algeria", "Chad", "Egypt", "Ethiopia", "Kenya", "Liberia", "Lybia", "Madagascar", "Rwanda", "Nigeria", "Uganda", "Sudan", "Zimbabwe"]
// Random word is chosen from word bank. letters turned into lower case
var randomWord = wordBank[Math.floor(Math.random()*wordBank.length)].toLowerCase();
//To display blank word, join array into a string
var blankWordArr = [];
var blankWordDisplay = blankWordArr.join(' ');
// random word is made into an array of each letter
var randomWordArr = randomWord.split("");
//array to store the blank letters of the random word

var noRepeat = true;
var usedLettersArr = [];
var correctGuessArr = [];
var guessCount = 7;
var gameLose = false;
var gameWin = false;
document.addEventListener('keyup', startGame);
function startGame(event){
		// to detect which key was pressed and store it in userGuess
	if (event.keyCode == 32){ //space start game
		alert("game begins!");

		document.removeEventListener('keyup', startGame);
		console.log("Random Word is: " + randomWord);
		console.log("Random Word in Array: " + randomWordArr);
		console.log("-------------------");


		// loop adds "_ " for each letter of randomWord
		for (var i = 0; i<randomWordArr.length; i++) {
			blankWordArr.push("_ ");
		};

		console.log("Array of letter Blanks for Random Word: " + blankWordArr);
		console.log("Word Blank as String: " + blankWordDisplay);



		document.addEventListener('keyup', function(event){
			if ((event.keyCode <=90) && (event.keyCode >= 65)) { // to detect only numbers
				var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
				if(guessCount > 0){
					guessCount--;
				}
				if (guessCount == 0) {
					gameLose = true;
				}
				usedLettersArr.push(userGuess);
				console.log(guessCount);
				console.log("-------Letter REPEAT TEST------------");
				var letterRepeat = function (usedLetterArr, letterChoice){
					for(var i = 1; i < usedLetterArr.length - 1; i++){
						if (letterChoice === usedLetterArr[i]){
							noRepeat = false;
						} else {
							noRepeat = true;
						}
					} // **This for loop looks at only letters guessed in the past, by starting at array index 1 (so the first guess is not wrongly detected), and doesn't look at the last index, since every guess gets pushed to the back of the array.

				};
				letterRepeat(usedLettersArr, userGuess);
				console.log("Repeat function Bolean: " + noRepeat)
				console.log("-------FUNCTION TEST------------");
				function checkLetter (computerArr,letterChoice,correctBankArr) {
					for(var i = 0; i <computerArr.length; i++) {
						if((letterChoice == computerArr[i]) && (noRepeat)) {
							console.log("letter " + letterChoice + " found")
							correctBankArr.push(letterChoice);
						}
					}
				};
				checkLetter(randomWordArr, userGuess, correctGuessArr);
				console.log("Correct Guesses Array:" + correctGuessArr);
				console.log("Used Letters Array:" + usedLettersArr);

				console.log("Correct Guesses Array Sorted" + correctGuessArr.sort());
				console.log("Computer Word Array Sorted" + randomWordArr.sort());

				//Detect when user Wins
				var compareArrays = function (computerArr,userArr){
					if((userArr.sort().toString()) == (computerArr.sort().toString())){
						alert("You've won!");
						gameWin = true;
					}
				}
				compareArrays(randomWordArr,correctGuessArr);
			}
		});
	}
}


