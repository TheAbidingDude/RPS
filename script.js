/* // NOTHING HERE //
let playerScore = 0;
let computerScore = 0;
const turnP = playerChoice();
const turnC = computerChoice();
function playRound(playerChoice,computerChoice){
    
    prompt(playerChoice());
    let computerTurn = computerChoice();
    results(playerTurn,computerTurn);

}
//   prompts player for choice   //
function playerChoice (){
    let choice = prompt('Choose Rock, Paper, or Scissors.','')

    if (choice.toLowerCase() == "rock"){
        return "rock";
    }
    else if (choice.toLowerCase() == "scissors"){
        return "scissors";
    }
    else if (choice.toLowerCase() == "paper"){
        return "paper";
    }
    else (playerChoice());
}
//   randomly chooses for computer   //
function computerChoice (){
    let randoNum = Math.floor(Math.random()*3);
switch(randoNum){
    case 0: 
        return "rock";
    break;
    case 1:
        return "paper";
    break;
    case 2:
        return "scissors";
}
}
//  results function  //
function results(){
    if (playerChoice == "rock" && computerTurn =="scissors"){playerPoints.textContent = ++playerScore return "RS you win!";}
    else if (playerChoice == "rock" && computerTurn =="paper"){return "RS you lose!";}
    else if (playerChoice == "rock" && computerTurn =="rock"){return "RR Tie!";}
    
    if (playerChoice == "paper" && computerTurn =="rock"){playerPoints.textContent = ++playerScore return "PR you win!";}
    else if (playerChoice == "paper" && computerTurn =="scissors"){return "PR you lose!";}
    else if (playerChoice == "paper" && computerTurn =="paper"){return "PP Tie!";}
    
    if (playerChoice == "scissors" && computerTurn =="paper"){playerPoints.textContent = ++playerScore return "SP you win!";}
    else if (playerChoice == "scissors" && computerTurn =="scissors"){return "SS Tie!";}
    else if (playerChoice == "scissors" && computerTurn =="rock"){return "SR you lose!";}
        
}
*/



const buttons = document.querySelectorAll('div.buttons button');
const roundResults = document.querySelector('#roundResults');
const playerPoints = document.querySelector('#playerScore');
const computerPoints = document.querySelector('#computerScore');
const resetBtn = document.querySelector('#reset');

//refresh page for new game
resetBtn.addEventListener('click',() => location.reload());
  
buttons.forEach(button => { button.addEventListener('click', getPlayerChoice) });

let computerChoices = [{choice: 'Rock', value: 0}, {choice: 'Paper', value: 1}, {choice: 'Scissors', value: 2}];
let playerScore = 0;
let compScore = 0;
let playerChoice;

function computerPlay () {
  let result = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  return result;
}

function playRound (playerSelection, computerSelection) {
  let roundWinCombo = `${playerSelection}-${computerSelection.value}`;
  let playerWinCombo = ['1-0', '0-2', '2-1'];

    if (Number(playerSelection) === computerSelection.value) {
      roundResults.textContent = "Tie!"
    }else if (playerWinCombo.includes(roundWinCombo)) {
        playerPoints.textContent = ++playerScore
        roundResults.textContent = `You win! ${playerChoice} beats ${computerSelection.choice}`;
    }else {
        computerPoints.textContent = ++compScore
        roundResults.textContent = `You lose! ${computerSelection.choice} beats ${playerChoice}`;
    }
 checkWinner();
}

const winnerResults ={
  computer: ["You Lost the game to a computer!", 'red'],
  player: ["You Win the game!!!!", 'green'],
  tie: ["The game is a Tie!", 'blue']
}

function checkWinner() {
  if (compScore === 5 || playerScore === 5) {
    if (compScore === playerScore){
      updateWinner('tie')
    }else{
      let win = `${(compScore > playerScore) ? 'computer' : 'player'}`;
      updateWinner(win);
    }
  }
}

function updateWinner(winner){
  roundResults.textContent = winnerResults[winner][0];
  roundResults.style.color = winnerResults[winner][1];

  buttons.forEach(button => {
    button.removeEventListener('click', getPlayerChoice);
  });
}

function getPlayerChoice(e) {
  let playerSelection= (e.target.id);
  playerChoice = e.target.textContent;
  playRound(playerSelection, computerPlay());
}

