let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if(computerChoice === 1){
        return console.log("rock");
    }
    else if(computerChoice === 2){
        return console.log("paper");
    }
    else{
        return console.log("scissors");
    }
}

function getHumanChoice(){
    let humanChoice = prompt("Choose Rock, Paper, or Scissors!");
    if(humanChoice === "Rock"){
        return console.log("rock");
    }
    else if(humanChoice === "Paper"){
        return console.log("paper");
    }
    else if (humanChoice === "Scissors"){
        return console.log("scissors");
    }
}

getHumanChoice();