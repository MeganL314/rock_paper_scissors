
// Randomly generate computer's value for rock, paper, scissor
    // generate random number and convert it to 0, 1, or 2
    // use the index to select from a 

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let random = Math.floor(Math.random() *3)
    return choices[random]
}

// Prompt method for user input
function getHumanChoice() {
    let user_choice = window.prompt("Rock, paper, or scissors?")
    return user_choice
}


// Function decides on a winner
    // If statements based on rules of game
    // Increment scores by 1 point depending on winner
function playRound(humanChoice, computerChoice, humanScore, computerScore) {
    let human_lower = humanChoice.toLowerCase()
    if (human_lower === 'rock'){
        if (computerChoice === 'scissors'){
            humanScore += 1;
            console.log("You Win! Rock beats scissors.")
        }
        else if (computerChoice === 'paper'){
            computerScore += 1;
            console.log("You Lose! Paper beats rock.")
        }
    }
    else if (human_lower === 'paper'){
        if (computerChoice === 'scissors'){
            computerScore += 1;
            console.log("You Lose! Scissors beat paper.")
        }
        else if (computerChoice === 'rock'){
            humanScore += 1;
            console.log("You Win! Paper beats rock.")
        }
    }
    else if (human_lower === 'scissors'){
        if (computerChoice === 'rock'){
            computerScore += 1;
            console.log("You Lose! Rock beats scissors.")
        }
        else if (computerChoice === 'paper'){
            humanScore += 1;
            console.log("You Win! Scissors beats paper.")
        }
    }
    console.log("After round, Human score: " + humanScore + " Comp: " + computerScore)
    return [humanScore, computerScore]
}



function playGame(){
    // Variable keeps track of human score
    let humanScore = 0

    // Variable keep track of comp score
    let computerScore = 0

    let i = 0;
    while(i < 5){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        [humanScore, computerScore] = playRound(humanSelection, computerSelection, humanScore, computerScore);
        i += 1
    }
    if(humanScore > computerScore){
        console.log("The human wins!")  
    }
    else if(computerScore > humanScore){
        console.log("The computer wins!")
    }

}

playGame()







