document.getElementById('button').addEventListener('click', guessButton)

let age = 15

function guessButton () {
  let guess = prompt('Enter your guess here', 'ie. 37') 
  guess = parseInt(guess)
  age = parseInt(age)

  do {
    if (guess > age) {
      guess = prompt ('You guessed too big. Guess again.')
    } else if (guess < age) {
      guess = prompt('You guessed too small. Guess again.') 
    } else if (guess === age) {
      document.getElementById('text').innerHTML = 'You got it right! Do you want to play again'
    }
  } while (guess !== age)
}
