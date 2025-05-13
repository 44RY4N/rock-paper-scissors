console.log("Hello World");
console.log("lets play five rounds of life and death ");

let pScore = 0;
let cScore = 0;

for(let i = 0; i < 5; i++){
    playerChoice = prompt("Do you choose rock, paper, or scissors?");
    compChoice = computerChoice();
    playerChoice = checkAndReturn(playerChoice);
    alert(`comp choice is ${compChoice}`);
    let result = letsPlay(playerChoice, compChoice);
    console.log(result);

    if(result == "You win"){
        pScore++;
    }
    else if(result == "You lose"){
        cScore++;
    }
    alert(`Round ${i+1}  current score ${pScore} : ${cScore}`);
}
console.log(`final score ${pScore} : ${cScore}`);
alert(`winner is ${pScore > cScore ? "You" : "Computer"}`);
if(confirm("Do you want to play again?")){
    location.reload();
}



function checkAndReturn(playerChoice){
    if(playerChoice != null){
         playerChoice = playerChoice.toLowerCase();
    }
   
    if (playerChoice == "rock"||playerChoice == "paper"||playerChoice == "scissors"){
        return playerChoice;
    }
    else {
    alert("please enter a valid choice")
    return checkAndReturn(prompt("Do you choose rock, paper, or scissors?"));
  }
}


function computerChoice(){

   let temp = Math.ceil(Math.random() * 3);
    if(temp==1){
        return "rock";
    }
    else if(temp==2){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function letsPlay(playerChoice, compChoice){

    if(playerChoice == compChoice){
        return "Tie";
    }
    else if(playerChoice == "rock" && compChoice == "scissors"){
        return "You win";
    }
    else if(playerChoice == "paper" && compChoice == "rock"){
        return "You win";
    }
    else if(playerChoice == "scissors" && compChoice == "paper"){
        return "You win";
    }
    else{
        return "You lose";
    }
}

