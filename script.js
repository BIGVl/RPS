let compScore = 0;
let playerScore = 0;
let playerSelect = 0;


const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const buttons = document.querySelector('.buttons');
const score = document.querySelector('.score');





rock.addEventListener('click',e =>{
 return playerSelect = 1;
  
});
paper.addEventListener('click',e =>{
 return playerSelect = 2;
  
});
scissors.addEventListener('click',e =>{
  return playerSelect = 3;
  
});

  //random computer choice 
  function computerPlay () {
  
    let result;
    let random = Math.floor(Math.random() * 3) + 1;
  
    if (random === 1) {
      result = 1;
    } else if (random === 2) {
      result = 2;
    } else if (random === 3) {
      result = 3;
    } else {
      return "error";
    }
    return result;
  };
 


buttons.addEventListener('click', e => {
  playRound(playerSelect,computerPlay());
});



// actually plays the rounds and adds a point to the winner or no points if tie
function playRound (playerSelect, computerSelect) {
      if (playerSelect === 1 && computerSelect === 3 || playerSelect === 2 && computerSelect === 1 || 
      playerSelect === 3 && computerSelect === 2  ) {
      
        score.textContent= ("You have won this round!")
        playerScore++;
        score.textContent= ("The score is "+ playerScore + " - " + compScore);
      }
      else if (playerSelect === 3 && computerSelect === 1 || playerSelect === 1 && computerSelect === 2 || 
      playerSelect === 2 && computerSelect === 3) {
        score.textContent= ("You have lost this round!")
        compScore++;
        score.textContent= ("The score is "+ playerScore + " - " + compScore);
      }
      else if (playerSelect === 3 && computerSelect === 3 || playerSelect === 1 && computerSelect === 1 || 
      playerSelect === 2 && computerSelect === 2) {
          score.textContent= ("It's a draw")
          score.textContent= ("The score is "+ playerScore + " - " + compScore);
      }
      if (playerScore===5 || compScore===5) {
        game();
        playerScore = 0;
        compScore = 0;
      }
};

      // declares the winner
function game () {


    if (playerScore < compScore) {
      return score.textContent= ("You have lost the game! Try again, I know you can do it!")
    }
       else if (playerScore > compScore) {
         return score.textContent= ("You have  won the game! Congratulations!")
       }
        else if (playerScore === compScore) {
          return score.textContent= ("It's a tie! What a battle!!")
        }
    }
  
  


  


