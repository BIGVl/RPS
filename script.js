let playerQuestion = "";
let playerSelect = "";
let computerSelect = "";
let compScore = 0;
let playerScore = 0;

function playRound (playerSelect, computerSelect) {
    playerQuestion = prompt ("Choose between rock, paper and scissors!");
    playerSelect = playerQuestion.toLowerCase();
  
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
  
    
  
      if (playerSelect === "rock" && computerSelect === 3 || playerSelect === "paper" && computerSelect === 1 || 
      playerSelect === "scissors" && computerSelect === 2  ) {
      
        console.log("You have won this round!")
        playerScore++;
        return  console.log("The score is "+ playerScore + " - " + compScore);
      }
      else if (playerSelect === "scissors" && computerSelect === 1 || playerSelect === "rock" && computerSelect === 2 || 
      playerSelect === "paper" && computerSelect === 3) {
        console.log("You have lost this round!")
        compScore++;
        return  console.log("The score is "+ playerScore + " - " + compScore);
      }
      else if (playerSelect === "scissors" && computerSelect === 3 || playerSelect === "rock" && computerSelect === 1 || 
      playerSelect === "paper" && computerSelect === 2) {
          console.log("It's a draw")
          return  console.log("The score is "+ playerScore + " - " + compScore);
      }
    
    
      };

function game () {
 


    playRound(playerSelect,computerSelect);
    playRound(playerSelect,computerSelect);
    playRound(playerSelect,computerSelect);
    playRound(playerSelect,computerSelect);
    playRound(playerSelect,computerSelect);

    if (playerScore < compScore) {
      return console.log("You have lost the game! Try again, I know you can do it!")
    }
       else if (playerScore > compScore) {
         return console.log("You have  won the game! Congratulations!")
       }
        else if (playerScore === compScore) {
          return console.log("It's a tie! What a battle!!")
        }
    }
    game();
  


  


