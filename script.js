document.getElementById('button').addEventListener('click', guessButton)

let age = 15 
let guess = 0

function guessButton () {
  var guess = prompt('Enter your guess here', 'ie. 37') 
  guess = parseInt(guess)
  age = parseInt(age)

  do {
    if (guess > age) {
      var guess = prompt('You guessed too big. Guess again') 
      guess = parseInt(guess)
    } else if (guess < age) {
      var guess = prompt('You guessed too small') 
      guess = parseInt(guess)
    } else if (guess === age) {
      document.getElementById('text').innerHTML = 'You got it right! Do you want to play again'
    }
  } while (guess !== age)
}
