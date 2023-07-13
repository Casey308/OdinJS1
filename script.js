




console.log(game());

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i <5; i++){
        let playerSelection = prompt("Pick rock, paper, or scissors.");
        let computerSelection = getComputerChoice();
        let thisEnding = playRound(playerSelection,computerSelection);
        console.log(stringMaker(thisEnding,playerSelection,computerSelection))
        if(thisEnding == 1){
            playerScore++;
        }
        if(thisEnding == -1){
            computerScore++;
        }
        
    }

    let endResult = "";
    if(playerScore > computerScore){
        endResult = "You win!";        
    } else if(playerScore < computerScore){
        endResult = "You lose!";
    } else {
        endResult = "You tied!"
    }
    return endResult;
    
}


function playRound(playerSelection, computerSelection) {
    let stringResult = "";
    let ending;
    playerSelection = playerSelection.toLowerCase();
    switch(playerSelection){
        case "rock":
            switch(computerSelection){
                case "paper": 
                    ending = -1;
                    break;
                case "scissors": 
                    ending = 1;
                    break;
            }
            break;
        case "paper": 
            switch(computerSelection){
                case "rock":
                    ending = 1;
                    break;
                case "scissors": 
                    ending = -1;
                    break;
            }
            break;
        case "scissors": 
            switch(computerSelection){
                case "rock":
                    ending = -1;
                    break;
                case "paper": 
                    ending = 1;
                    break;
            }
            break;
    }
    if(playerSelection == computerSelection){
        ending = 0;
    }
    return ending;
}

function stringMaker(ending, playerSelection, computerSelection) {
    switch(ending){
        case -1:
            stringResult = "You lose! " + playerSelection + " loses to " + computerSelection;
            break;
        case 0: 
            stringResult = "It's a tie! " + playerSelection + " ties " + computerSelection;
            break;
        case 1: 
            stringResult = "You win! " + playerSelection + " beats " + computerSelection;
            break;
    }
    return stringResult;
}





function getComputerChoice() {
    let temp = Math.floor(Math.random()*3);
    let result;
    switch(temp){
        case 0:
            result = "rock";
            break;
        case 1: 
            result = "paper";
            break;
        case 2: 
            result = "scissors";
            break;
    }
    return result
}
