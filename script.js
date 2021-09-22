
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


    if (playerSelect === "rock" && computerSelect === 3 || playerSelect === "paper" && computerSelect === 1 || 
    playerSelect === "scissors" && computerSelect === 2  ) {
    
       let playerWon = console.log("You have won this round!")
    }
    else if (playerSelect === "scissors" && computerSelect === 1 || playerSelect === "rock" && computerSelect === 2 || 
    playerSelect === "paper" && computerSelect === 3) {
       let computerWon = console.log("You have lost this round!")
    }
    else if (playerSelect === "scissors" && computerSelect === 3 || playerSelect === "rock" && computerSelect === 1 || 
    playerSelect === "paper" && computerSelect === 2) {
        let draw = console.log("It's a draw")
    }
    
    } 
    console.log(playRound(playerSelect,computerSelect));