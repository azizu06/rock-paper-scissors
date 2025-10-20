function getComputerChoice(){
    let computerPick = Math.floor(Math.random() * 3) + 1;
    if(computerPick === 1){
        computerImage.src = "./images/rock.jpeg";
        return "rock";
    }
    else if(computerPick === 2){
        computerImage.src = "./images/paper.jpeg";
        return "paper";
    }
    else{
        computerImage.src = "./images/scissor.jpeg";
        return "scissors";
    }
}

function playerImage(playerSelection){
    if(playerSelection === "rock"){
        humanImage.src = "./images/rock.jpeg";
    }
    else if(playerSelection === "paper"){
        humanImage.src = "./images/paper.jpeg";
    }
    else if(playerSelection === "scissors"){
        humanImage.src = "./images/scissor.jpeg";
    }
}

function winnerCheck(humanScore, computerScore){
    if(humanScore === 5){
        output.innerText = `You won the game! You: ${humanScore} CPU: ${computerScore}`;
        gameOver = true
        return gameOver;
    }
    else if(computerScore === 5){
        output.innerText = `You lost the game! You: ${humanScore} CPU: ${computerScore}`;
        gameOver = true 
        return gameOver;
    }
}


function playRound(humanChoice, computerChoice){
    if(humanChoice === "rock" && computerChoice === "paper"){
        computerScore += 1;
        output.innerText = `You lose! You: ${humanScore} CPU: ${computerScore}`;         
    }
    else if(humanChoice === "rock" && computerChoice === "scissors"){
        humanScore += 1;
        output.innerText = `You win! You: ${humanScore} CPU: ${computerScore}`;   
    }
    else if(humanChoice === "paper" && computerChoice === "rock"){
        humanScore += 1;
        output.innerText = `You win! You: ${humanScore} CPU: ${computerScore}`;   
    }
    else if(humanChoice === "paper" && computerChoice === "scissors"){
        computerScore += 1;
        output.innerText = `You lose! You: ${humanScore} CPU: ${computerScore}`;   
    }
    else if(humanChoice === "scissors" && computerChoice === "rock"){
        computerScore += 1;
        output.innerText = `You lose! You: ${humanScore} CPU: ${computerScore}`;   
    }
    else if(humanChoice === "scissors" && computerChoice === "paper"){
        humanScore += 1;
        output.innerText = `You win! You: ${humanScore} CPU: ${computerScore}`;   
    }
    else{
        output.innerText = `It's a Tie! You: ${humanScore} CPU: ${computerScore}`;   
    }
    winnerCheck(humanScore, computerScore);
}


let humanScore = 0;
let computerScore = 0;
let gameOver = false;

const humanContainer = document.querySelector(".human-container");
const computerContainer = document.querySelector(".computer-container")
const mainContainer = document.querySelector(".main-container");
const output = document.createElement("div");
const playerButtons = document.createElement("div");
const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");
const humanImage = document.createElement("img");
const computerImage = document.createElement("img");
const humanScores = document.createElement("p");
const computerScores = document.createElement("p");

rock.classList.add("playerButton");
paper.classList.add("playerButton");
scissors.classList.add("playerButton");
humanImage.classList.add("humanImage");
computerImage.classList.add("computerImage");
playerButtons.classList.add("playerButtons")
output.classList.add("results");
output.innerText = "Select an option to begin the game."
rock.innerText = "rock";
paper.innerText = "paper";
scissors.innerText = "scissors";


humanContainer.appendChild(humanImage);
humanContainer.appendChild(playerButtons);
computerContainer.appendChild(computerImage);
playerButtons.appendChild(rock);
playerButtons.appendChild(paper);
playerButtons.appendChild(scissors);
mainContainer.appendChild(output);


const buttons = document.querySelectorAll(".playerButton");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        if(!gameOver){
            const playerSelection = button.innerText;
            playerImage(playerSelection);
            const computerSelection = getComputerChoice();
            playRound(playerSelection, computerSelection);
        }
    });
})





