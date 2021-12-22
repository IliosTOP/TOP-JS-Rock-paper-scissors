const ulList = document.querySelector('#result')
function computerPlay() {
    let computerChoice
    let randomNumber = Math.floor(Math.random() * 3)
    if (randomNumber == 0) {
        computerChoice = 'Rock'
    }
    else if (randomNumber == 1) {
        computerChoice = 'Paper'
    }
    else { computerChoice = 'Scissors' }
    return computerChoice
}
function playRound(computerSelection, playerSelection) {
    let result;
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection == 'rock') {
        if (computerSelection == 'Rock') {
            result = "Draw! Rock ties with Rock"
        }
        else if (computerSelection == 'Paper') {
            result = "You Lose! Paper beats Rock"
        }
        else {
            result = "You Win! Rock beats Scissors"
        }

    }
    else if (playerSelection == 'paper') {
        if (computerSelection == 'Rock') {
            result = "You Win! Paper beats Rock"
        }
        else if (computerSelection == 'Paper') {
            result = "Draw! Paper ties with Paper"
        }
        else {
            result = "You Lose! Scissors beats Paper"
        }

    }
    else if (playerSelection == 'scissors') {
        if (computerSelection == 'Rock') {
            result = "You Lose! Rock beats Scissors"
        }
        else if (computerSelection == 'Paper') {
            result = "You Win! Scissors beats Paper"
        }
        else {
            result = "Draw! Scissors ties with Scissors"
        }

    }
    else { result = 'Something is wrong' }
    return result
}
const playerSelection = prompt('What is your choice?')
function game(numberOfGames) {
    for (let i = 0; i < numberOfGames; i++) {
        function newLi() {
            return document.createElement("li");
            }

        const computerSelection = computerPlay()  
        //content.textContent +=  playRound(computerSelection, playerSelection) ;
        let li = document.createElement('li');
        li.textContent = playRound(computerSelection, playerSelection) ;
        ulList.appendChild(li)
        
        
    }
}
game(5)