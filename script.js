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

function playRound(humanChoice, computerChoice){
    if(humanChoice === "rock" && computerChoice === "paper"){
        console.log("You lose! Paper beats Rock.");
        return "lose";
    }
    else if(humanChoice === "rock" && computerChoice === "scissors"){
        console.log("You win! Rock beats Scissors.");
        return "win";
    }
    else if(humanChoice === "paper" && computerChoice === "rock"){
        console.log("You win! Paper beats Rock.");
        return "win";
    }
    else if(humanChoice === "paper" && computerChoice === "scissors"){
        console.log("You lose! Scissors beats Paper.");
        return "lose";
    }
    else if(humanChoice === "scissors" && computerChoice === "rock"){
        console.log("You lose! Rock beats Scissors.");
        return "lose";
    }
    else if(humanChoice === "scissors" && computerChoice === "paper"){
        console.log("You win! Scissors beats Paper.");
        return "win";
    }
    else{
        console.log("It is a Tie!");
    }
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    for(let i=0; i<5; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let result = playRound(humanChoice, computerChoice);
        if(result === "win"){
            humanScore++;
        }
        else if(result === "lose"){
            computerScore++;
        }
    }
    if(humanScore > computerScore){
        console.log("You Win! You: " + humanScore + " Computer: " + computerScore)
    }
    else if(humanScore < computerScore){
        console.log("You Lose! You: " + humanScore + " Computer: " + computerScore)
    }
    else{
        console.log("It is a Draw! You: " + humanScore + " Computer: " + computerScore)
    }
}

playGame();
