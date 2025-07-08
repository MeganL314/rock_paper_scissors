
// Randomly generate computer's value for rock, paper, scissor
    // generate random number and convert it to 0, 1, or 2
    // use the index to select from a 

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let random = Math.floor(Math.random() *3)
    return choices[random]
}
// Call function to assign the choice
let comp_choice = getComputerChoice()
console.log(comp_choice)

// Prompt method for user input
function getHumanChoice() {
    let user_choice = window.prompt("Rock, paper, or scissors?")
    return user_choice
}

// Variable keeps track of human score
let humanScore = 0

// Variable keep track of comp score
let computerScore = 0


// Function decides on a winner
    // If 
function playRound(humanChoice, computerChoice) {
    let human_lower = humanChoice.toLowerCase()
    if (human_lower === 'rock'){
        if (comp_choice === 'scissors'){
            humanScore += 1;
            console.log("You Win! Rock beats scissors.")
        }
        if (comp_choice === 'paper'){
            computerScore += 1;
            console.log("You Lose! Paper beats rock.")
        }
    }
    if (human_lower === 'paper'){
        if (comp_choice === 'scissors'){
            computerScore += 1;
            console.log("You Lose! Scissors beat paper.")
        }
        if (comp_choice === 'rock'){
            humanScore += 1;
            console.log("You Win! Paper beats rock.")
        }
    }
    if (human_lower === 'scissors'){
        if (comp_choice === 'rock'){
            computerScore += 1;
            console.log("You Lose! Rock beats scissors.")
        }
        if (comp_choice === 'paper'){
            humanScore += 1;
            console.log("You Win! Scissors beats paper.")
        }
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);












