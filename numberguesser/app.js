/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify player correct answer if result is loss
- Let player choose a play again
*/

// Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI Elements
const gameWrapper = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
gameWrapper.addEventListener('mousedown', function(e) {
    if (e.target.className === 'play-again') {
        window.location.reload();
    }
} )

// Listen for guess
guessBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value);
    
    // Validate
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    // Check if won
    if (guess === winningNum) {
         // GAME OVER - WON
        gameOver(true, `${winningNum} is correct! YOU WIN!`);

    } else {
        // Wrong Number
        guessesLeft -= 1;

        if (guessesLeft === 0) {
            // GAME OVER - LOST
            gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);
        } else {
            // GAME CONTINUES - GUESS IS WRONG
            // Change border color
            guessInput.style.borderColor = 'red';

            // Clear Input
            guessInput.value = '';
            setMessage(`${guess} is not correct. ${guessesLeft} guesses left.`, 'red')
        }
    }
});

// Game over
function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';

    // Disable Input
    guessInput.disabled = true;

    // Change border color
    guessInput.style.borderColor = color;

    // Set text color
    message.style.color = color;

    // Set message
    setMessage(msg, color);

    // Play again?
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

// Get winning number
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Set Messafe
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}
