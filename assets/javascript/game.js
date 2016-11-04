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
userGuessArr=[];
var usedLettersArr = [];
var correctGuessArr = [];
var guessCount = 7;
var gameLose = false;
var gameWin = false;
var letterIndex = "";
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

		for(var i = 0; i <blankWordArr.length; i++){
			var displayButton = $('<button>')
			$('#display').append(displayButton);
			displayButton.addClass('letter btn-lg');
			displayButton.html(" _ ");
			displayButton.attr('data-letter', randomWordArr[i]);
		    // displayButton.data(randomWordArr);
		}

		document.addEventListener('keyup', function(event){
			if ((event.keyCode <=90) && (event.keyCode >= 65)) { // to detect only numbers
				var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
				if (guessCount == 0) {
					gameLose = true;
					alert("Awe, you ran out of attempts, and it seems like you've been hung :-(")
				}
				usedLettersArr.unshift(userGuess);//unshift so that adds to front of array for more easily checking letter use repeat.
				console.log("-------Letter REPEAT TEST------------");
				//****letter repeat****
				for(var i = 1; i < usedLettersArr.length; i++){
					if (userGuess == usedLettersArr[i]){
						noRepeat = false;
					} else {
						noRepeat = true;
					}
				}
				//*****Guess & Match Check****************
				for(var i = 0; i <randomWordArr.length; i++) {
					if((userGuess == randomWordArr[i]) && (noRepeat)) {
						console.log("letter " + userGuess + " found")
						correctGuessArr.push(userGuess);
						displayButton.data("letter")
						displayButton.data("letter",randomWordArr[i])
					}
				}
				if(userGuess !== correctGuessArr[correctGuessArr.length-1]){
					guessCount--;
				}
				console.log("**************************Guesses Left: "+ guessCount)
				console.log("Correct Guesses Array: " + correctGuessArr);
				console.log("Used Letters Array: " + usedLettersArr);
				//---------Detect when user Wins----------------
				if((correctGuessArr.sort().toString()) == (randomWordArr.sort().toString())){
					alert("You've won!");
					gameWin = true;
				}
				for(var i = 0; i <randomWordArr.length; i++) {
					if((userGuess == randomWordArr[i]) && (noRepeat)) {
						return  letterIndex = randomWordArr.indexOf(userGuess);
					}
				};
				 // $('.letter-button').on('click', function() {
		   //        var fridgeMagnet = $('<div>');
		   //        fridgeMagnet.addClass('letter fridge-color');
		   //        fridgeMagnet.text($(this).data("letter"));
		   //        $('#display').append(fridgeMagnet);
		       // });
			}
			// determining index of correctly guessed letter

		});
	}
}
//need to figure out how to get counter to count down only when letter guess wrong.
//need to figure out how to add html when correct letter guessed, into correct button


