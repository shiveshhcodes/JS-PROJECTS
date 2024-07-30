let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice")
choices.forEach((choice) =>{
    console.log(choice)
    choice.addEventListener("click" , () => {
        const choiceID = choice.getAttribute("id");
    console.log(choiceID , "choice was clicked")
    })
}) 