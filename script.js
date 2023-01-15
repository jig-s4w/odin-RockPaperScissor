const choices=["rock", "paper", "scissor"];
const winPoint = 5;

// game();
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");

const resultText = document.querySelector("#results");
const myScore = document.querySelector("#myscore")
const comScore = document.querySelector("#comscore")
const selection = document.querySelector("#selection")

rock.addEventListener('click',game)
paper.addEventListener('click',game)
scissor.addEventListener('click',game)

let playerScore = 0;
let computerScore = 0;

function game(e){     
    let playerChoice = getPlayerChoice(e)  
    let computerChoice = getComputerChoice()
    playRound(playerChoice,computerChoice)
    updateScore(playerChoice,computerChoice)
    console.log("score",playerScore,computerScore)
}

function updateScore(playerChoice,computerChoice){
    selection.innerHTML = `You chose ${playerChoice} & Computer chose ${computerChoice} `
    myScore.innerHTML = playerScore;
    comScore.innerHTML = computerScore;
}

/**
 * Main Game - Based on Maxrounds, the game will be player, the end result is based on 
 * number of wins on rounds
 */
// function game(){
//     let playerScore = 0;
//     let computerScore = 0;
//     for (let i=0;i<i+1;i++){       
//         const playerSelection = getPlayerChoice();
//         const computerSelection = getComputerChoice();
//         let result = playRound(playerSelection,computerSelection);
//         if (result==="win"){
//             playerScore += 1;
//             if (playerScore === maxRounds){
//                 console.log("Player Wins the game");
//                 break;
//             }
//         }
//         else if (result ==="lose"){
//             computerScore +=1;
//             if (computerScore === maxRounds){
//                 console.log("Computer Wins the game");
//                 break;
//             }
//         }
//     }
   
// }

/**
 * Gets player choice by button click,
 * @returns Player Choice
 */
function getPlayerChoice(e){
    return e.target.id
}    
    
/**
 * 
 * @returns Random Computer Choice for Rock paper and sissor
 */
function getComputerChoice(){
    let length = choices.length;
    let randomChoice = Math.floor(Math.random()*length);
    return choices[randomChoice]
}

/**
 * 
 * @param {the player selection} playerSelection 
 * @param {computer selection} computerSelection 
 * Compares Player selection with computer and gives result
 * @returns result - win, lose or draw
 */

function playRound(playerSelection, computerSelection){
    // console.log(playerSelection,computerSelection)
    if (playerSelection === "rock" && computerSelection === "paper"){
        // console.log("You Lose, Paper beats Rock");
        computerScore +=1
        checkGameWin("You Lose, Paper beats Rock, Continue Playing")
        return "lose" 
    }
    else if (playerSelection === "rock" && computerSelection === "scissor"){
        // console.log("You Win, Rock beats Scissor");
        playerScore += 1
        checkGameWin("You Win, Rock beats Scissor, Continue Playing")
        return "win"
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        // console.log("You Win, Paper beats Rock");
        playerScore += 1
        checkGameWin("You Win, Paper beats Rock, Continue Playing")
        return "win"
    }
    else if (playerSelection === "paper" && computerSelection === "scissor"){
        // console.log("You Lose, Scissor beats Paper");
        computerScore +=1
        checkGameWin("You Lose, Scissor beats Paper, Continue Playing")
        return "lose"
    }
    else if (playerSelection === "scissor" && computerSelection === "paper"){
        // console.log("You Win, Scissor beats Paper");
        playerScore += 1
        checkGameWin("You Win, Scissor beats Paper, Continue Playing")
        return "win"
    }
    else if (playerSelection === "scissor" && computerSelection === "rock"){
        // console.log("You Lose, Rock beats Scissor");
        computerScore +=1
        checkGameWin("You Lose, Rock beats Scissor, Continue Playing")
        return "lose"
    }
    else{
        // console.log("Round Draw")
        checkGameWin("Round Draw, Continue Playing")
        return "draw"
    }
}

function checkGameWin(result){

    if (playerScore == 5) {
        // console.log("Player wins the Game, Click on any of the items below to start playing again")
        resultText.innerHTML = "Player wins the Game, Click on any of the items below to start playing again"
        playerScore = 0
        computerScore = 0
    }
    else if (computerScore ==5){
        // console.log("Computer wins the Game, Click on any of the items below to start playing again")
        resultText.innerHTML = "Computer wins the Game, Click on any of the items below to start playing again"
        playerScore = 0
        computerScore =0
    }
    else{
        // console.log(result,", Continue Playing")
        resultText.innerHTML = result
    }

}