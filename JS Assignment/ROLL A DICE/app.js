var random1;
var random2;
var player1;
var player2;
var player1name = prompt("Enter player 1 name").toUpperCase();
var player2name = prompt("Enter player 2 name").toUpperCase();
var currentTurn;
var gameOver = false;
var player1Input = prompt("Heads or Tails?").toLowerCase();
function headsOrTails() {
  if (player1Input === "tails") {
    player1 = "tails";
    player2 = "heads";
  } else if (player1Input === "heads") {
    player1 = "heads";
    player2 = "tails";
  }
  if (player1 === undefined && player2 === undefined) {
    alert("Invalid input");
    player1 = undefined;
    player2 = undefined;
    return;
  }
}
headsOrTails();

var tossButton = document.getElementById("tossbutton");
var showWinner = document.getElementById("heading");
showWinner.innerText = "Toss the coin "+player1name+"!"
function toss() {
  var toss1 = Math.floor(Math.random() * 2);
  if (toss1 === 0 && player1 !== undefined) {
    player1 = "Winner";
    showWinner.innerText = player1name + " won the toss";
    tossButton.setAttribute("disabled", "disabled");
    player2 = "lost";
    updateButtons();
  } else if (player2 !== undefined) {
    player1 = "lost";
    player2 = "Winner";
    tossButton.setAttribute("disabled", "disabled");
    showWinner.innerText = player2name + " won the toss";
    updateButtons();
  } else {
    player1Input = prompt(
      "PLEASE SELECT HEADS OR TAILS FIRST AFTER THAT YOU WILL BE ABLE TO CONTINUE THE GAME \n Heads or Tails?"
    ).toLowerCase();
    headsOrTails();
  }
}

var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
button1.innerText = player1name;
button2.innerText = player2name;
var rollDice1 = document.getElementById("rolldice1");
var rollDice2 = document.getElementById("rolldice2");
var playerTurnDisplay = document.getElementById("playerturn");

document.getElementById("playagain").disabled = true;
function updateButtons() {
  if (!gameOver) {
    if (currentTurn === "player1" || player1 === "Winner") {
      player1 = "";
      document.getElementById("button1").disabled = false;
      document.getElementById("button2").disabled = true;
      document.getElementById("rolldice1").disabled = false;
      document.getElementById("rolldice2").disabled = false;
      playerTurnDisplay.innerText = player1name + " turn";
    } else if (currentTurn === "player2" || player2 === "Winner") {
      player2 = "";
      document.getElementById("button2").disabled = false;
      document.getElementById("button1").disabled = true;
      document.getElementById("rolldice1").disabled = false;
      document.getElementById("rolldice2").disabled = false;
      document.getElementById("playagain").disabled = true;
      playerTurnDisplay.innerText = player2name + " turn";
    }
  } else {
    document.getElementById("playagain").disabled = false;
    playerTurnDisplay.setAttribute("id", "gameover");
    playerTurnDisplay.innerText = "Game Over";
    document.getElementById("button2").disabled = true;
    document.getElementById("button1").disabled = true;
  }
}

function playAgain() {
  gameOver = false;
  player1 = undefined;
  player2 = undefined;
  currentTurn = undefined;
  playerTurnDisplay.innerText = "";
  document.getElementById("heading").innerText = "Toss the coin!";
  currentTurn = "";
  document.getElementById("showwinner").innerText = "";
  tossButton.removeAttribute("disabled");
  document.getElementById("button1").disabled = true;
  document.getElementById("button2").disabled = true;
  document.getElementById("rolldice1").disabled = true;
  document.getElementById("rolldice2").disabled = true;
  rollDice1.innerText = "Roll the Dice";
  rollDice2.innerText = "Roll the Dice";

  player1Input = prompt("Heads or Tails?").toLowerCase();
  headsOrTails();
}

function endTurn() {
  if (currentTurn === "player1") {
    currentTurn = "player2";
    rollDice1 = document.getElementById("rolldice1");
    rollDice2 = document.getElementById("rolldice2");
  } else {
    currentTurn = "player1";
    rollDice1 = document.getElementById("rolldice1");
    rollDice2 = document.getElementById("rolldice2");
  }
  updateButtons();
}
function dice1() {
  random1 = Math.floor(Math.random() * 7);
  rollDice1.innerText = random1;
  return random1;
}

function dice2() {
  random2 = Math.floor(Math.random() * 7);
  rollDice2.innerText = random2;
  checkGameOver();
  endTurn();
  return random2;
}

function checkGameOver() {
  if (random1 === 6 && random2 === 6) {
    gameOver = true;
    document.getElementById("button2").disabled = true;
    document.getElementById("button1").disabled = true;
    document.getElementById("rolldice1").disabled = true;
    document.getElementById("rolldice2").disabled = true;
    console.log(currentTurn)
    if (currentTurn === "player1") {
      document.getElementById("showwinner").innerText = player1name+" win ";
      
    }
    else{
      document.getElementById("showwinner").innerText = player2name+" wins";
    }
    updateButtons();
  }
}