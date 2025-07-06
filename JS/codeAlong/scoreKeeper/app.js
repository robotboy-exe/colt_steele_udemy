const p1Display = document.querySelector('#p1Display')
const p2Display = document.querySelector('#p2Display')
const rounds = document.querySelector('#round')
const playerOne = document.querySelector('#playerOne')
const playerTwo = document.querySelector('#playerTwo')
const resetButton = document.querySelector('#reset')
let limit = parseInt(rounds.value)


function checkGameEnd () {
  const one = parseInt(p1Display.innerText)
  const two = parseInt(p2Display.innerText)
  if (one >= limit || two >= limit) {
    playerOne.disabled = true 
    playerTwo.disabled = true
    showWinner()
  }
}

function showWinner () {
  const one = parseInt(p1Display.innerText)
  const two = parseInt(p2Display.innerText)
  if (one > two) {
    p1Display.classList.add('winner')
    p2Display.classList.add('loser')
  } else {
    p1Display.classList.add('loser')
    p2Display.classList.add('winner')
  }
}

round.addEventListener('change', function (event) {
  limit = parseInt(event.target.value)
  checkGameEnd()
  reset()
})

playerOne.addEventListener('click', function () {
  let score = parseInt(p1Display.innerText)
  score += 1
  p1Display.innerText = score
  checkGameEnd()
})
playerTwo.addEventListener('click', function () {
  let score = parseInt(p2Display.innerText)
  score += 1
  p2Display.innerText = score
  checkGameEnd()
}) 

resetButton.addEventListener('click', reset)

function reset () {
  p1Display.innerText = 0
  p2Display.innerText = 0
  playerOne.disabled = false
  playerTwo.disabled = false
  p1Display.classList.remove('loser', 'winner')
  p2Display.classList.remove('winner', 'loser')
}