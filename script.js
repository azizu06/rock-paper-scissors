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

const container = document.querySelector(".container")
const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");

rock.classList.add("playerButton");
paper.classList.add("playerButton");
scissors.classList.add("playerButton");
rock.innerText = "rock";
paper.innerText = "paper";
scissors.innerText = "scissors";

container.appendChild(rock);
container.appendChild(paper);
container.appendChild(scissors);

const buttons = document.querySelectorAll(".playerButton");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const playerSelection = button.innerText;
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection)
    })
})

const results = document.createElement("div");




