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
const computerResult = document.querySelector('.result.computer')
const humanResult = document.querySelector('.result.human')
const buttons = document.querySelectorAll('.content button')
const finalResult = document.querySelector('#final-result')
const pageRoundResult = document.querySelector('#round-result')
const againButton = document.querySelector('.again')

let  playAndUpdateScore = function () {
    let playerSelection = this.id;
    const computerSelection = computerPlay();
    const roundResoult = playRound(computerSelection, playerSelection);
    pageRoundResult.textContent = roundResoult
    if (roundResoult.includes('You Win!')) {
        humanResult.textContent = +humanResult.textContent + 1;
        if (humanResult.textContent == 5) { finalResult.textContent = 'You Won! good game'
        finalResult.style.color = 'green';
        buttons.forEach((button) => {
            button.removeEventListener('click', playAndUpdateScore
        )
        })
        againButton.classList.remove('hidden')
    }
    }
    if (roundResoult.includes('You Lose!')) {
        computerResult.textContent = +computerResult.textContent + 1;
        if (computerResult.textContent == 5) { finalResult.textContent = 'You Lost! better luck next time'
        finalResult.style.color = 'red';
        buttons.forEach((button) => {
            button.removeEventListener('click', playAndUpdateScore
        )
        })
        againButton.classList.remove('hidden')
    }

    }
}
againButton.addEventListener('click', () => {
    againButton.classList.add('hidden')
    humanResult.textContent = 0
    computerResult.textContent = 0
    finalResult.textContent = ''
    pageRoundResult.textContent = ''
    startGame()
})
function startGame() {
   buttons.forEach((button) => {
    button.addEventListener('click', playAndUpdateScore
)
}) 
}
startGame()

function game(numberOfGames) {
    for (let i = 0; i < numberOfGames; i++) {
        function newLi() {
            return document.createElement("li");
            }

        const computerSelection = computerPlay()  
        let li = document.createElement('li');
        li.textContent = playRound(computerSelection, playerSelection) ;
        
        
    }
}
