$(document).ready(function(){
	
var words = [
["e", "a", "r", "t","h"],
["w", "i", "n","d", "o","w","s"],
["f", "i", "r", "e", "h", "o", "u", "s", "e"]
];

var hints = [
["The ball we live on"],
["Portals we look through"],
["House of dalmatians"]
];


var guesses = 0;
// random number gen for selection of word
var random = Math.floor((Math.random()*(words.length)));
// console.log(random);

// $(document).ready(function(){

var currentWord = words[random];
console.log(currentWord);
var currentHint = hints[random];
console.log(currentHint);
document.querySelector("#currentHint").innerHTML = currentHint;


// creates array of _ to represent randomly selected word
var wordSpaces = new Array(currentWord.length);
for (var i = 0; i < wordSpaces.length; i++){
	wordSpaces[i] = "_ ";
}
console.log(wordSpaces);

// prints selected word with _ to screen
function displayEmptyWord(){
	for (var i = 0; i < wordSpaces.length; i++){
	var unguessedWord = document.getElementById("unguessedWord");
	var letter = document.createTextNode(wordSpaces[i]);
	unguessedWord.appendChild(letter);
	}
}
displayEmptyWord();

// takes keyboard input from user and stores it as userGuess
document.onkeyup = function(event){
	var userGuess = event.key;
	var letter = userGuess;
	console.log(letter);
	console.log(currentWord);
	for (var i =0; i < currentWord.length; i++){
		if(currentWord[i] === letter){
			wordSpaces[i] = letter + " ";
			var correct = true;
		}
		userGuess = "";
		document.querySelector("#guesses").innerHTML = "<p> You pressed: " + letter + "</p>";	
	}

	console.log(unguessedWord);

	// if guess is true replace empyt word string with added correct letter
	var unguessedWord = document.getElementById("unguessedWord");
	unguessedWord.innerHTML="";
	displayEmptyWord();

	console.log(unguessedWord);
	console.log(letter);
	console.log(correct);
	console.log(guesses);

	// if guess is false add incorect letter to wrong letter field and changes displayed hangman .png
	if(!correct){
		var wrongGuess = document.getElementById("wrongGuesses");
		var wrongLetter = document.createTextNode(" " + letter);
		wrongGuess.appendChild(wrongLetter);
		guesses ++;
		// indexs hangman image with incorect guesses
		var replaceImg = 'assets/images/stage' + guesses + '.png'
		document.getElementById('display').src = replaceImg; 
		console.log(replaceImg);
		}
	console.log(guesses);

	// checks for win
	var win = true;
	for (var i = 0; i < wordSpaces.length; i++){
		if (wordSpaces[i] === "_ "){
			win = false;
		}
	}
	if (win){
		alert("You win!")
		location.reload();

	}
	// returns you loose alert if guesse = 9
	if(guesses === 9){
		alert("You Loose!");
		guesses = 0;
		var replaceImg = 'assets/images/stage' + guesses + '.png'
		document.getElementById('display').src = replaceImg;
		letter = "";
		// $("#wrongGuesses").html("This is where the incorret guesses go");
		// $("#guesses").html("");
		location.reload();
	}

}

// function newGame(){
// 	wordSpaces = "";
// 	unguessedWord = "";
// 	letter = "";
// 	wrongGuesses = "";
// 	guesses = 0;
// 	$("#wrongGuesses").html("This is where the incorret guesses go");
// 	$("#guesses").html("");
// 	displayEmptyWord();
// }

});
// function to start new word on open or reload
// function newGame(){
// 	displayEmptyWord();
// }
// starts game on open of page
// window.onload = newGame()


