// YOUR CODE HERE
let randomNumber = Math.floor(Math.random() * 10 + 1);
let userName = prompt("Please enter your name:");
let userGuess = prompt("Please enter a number between 1 and 10:");
let userInt = parseInt(userGuess);
while (userInt <1 || userInt > 10) {
  let userGuess = prompt("Please enter a number between 1 and 10:");
  let userInt = parseInt(userGuess);
}
if (userInt === randomNumber) {
  alert(userName + " guessed " + userGuess + " and the computer had " + randomNumber + ". You Won!");
} else {
  alert(userName + " guessed " + userGuess + " and the computer had " + randomNumber + ". You Lost!");
} 