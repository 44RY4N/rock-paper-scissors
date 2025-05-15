

const btn = document.querySelector(".play-button");

const playText = document.querySelector(".play-text");
const rpsElement = Array.from(document.querySelectorAll(".rps img"));
const rps = document.querySelector(".rps");
let playerChoice = null;
let started = 0;
let selected = 0;
btn.addEventListener("click", function(e){
    btn.classList.add("running");
    playText.textContent = "...Choose Your Weapon!..."
    rps.classList.add("running");
    started = 1;
     if(started ==1 && selected ==1){
            playText.textContent ="..You Chose...";
            rps.classList.add("started");
                 setTimeout(() => {
  playText.textContent = "...Computer Chose...";
    setTimeout(()=>{
    letsRun(playerChoice);
  },3000);
 
}, 5000);

        }
})


for (let i =0; i< rpsElement.length; i++){
    rpsElement[i].addEventListener("click", function(e){

        if(started ==1 && selected ==1){  //do nothing when chosen
return;

        }

        if(e.target.classList.contains("selected")){
            e.target.classList.remove("selected");
           //deselect if already selected and show options
            selected = 0;
            rpsElement.forEach(element => {
                element.classList.remove("not"); // remove nots while deselecting
            });
           return;
        }
        else {
            rpsElement.forEach(element => {
                element.classList.remove("selected"); 
                element.classList.add("not"); //invis all and deselect rest
            });
        }
        e.target.classList.add("selected");
        playerChoice = e.target.alt;
        e.target.classList.remove("not");
        selected = 1;
         if(started ==1 && selected ==1){
            playText.textContent ="..You Chose...";
            rps.classList.add("started");
                 setTimeout(() => {
  playText.textContent = "...Computer Chose...";
  setTimeout(()=>{
    letsRun(playerChoice);
  },2000);
  
}, 5000);

        }
        
    });
}


function letsRun(player){
let comp = computerChoice();

let compCh = document.querySelector(`.title-container .${comp} .imgg`);
console.log("look here");
console.log(compCh);
compCh.classList.add("me");

console.log("player = "+player+"   comp = "+comp);
let result = letsPlay(player, comp);


if(result == "You win"){
    pScore++;
}
else if(result == "You lose"){
    cScore++;
}

console.log("player = "+player+"   comp = "+comp+"result = "+result);

setTimeout(() => {
    playText.textContent = result;
    document.querySelector(".value").textContent = `${pScore} : ${cScore}`;
    compCh.classList.remove("me");
    rps.classList.remove("started");
    rps.classList.remove("running");
    btn.classList.remove("running");
    selected =0;
    started = 0;
    rpsElement.forEach(element => {
        element.classList.remove("not");
        element.classList.remove("selected");
        element.removeEventListener("click",handler);
    })
    playerChoice = null;

},3700);


} 

const handler = () => {
  console.log("animation ended");
};








let pScore = 0;
let cScore = 0;
/*
for(let i = 0; i < 5; i++){
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

*/



/*
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
*/

function computerChoice(){

   let temp = Math.ceil(Math.random() * 3);
    if(temp==1){
        return "rock";
    }
    else if(temp==2){
        return "paper";
    }
    else{
        return "scissor";
    }
}

function letsPlay(playerChoice, compChoice){

    if(playerChoice == compChoice){
        return "Tie";
    }
    else if(playerChoice == "rock" && compChoice == "scissor"){
        return "You win";
    }
    else if(playerChoice == "paper" && compChoice == "rock"){
        return "You win";
    }
    else if(playerChoice == "scissor" && compChoice == "paper"){
        return "You win";
    }
    else{
        return "You lose";
    }
}

