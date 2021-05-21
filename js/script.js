// Constants
const addPlayerButton = document.querySelector('.add-player-button');
const deletePlayerButton = document.querySelector('.delete-player-button');

// Variables
let players = [];
let playersLabel = document.querySelector('.players-label');

// Event listeners
if (addPlayerButton) {
	addPlayerButton.addEventListener("click", addPlayer);
}

if (deletePlayerButton) {
	deletePlayerButton.addEventListener("click", deletePlayer);
}

// Functions
function addPlayer() {
    let playerName = document.querySelector('.input-field-player-name').value;
    let playerSymbol = document.querySelector('.input-field-player-symbol').value;
    let playerPoints = document.querySelector('.input-field-player-points').value;

    console.log("Adding playerName: " + playerName);
    console.log("Adding playerSymbol: " + playerSymbol);
    console.log("Adding playerPoints: " + playerPoints);

    let player = {
        name: playerName,
        symbol: playerSymbol,
        points: playerPoints,
    };

    players.push(player);

    printPlayers();
}

function deletePlayer() {
    console.log("Deleting last player");
    players.pop();

    printPlayers();
}

function printPlayers() {
    console.log("Players array containts " + players.length + " players");

    var playersText = "";

    for(let i = 0; i < players.length; i++) {
        playersText += "◘◘◘◘◘◘◘◘◘ " + "Player " + (i + 1) + " ◘◘◘◘◘◘◘◘◘" + "<br>";
        playersText += "Name: " + players[i].name + "<br>";
        playersText += "Symbol: " + players[i].symbol + "<br>";
        playersText += "Points: " + players[i].points + "<br>";
    }
    playersLabel.innerHTML = playersText;
}
=======
// Constants
const addPlayerButton = document.querySelector('.add-player-button');
const deletePlayerButton = document.querySelector('.delete-player-button');

// Variables
let players = [];
let playersLabel = document.querySelector('.players-label');

// Event listeners
if (addPlayerButton) {
	addPlayerButton.addEventListener("click", addPlayer);
}

if (deletePlayerButton) {
	deletePlayerButton.addEventListener("click", deletePlayer);
}

// Functions
function addPlayer() {
    let playerName = document.querySelector('.input-field-player-name').value;
    let playerSymbol = document.querySelector('.input-field-player-symbol').value;
    let playerPoints = document.querySelector('.input-field-player-points').value;

    console.log("Adding playerName: " + playerName);
    console.log("Adding playerSymbol: " + playerSymbol);
    console.log("Adding playerPoints: " + playerPoints);

    let player = {
        name: playerName,
        symbol: playerSymbol,
        points: playerPoints,
    };

    players.push(player);

    printPlayers();
}

function deletePlayer() {
    console.log("Deleting last player");
    players.pop();

    printPlayers();
}

function printPlayers() {
    console.log("Players array containts " + players.length + " players");

    var playersText = "";

    for(let i = 0; i < players.length; i++) {
        playersText += "◘◘◘◘◘◘◘◘◘ " + "Player " + (i + 1) + " ◘◘◘◘◘◘◘◘◘" + "<br>";
        playersText += "Name: " + players[i].name + "<br>";
        playersText += "Symbol: " + players[i].symbol + "<br>";
        playersText += "Points: " + players[i].points + "<br>";
    }
    playersLabel.innerHTML = playersText;
}