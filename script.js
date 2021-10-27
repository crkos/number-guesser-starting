let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () =>{
    return Math.round((Math.random() * 9));

}

const compareGuesses = (currentHumanGuess, computerGuess, target) => {
    if (Math.abs(currentHumanGuess - target) < Math.abs(computerGuess - target)) {
        return true;
    } else if (Math.abs(computerGuess - target) < Math.abs(currentHumanGuess - target)) {
        return false;
    } else {
        return true;
    }
};
const updateScore = winner => {
    if(winner === 'human'){
        humanScore++;
    }
    else{
        computerScore++;
    }
}

const advanceRound = () => {
    currentRoundNumber++;
}


