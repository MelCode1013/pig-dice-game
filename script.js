'use strict';
//selecting player score elements
const score0El = document.querySelector('#score--0')
const score1El = document.querySelector('#score--1')
const diceEl = document.querySelector('.dice')
const randomDice = Math.trunc(Math.random() * 6) + 1
const newGameBtn = document.querySelector('.btn--new')
const rollDiceBtn = document.querySelector('.btn--roll')

//intialize game with zero 
score0El.textContent = 0
score1El.textContent = 0
//append hidden class to dice before game starts
diceEl.classList.add('hidden')

//event handler for clicking 'New Game' button
newGameBtn.addEventListener('click', () => {
    //intialize game with zero 
    score0El.textContent = 0
    score1El.textContent = 0
    //append hidden class to dice before game starts
    diceEl.classList.add('hidden')
})

//event handler for clicking 'Roll Dice' button
rollDiceBtn.addEventListener('click', () => {
    score0El.textContent = 'I work'
    score1El.textContent = 'I work too!'
})


/*TODO:
    -Logic for roll dice
        • Click roll dice - Dice appears with a random image of a dice between 1 and 6 (event handler)
        • Depending on which player is up, the score will ADD the number on the dice selected
        • You can click roll dice again for a new random score
        • IF dice rolled === 1, then the turn goes to player 2 and player 1 loses all points (score resets to 0)
        • IF hold button is pressed, score is added to CURRENT score for said player and then turn moves onto player 2
*/
