
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


const output = document.querySelector("#myOutput");
const content = document.createElement("div");
content.classList.add("content");

// Function decides on a winner
    // If statements based on rules of game
    // Increment scores by 1 point depending on winner
function playRound(humanChoice, computerChoice, humanScore, computerScore) {
    let human_lower = humanChoice.toLowerCase()

    if (human_lower === 'rock'){
        if (computerChoice === 'scissors'){
            humanScore += 1;
            content.textContent = "You Win! Rock beats scissors.";
        }
        else if (computerChoice === 'paper'){
            computerScore += 1;
            content.textContent = "You Lose! Paper beats rock.";
        }
    }
    else if (human_lower === 'paper'){
        if (computerChoice === 'scissors'){
            computerScore += 1;
            content.textContent = "You Lose! Scissors beat paper.";
        }
        else if (computerChoice === 'rock'){
            humanScore += 1;
            content.textContent = "You Win! Paper beats rock.";
        }
    }
    else if (human_lower === 'scissors'){
        if (computerChoice === 'rock'){
            computerScore += 1;
            content.textContent = "You Lose! Rock beats scissors.";
        }
        else if (computerChoice === 'paper'){
            humanScore += 1;
            content.textContent = "You Win! Scissors beats paper.";
        }
    }
    if (human_lower === computerChoice){
        content.textContent = "Tie!";
    }

    output.appendChild(content);
    return [humanScore, computerScore]
}





// event listener that call your playRound function with the 
// correct playerSelection every time a button is clicked
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");
let humanScore = 0;
let computerScore = 0;
let round = 1;

const score = document.createElement("div");
score.classList.add("content");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    console.log("Click at round", round);

    [humanScore, computerScore] = playRound(button.id, getComputerChoice(), humanScore, computerScore);
    score.innerHTML = `After round ${round}: <br>Human: ${humanScore} &nbsp; Computer: ${computerScore}`;
    output.appendChild(score);

    round = round + 1;


    if (round == 6){
        if(humanScore > computerScore){
            score.innerHTML = "The human wins! Click a button to restart game.";
            output.appendChild(score);
        }
        else if(computerScore > humanScore){
            score.innerHTML ="The computer wins! Click a button to restart game.";
            output.appendChild(score);
        }
        humanScore = 0;
        computerScore = 0;
        round = 1;
    }

  });
});


// playGame()







