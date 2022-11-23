const choices=["rock", "paper", "scissor"];
const maxRounds = 5;

game();

/**
 * Main Game - Based on Maxrounds, the game will be player, the end result is based on 
 * number of wins on rounds
 */
function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i=0;i<maxRounds;i++){       
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        let result = playRound(playerSelection,computerSelection);
        if (result==="win"){
            playerScore += 1;
        }
        else if (result ==="lose"){
            computerScore +=1;
        }
    }
    if (playerScore > computerScore){
        console.log("Player Wins the game")
    }
    else if (playerScore < computerScore){
        console.log("Computer Wins the game")
    }
    else{
        console.log("Game Draw")
    }
}

/**
 * Gets player choice by prompt, if typos are made, it will reask.
 * @returns Player Choice
 */
function getPlayerChoice(){
    let validChoice = false;
    let convertedPlayerChoice;
    while (!validChoice){
        let playerChoice = prompt("Enter Rock, Paper or Scissor")
        convertedPlayerChoice = playerChoice.toLowerCase();
        for (let i=0;i<choices.length;i++){
            if(convertedPlayerChoice === choices[i]){
                validChoice =true;
                break;
            }
        }
        if(!validChoice){
            alert("Enter valid item, check for typos")
        }
    }
    return convertedPlayerChoice
}    
    
/**
 * 
 * @returns Random Computer Choice for Rock paper and sissor
 */
function getComputerChoice(){
    let length = choices.length;
    randomChoice = Math.floor(Math.random()*length);
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
    console.log(playerSelection,computerSelection)
    if (playerSelection === "rock" && computerSelection === "paper"){
        console.log("You Lose, Paper beats Rock");
        return "lose" 
    }
    else if (playerSelection === "rock" && computerSelection === "scissor"){
        console.log("You Win, Rock beats Paper");
        return "win"
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        console.log("You Win, Paper beats Rock");
        return "win"
    }
    else if (playerSelection === "paper" && computerSelection === "scissor"){
        console.log("You Lose, Scissor beats Paper");
        return "lose"
    }
    else if (playerSelection === "scissor" && computerSelection === "paper"){
        console.log("You Win, Scissor beats Paper");
        return "win"
    }
    else if (playerSelection === "scissor" && computerSelection === "rock"){
        console.log("You Lose, Rock beats Scissor");
        return "lose"
    }
    else{
        console.log("Round Draw")
        return "draw"
    }
}