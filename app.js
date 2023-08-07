const UserchoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
let resultDisplay = document.getElementById('result');

const possibleChoices = document.querySelectorAll('button');
let Userchoice;
let computerChoice;
let result;

possibleChoices.forEach(possiblechoice => possiblechoice.addEventListener('click',(e) => {
    Userchoice = e.target.id;
    UserchoiceDisplay.innerHTML = Userchoice;
    genrateCompterChoice();
    genrateResult();
}))

function genrateCompterChoice(){
    const randonNumber = Math.floor(Math.random()*3)+1;
    if(randonNumber === 1){
        computerChoice = "Rock";
    }
    else if(randonNumber === 2){
        computerChoice = "Paper";
    }
    else if(randonNumber === 3){
        computerChoice = "Scissors";
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function genrateResult(){
    if(computerChoice === Userchoice){
        result = "Draw";
    }
    if((computerChoice === "Paper")&&(Userchoice === "Scissors")){
        result = "You Won";
    }
    if((computerChoice === "Rock")&&(Userchoice === "Paper")){
        result = "You Won";
    }
    if((computerChoice === "Scissors")&&(Userchoice === "Rock")){
        result = "You Won";
    }
    if((computerChoice === "Scissors")&&(Userchoice === "Paper")){
        result = "You Lose"
    }
    if((computerChoice === "Rock")&&(Userchoice === "Scissors")){
        result = "You Lose"
    }
    if((computerChoice === "Paper")&&(Userchoice === "Rock")){
        result = "You Lose"
    }
    resultDisplay.innerHTML = result;
}
