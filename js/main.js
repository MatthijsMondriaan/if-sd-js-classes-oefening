
// Constants
const playerNameInputField = document.querySelector('.input-field-player-name');
const addPlayerButton = document.querySelector('.add-player-button');
const resetGameButton = document.querySelector('.reset-game-button');
// Player One
const playerOneLabel = document.querySelector('.player-one-label');
const addPointsPlayerOneButton = document.querySelector('.add-points-player1-button');
// Player Two
const playerTwoLabel = document.querySelector('.player-two-label');
const addPointsPlayerTwoButton = document.querySelector('.add-points-player2-button');

// Variables
let players = []; // Array to store (2) players

resetGame(); // Initialize game

// Event listeners
if (addPlayerButton) {
	addPlayerButton.addEventListener("click", addPlayer);
}

if (resetGameButton) {
	resetGameButton.addEventListener("click", resetGame);
}

if (addPointsPlayerOneButton) {
	addPointsPlayerOneButton.addEventListener("click", addPointsPlayerOne);
}

if (addPointsPlayerTwoButton) {
	addPointsPlayerTwoButton.addEventListener("click", addPointsPlayerTwo);
}

// Functions
function addPlayer() {
    console.log("Add your players here");

    // 🔴 Task 2: create and add 2 players with this function
    // First check if there are 2 players already. If so: then show an alert and do nothing

    if (players.length >= 2) {
        console.log("There are 2 players (or more) already. Press Reset button to start a new game.");
        
        return;
    }

    const playerName = playerNameInputField.value;
    let playerNumber = 1;

    if (players.length == 0) {
        //No players yet! Create player one
    } else {
        // Player one is waiting :-) Create player 2
    }

    printPlayers();
}

function printPlayers() {
    playerNameInputField.value = ""; // Clear name input field

    // 🔴 Task 3: print the information contained within the 2 player-objects.
    console.log("Print your players here");

    // Clear player text when there are no players
    if (players.length == 0) {
        console.log("No one to play");
        playerOneLabel.innerHTML = "Enter player one..";
        playerTwoLabel.innerHTML = "Enter player two..";

        return;
    }

    var playersText = "";

    // Hints:
    // Create and print Player One text (playerOneLabel.innerHTML)
    // Create and print Player Two text (playerTwoLabel.innerHTML)
    // The text must contain the name, symbol and score!

    for(let i = 0; i < players.length; i++) {
        let player = players[i];
        //let playersText = "Name: " + player.playerName + "<br>"; etc..

        if (i == 0) { // Player One
            //Set text of player One label

            addPointsPlayerOneButton.parentElement.style.visibility = "visible";// Show add points button
        } else if (i == 1) {            
            //Set text of player One label

            addPointsPlayerTwoButton.parentElement.style.visibility = "visible";// Show add points button
        } else {
            return;
        }
    }
}

function resetGame() {
    // 🔴 Task 5: reset the game
    console.log("Resetting the game");

    // Hide add points buttons
    addPointsPlayerOneButton.parentElement.style.visibility = "hidden";
    addPointsPlayerTwoButton.parentElement.style.visibility = "hidden";
}

function addPointsPlayerOne() {
    // 🔴 Task 4a: add a point to score of player 1
    console.log("Adding a point to score of player 1");
}

function addPointsPlayerTwo() {
    // 🔴 Task 4b: add a point to score of player 2
    console.log("Adding a point to score of player 2");
}

// 🟡 Challenge! Combine the 2 'add points' functions above into 1 function. 
// This makes this piece of code DRY (Don't Repeat Yourself) and everybody happy!
// -----------------------------------



// 🔴 Task 1: complete the Class Player:
// This class contains a name (this is specified by the player),
// a symbol 'X" of 'O',
// a player number (1 of 2),
// a score starting with 0,
// and a function to increment the score by adding points.

class Player {
    // Don't forget the constructor method!

    //add points method comes here
}
// -----------------------------------
