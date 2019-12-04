let playerOneScore = 0;
let playerTwoScore = 0;

const diceImage = document.getElementById("diceImage")
const playerOneRoll = document.querySelector(".playerOne");
const playerTwoRoll = document.querySelector(".playerTwo");
const newGame = document.querySelector(".newGame")
const restart = document.querySelector(".restart")
// const playerTurns = playerTurnsFunction(1++);              // for later 
playerOneRoll.style.visibility = 'hidden';
playerTwoRoll.style.visibility = 'hidden';
restart.style.visibility = 'hidden';

newGameFunction = () => {
    newGame.style.visibility = 'hidden';
    playerOneRoll.style.visibility = 'visible';
    playerTwoRoll.style.visibility = 'visible';
    restart.style.visibility = 'hidden';
}

newGame.addEventListener("click", () => {
    newGameFunction();
})

restart.addEventListener("click", () => {
    newGameFunction();
})


playerOneRoll.addEventListener("click", () => {
    togglePlayerOne()
    let randomRoll = Math.floor(Math.random() * 6) + 1;
    console.log(randomRoll)
    diceImage.src = `img/dice${randomRoll}.png`;
    if (randomRoll != 1) {
        playerOneScore += randomRoll
        console.log(`Player One Score is: ${playerOneScore}`)
        document.querySelector(".playerScoreOne").textContent = `Player One's score : ${playerOneScore}`
        hasPlayerOneWon()
    }
    else {
        playerOneScore = 0
        playerTwoScore = 0
        console.log("Oops you rolled a One, Player 2 Wins")
        document.querySelector(".playerScoreOne").textContent = `Oops you rolled a 1 , Player Two wins`
        playerTwoRoll.style.visibility = 'hidden'
        playerOneRoll.style.visibility = 'hidden'
        restart.style.visibility = 'visible';
    }
})

playerTwoRoll.addEventListener("click", () => {
    togglePlayerTwo()
    let randomRoll = Math.floor(Math.random() * 6) + 1;
    console.log(randomRoll)
    diceImage.src = `img/dice${randomRoll}.png`;
    if (randomRoll != 1) {
        playerTwoScore += randomRoll
        console.log(`Player Two Score is: ${playerTwoScore}`)
        document.querySelector(".playerScoreTwo").textContent = `Player Two's score : ${playerTwoScore}`
        hasPlyerTwoWon()
    }
    else {
        playerOneScore = 0
        playerTwoScore = 0
        console.log("Oops you rolled a One, Player 1 Wins")
        document.querySelector(".playerScoreTwo").textContent = `Oops you rolled a 1 , Player One Wins`
        playerTwoRoll.style.visibility = 'hidden'
        playerOneRoll.style.visibility = 'hidden'
        restart.style.visibility = 'visible';
    }
})

const hasPlayerOneWon = () => {
    if (playerOneScore > 20) {
        console.log("Player One is the Winner")
        document.querySelector(".playerScoreOne").textContent = `Player One Wins! ${playerOneScore}`
        playerOneScore = 0
        playerTwoScore = 0
        restart.style.visibility = 'visible';
        playerTwoRoll.style.visibility = 'hidden'

    }
}

const hasPlyerTwoWon = () => {
    if (playerTwoScore > 20) {
        console.log("Player Two is the Winner")
        document.querySelector(".playerScoreTwo").textContent = `Player Two Wins! : ${playerTwoScore}`
        playerOneScore = 0
        playerTwoScore = 0
        restart.style.visibility = 'visible';
        playerOneRoll.style.visibility = 'hidden'
    }

}

// what is the toggle trying to achieve?
const togglePlayerOne = () => {
    let playerOne = (playerOneRoll.style.visibility = 'visible')
    if (playerOne == (playerOneRoll.style.visibility = 'visible')) {
        playerOneRoll.style.visibility = 'hidden'
        playerTwoRoll.style.visibility = 'Visible'
    }
    else {
        playerOneRoll.style.visibility = 'visible'
        playerTwoRoll.style.visibility = 'hidden'
    }
}


const togglePlayerTwo = () => {
    let playerOne = (playerTwoRoll.style.visibility = 'visible')
    if (playerOne == (playerTwoRoll.style.visibility = 'visible')) {
        playerTwoRoll.style.visibility = 'hidden'
        playerOneRoll.style.visibility = 'Visible'
    }
    else {
        playerTwoRoll.style.visibility = 'visible'
        playerOneRoll.style.visibility = 'hidden'
    }
}

// shift, option f