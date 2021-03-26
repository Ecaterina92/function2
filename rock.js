const getUserChoice = userInput => {
    
    if(userInput.toLowerCase() === 'rock') {
        return userInput;
    } else if(userInput.toLowerCase() === 'paper') {
        return userInput;
    } else if(userInput.toLowerCase() === 'scissors'){
        return userInput;
    } else return 'error';
    
}

console.log(getUserChoice('rock'));


let getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber === 0) {
        return 'rock';
    } else if(randomNumber === 1) {
        return 'paper';
    } else if(randomNumber === 2) {
        return 'scissors';
    }

}
console.log(getComputerChoice());

const determineWiner = (userChoice, computerChoice) => {
    if(userChoice === computerChoice) {
        return ('Tie game');
    }
    if(userChoice === 'rock') {
        return ('The user is the winner');
        if (computerChoice === 'paper'){
            return ('The computer is the winner');
        } else return ('The user won');
    
    } 
    if(userChoice === 'paper') {
        return ('The user is the winner');
        if(computerChoice === 'scissors'){
            return ('The computer is the winner');
        } else return ('The user won');
    
    } 
    if(userChoice === 'scissors') {
        return ('The user is the winner');
        if(computerChoice === 'rock'){
            return ('The computer is the winner');
        } else return ('The user won');
    
    } 
}
console.log(determineWiner('scissors', 'rock'));

let playgame = () => {
    let userChoice = getUserChoice('rock');
    let computerChoice = getComputerChoice('paper')
determineWiner('userChoice', 'computerChoice');
}
console.log('rock');
console.log('paper');
console.log(determineWiner('rock', 'paper'));
playgame()