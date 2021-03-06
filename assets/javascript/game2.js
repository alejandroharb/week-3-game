/*
 press [space] to start game
 display blank letters for random word
 press letter button to guess letter
 compare letter to array of computer word
    a. if correct: add letter to display
*/
// 1. Word Bank
// 2  Generate random word from word bank:
// 3. Make random word into array of letters
// 3. display blanks for number of letters in word
//      a. determine x number of characters in random word
//      b. push  "_" into a new array: blankWord
// 4. make variable for blank word display (blankWordDisplay): join blanks together
// 3. detect letters chosen by user
//      a. if letter matches any of the letters in the word,
//          then display letter of the word.
//          i. add into array for correctUserGuess
//      b. else, add letter to a bank of letters chosen
//          i. if word has already been chosen before, do not allow it to be chosen again.
// toDo:
// begin displaying game in DOM
$(document).ready(function(){
var wordBank = ["Brazil","Chile","Ecuador","Peru","Suriname","Cuba", "Mexico", "Belgium", "Bosnia", "Denmark", "France", "Germany", "Hungary", "Italy", "Iceland","Norway", "Poland", "Portugal", "Spain", "Turkey", "Cambodia", "China", "India", "Japan", "Israel", "Iran", "Syria", "Vietnam" ,"Chad", "Egypt", "Kenya", "Liberia", "Lybia",  "Sudan"];
// Random word is chosen from word bank. letters turned into lower case
var randomWord = wordBank[Math.floor(Math.random()*wordBank.length)].toLowerCase();
//To display blank word, join array into a string
var blankWordArr = [];
var blankWordDisplay = blankWordArr.join(' ');
// random word is made into an array of each letter
var randomWordArr = randomWord.split("");
//array to store the blank letters of the random word
var displayButton;
var noRepeat = true;
userGuessArr=[];
var usedLettersArr = [];
var correctGuessArr = [];
var guessCount = 7;
var gameLose = false;
var gameWin = false;
var letterIndex;
function repeat () {
    for(var i = 1; i < usedLettersArr.length; i++){
        if (userGuess == usedLettersArr[i]){
            noRepeat = false;
        } else {
            noRepeat = true;
        }
    }
}
document.addEventListener('keyup', startGame);
function startGame(event){
    if (event.keyCode == 32){ //space start game
        alert("game begins!");
        //removes first spacebar event
        document.removeEventListener('keyup', startGame);
        // loop adds "_ " for each letter of randomWord
        for (var i = 0; i<randomWordArr.length; i++) {
            blankWordArr.push("_ ");
        };
        //creates blank buttons on DOM
        for(var i = 0; i <blankWordArr.length; i++){
            displayButton = $('<button>');
            $('#display').append(displayButton);
            displayButton.addClass('letter btn-lg');
            displayButton.attr('value', i);
        }
        //display used letters
        $('#used-letters').text(usedLettersArr);
        document.addEventListener('keyup', function(event){
            if ((event.keyCode <=90) && (event.keyCode >= 65)) { // to detect only numbers
                var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
                if (guessCount == 0) {
                    gameLose = true;
                    alert("Awe, you ran out of attempts, and it seems like you've been hung :-(")
                }
                usedLettersArr.unshift(userGuess);//unshift so that adds to front of array for more easily checking letter use repeat.
                console.log("-------Letter REPEAT TEST------------");
                //checks letter repeat
                repeat();
                //*****Guess & Match Check****************
                for(var i = 0; i <randomWordArr.length; i++) {
                    if((userGuess == randomWordArr[i]) && (noRepeat)) {
                        correctGuessArr.push(userGuess);
                        letterIndex=randomWord.indexOf(userGuess);
                        $('button[value="'+letterIndex+'"]').html(userGuess);
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
            }
        });
    }
}
});
//need to figure out how to get counter to count down only when letter guess wrong.
//need to figure out how to add html when correct letter guessed, into correct button

