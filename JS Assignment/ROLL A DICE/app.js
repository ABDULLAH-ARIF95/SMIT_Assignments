var player1;
var player2;
var currentTurn;
var gameOver = false
var player1Input = prompt("Heads or Tails?").toLowerCase();
function headsOrTails(){
    if (player1Input==="tails") {
        player1 = "tails";
        player2 = "heads"
    }
    else if (player1Input==="heads"){
        player1 = "heads"
        player2 = "tails"
    }
    if (player1===undefined && player2===undefined) {
        alert("Invalid input");
        player1 = undefined
        player2 = undefined
        return
    }
}
headsOrTails()

var tossButton = document.getElementById("tossbutton")
function toss() {
    var showWinner = document.getElementById("heading")
    var toss1 = Math.floor((Math.random()*2))
    if(toss1===0 && player1!==undefined){
        player1= "Winner"
        showWinner.innerText = "player1 won the toss"
        tossButton.setAttribute("disabled", "disabled")
        player2= "lost"
        updateButtons()
    }
    else if(player2!==undefined){
        player1= "lost"
        player2 = "Winner"
        tossButton.setAttribute("disabled", "disabled")
        showWinner.innerText = "player2 won the toss"
        updateButtons()
    }
    else{
        player1Input = prompt("PLEASE SELECT HEADS OR TAILS FIRST AFTER THAT YOU WILL BE ABLE TO CONTINUE THE GAME \n Heads or Tails?").toLowerCase();
        headsOrTails()
    } 
}

var rollDice1 = document.getElementById("rolldice1")
var rollDice2 = document.getElementById("rolldice2")
 var playerTurnDisplay=document.getElementById("playerturn")
 function updateButtons() {
    if(!gameOver){
     if (currentTurn==="player1" || player1==="Winner" ) {
        player1=""
         document.getElementById("button1").disabled=false
         document.getElementById("button2").disabled=true
         document.getElementById("rolldice1").disabled=false
         document.getElementById("rolldice2").disabled=false
        playerTurnDisplay.innerText="Player1 turn"
    }
    else if(currentTurn==="player2"||player2==="Winner"){
        player2=""
        document.getElementById("button2").disabled=false
        document.getElementById("button1").disabled=true
        document.getElementById("rolldice1").disabled=false
         document.getElementById("rolldice2").disabled=false
        playerTurnDisplay.innerText="Player2 turn"
    }
    }
    else{
        playerTurnDisplay.innerText="Game Over"
        playerTurnDisplay.setAttribute("id","gameover")
        document.getElementById("showwinner").innerText="you win"

        document.getElementById("button2").disabled=true
        document.getElementById("button1").disabled=true
    }
}

function endTurn() {
    if (currentTurn === "player1") {
        currentTurn = "player2";
         rollDice1 = document.getElementById("rolldice1")
         rollDice2 = document.getElementById("rolldice2")
        } else {
            currentTurn = "player1";
            rollDice1 = document.getElementById("rolldice1")
            rollDice2 = document.getElementById("rolldice2")
    }
    updateButtons();
}
var random1;
var random2;
function dice1(){
   random1 =  Math.floor(Math.random()*7)
   rollDice1.innerText = random1
    return random1
}

function dice2(){
    random2= Math.floor(Math.random()*7)
    rollDice2.innerText = random2
    checkGameOver()
    endTurn()
    return random2
}

function checkGameOver() {
        if (random1 ===6 && random2===6 ) {
            gameOver = true;
            document.getElementById("button2").disabled=true
            document.getElementById("button1").disabled=true
            document.getElementById("rolldice1").disabled=true
             document.getElementById("rolldice2").disabled=true
            updateButtons();
        }
    }