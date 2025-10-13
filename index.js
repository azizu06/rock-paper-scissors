let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let computerPick = Math.floor(Math.random() * 3) + 1;
    if(computerPick === 1){
        return "rock";
    }
    else if(computerPick === 2){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function getHumanChoice(){
    let humanPick = prompt("Choose Rock, Paper, or Scissors!");
    humanPick = humanPick.toLowerCase();
    if(humanPick === "rock"){
        return "rock";
    }
    else if(humanPick === "paper"){
        return "paper";
    }
    else if (humanPick === "scissors"){
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    if(humanChoice === "rock" && computerChoice === "paper"){
        console.log("You lose! Paper beats Rock.");
        computerScore++;
    }
    else if(humanChoice === "rock" && computerChoice === "scissors"){
        console.log("You win! Rock beats Scissors.");
        humanScore++;
    }
    else if(humanChoice === "paper" && computerChoice === "rock"){
        console.log("You win! Paper beats Rock.");
        humanScore++;
    }
    else if(humanChoice === "paper" && computerChoice === "scissors"){
        console.log("You lose! Scissors beats Paper.");
        computerScore++;
    }
    else if(humanChoice === "scissors" && computerChoice === "rock"){
        console.log("You lose! Rock beats Scissors.");
        computerScore++;
    }
    else if(humanChoice === "scissors" && computerChoice === "paper"){
        console.log("You win! Scissors beats Paper.");
        humanScore++;
    }
    else{
        console.log("It is a Tie!");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
