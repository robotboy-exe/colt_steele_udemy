// 1 = rock
// 2 = paper
// 3 = scissors
const rock = "rock"
const paper = "paper"
const scissors = "scissors"
  
playRPS = (myHand) => {
  const hands = ["rock", "paper", "scissors"]
  const parsed = String(myHand).toLowerCase()
  const aiHand = hands[Math.floor(Math.random()*3)]
  
  if (parsed === aiHand) {
    return "Darn it. Draw!"
  } else if (parsed === "rock" && aiHand === "scissors" || parsed === "paper" && aiHand === "rock" || parsed === "scissors" && aiHand === "paper") {
    return `You Win. Computer chose ${aiHand}`
  } else if (hands.includes(parsed)) {
    return `You lose. Computer chose ${aiHand}`
  } // only possible valid outcome remaining.
  else {
    return "Invalid input. Choose rock, paper or scissors"
  }
}
