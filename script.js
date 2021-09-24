
    let playerQuestion = prompt ("Choose between rock, paper and scissors!");
    let playerSelect = playerQuestion.toLowerCase();
    let computerSelect = "";
    let compScore = 0;
    let playerScore = 0;
    let addScore = "";
    
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
   console.log("Computer has choose Rock");
}
else if (computerPlay === 2) {
  console.log("Computer has choose Paper");
}
else if (computerPlay === 3) {
  console.log("Computer has choose Scissors");
}
return computerPlay
}
computerSelect = computerPlay();

function playRound (playerSelect, computerSelect) {


    if (playerSelect === "rock" && computerSelect === 3 || playerSelect === "paper" && computerSelect === 1 || 
    playerSelect === "scissors" && computerSelect === 2  ) {
    
      console.log("You have won this round!")
      addScore = 1;
    }
    else if (playerSelect === "scissors" && computerSelect === 1 || playerSelect === "rock" && computerSelect === 2 || 
    playerSelect === "paper" && computerSelect === 3) {
      console.log("You have lost this round!")
      addScore = 2;
    }
    else if (playerSelect === "scissors" && computerSelect === 3 || playerSelect === "rock" && computerSelect === 1 || 
    playerSelect === "paper" && computerSelect === 2) {
        console.log("It's a draw")
        addScore = 3 ; 
    }
    
    } 
    console.log(playRound(playerSelect,computerSelect));

    function game () {
      

        if (addScore == 1) {

          playerScore++;
            console.log("The score is "+ playerScore + " - " + compScore);
           
        }
        else if (addScore == 2) {
          compScore++;
          console.log("The score is "+ playerScore + " - " + compScore);
          
        }
        else if (addScore == 3) {
          console.log("The score is still "+ playerScore + " - " + compScore)
        }
       
        
    }
    console.log(game());