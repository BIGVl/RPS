
    let playerQuestion = prompt ("Choose between rock, paper and scissors!");
    let playerSelect = playerQuestion.toLowerCase();
    let rock = "";
    let paper ="";
    let scissors = "";
    let computerSelect = "";
    
   function playersChoice () {
  if (playerSelect === "rock") {
      console.log("You have choose Rock")
  }
  else if (playerSelect === "paper") {
    console.log("You have choose Paper")
  }
  else if (playerSelect === "scissors") {
    console.log("You have choose Scissors")
   }
}; 
console.log(playersChoice())

function computerPlay () {

    let computerPlay = Math.floor(Math.random()*3)+1;
if (computerPlay === 1) {
   rock = console.log("Computer has choose Rock");
}
else if (computerPlay === 2) {
   paper = console.log("Computer has choose Paper");
}
else if (computerPlay === 3) {
  scissors =  console.log("Computer has choose Scissors");
}
return computerPlay
}
computerSelect = computerPlay();

function playRound (playerSelect, computerSelect) {


    if (playerSelect === "rock" && computerSelect === scissors || playerSelect === "paper" && computerSelect === rock || 
    playerSelect === "scissors" && computerSelect === paper  ) {
    
       let playerWon = console.log("You have won this round!")
    }
    else if (playerSelect === "scissors" && computerSelect === rock || playerSelect === "rock" && computerSelect === paper || 
    playerSelect === "paper" && computerSelect === scissors) {
       let computerWon = console.log("You have lost this round!")
    }
    else if (playerSelect === "scissors" && computerSelect === scissors || playerSelect === "rock" && computerSelect === rock || 
    playerSelect === "paper" && computerSelect === paper) {
        let draw = console.log("It's a draw")
    }
    } 