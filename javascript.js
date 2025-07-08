
// Randomly generate computer's value for rock, paper, scissor
    // generate random number and convert it to 0, 1, or 2
    // use the index to select from a 

const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    let random = Math.floor(Math.random() *3 )
    return choices[random]
}

let comp_choice = getComputerChoice()

console.log(comp_choice)

