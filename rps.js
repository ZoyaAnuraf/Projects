let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

let userScorePara=document.querySelector("#userScore");
let compScorePara=document.querySelector("#compScore");
 
const genComp =() =>{
    let options = ["rock" ,"paper" ,"scissor"];
    let idx = Math.floor(Math.random()*3);
    return options[idx];
}

const drawGame = () => {
    msg.innerText="DRAW PLAY AGAIN";
    msg.style.backgroundColor = "yellow";
    msg.style.color = "black";
}

const showWinner = (userWin) => {
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText="YOU WIN!";
        msg.style.backgroundColor = "green";
        msg.style.color = "white";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText="YOU LOSE!";
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
    }
}

const playGame = (userChoice) => {
    console.log("YOU =",userChoice);
    const compChoice=genComp();
    console.log("COMPUTER =",compChoice);

     if(userChoice===compChoice){
        drawGame();
     } else {
        let userWin = true;
        if(userChoice === "rock") {
            userWin = compChoice === "paper" ? false:true;
        } else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false:true;
        }else{
            userWin = compChoice === "rock" ? false:true; 
        }
        showWinner(userWin);
     }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
      let userChoice = choice.getAttribute("id");
      playGame(userChoice);
    })
})


