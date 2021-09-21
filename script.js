function computerPlay () {

    let randomInt = Math.floor(Math.random()*3)+1;
if (randomInt === 1) {
     console.log("Computer has choose Rock")
}
else if (randomInt === 2) {
     console.log("Computer has choose Paper")
}
else if (randomInt=== 3) {
    console.log("Computer has choose Scissors")
}
}

let playerQuestion = prompt ("Choose between rock, paper and scissors!");
let playerSelect = playerQuestion.toLowerCase();
let computerSelection = computerPlay();

