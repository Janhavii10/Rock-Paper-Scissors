const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const playerScoreDisplay = document.getElementById('playerScoreDisplay');
const computerScoreDisplay = document.getElementById('computerScoreDisplay');

let playerScore = 0;
let computerScore = 0;

function startGame(playerChoice) {
    
    const computerChoice = choices[Math.floor(Math.random()*3)];
    console.log(computerChoice);

    let result = "";

    if (playerChoice === computerChoice){
        result = "IT'S A TIE!";
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add('greenText');
            resultDisplay.classList.remove('redText');
            playerScore++;
            playerScoreDisplay.textContent =`Player Score: ${playerScore}`;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            resultDisplay.classList.remove('greenText');
            computerScore++;
            computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
            break;
    }
}