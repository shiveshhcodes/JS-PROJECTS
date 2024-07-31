let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice")
const msgg = document.querySelector("#msgg");
const genCompChoice = () =>{
    const options = ["rock" , "paper" , "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
    // rock-paper-scissor
}

const drawGame = () =>{
    console.log("game was draw.");
    msgg.innerText = "Game was Draw!! Play Again"
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        console.log("You Win!!");
        msgg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    } else {
        console.log("You Lose!!");
        msgg.innerText = `You Lose!! ${compChoice} beats ${userChoice}`;
    }
};


const playGame = (userChoice) =>{
    console.log("user Choice = " , userChoice);
    const compChoice = genCompChoice();
    console.log("computer choice = ", compChoice)

    if (userChoice===compChoice){
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            // paper - scissor
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper") {
            // rock , scissor
            userWin = compChoice === "scissiors" ? false : true;
        }
        else{
            compChoice === "rock" ? false : true ;
        }
        showWinner(userWin);
    }
};
choices.forEach((choice) =>{
    console.log(choice)
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id");
    // console.log(userChoice, "choice was clicked")l
    playGame(userChoice)
    })
}) 

