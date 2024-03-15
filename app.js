let userScore = 0;
let compScore = 0;

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const GenerateComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

const showWinner = (userWin,userchoice,CompChoice) => {
    const msg = document.querySelector("#msg");
    if (userWin) {
        userScore++;
        userScorePara.innerText=userScore;
        console.log("You Win");
        msg.innerText = `You win!.Your ${userchoice} beats  computer's ${CompChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText=compScore;
        console.log("You Lose");
        msg.innerText = `You lost!.Computer's ${CompChoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}

const drawGame = () => {
    console.log("Game Was a Draw");
    const msg = document.querySelector("#msg");
    msg.innerText = "Game Was Draw, Try Again";
    msg.style.backgroundColor = "#081b31";
}

const playGame = (userchoice) => {
    console.log("User Choice =", userchoice);
    const msg = document.querySelector("#msg");
    msg.style.backgroundColor = "transparent"; // Reset background color
    // Generate Computer Choice->Modular Programming
    const CompChoice = GenerateComputerChoice();
    console.log("Computer Choice =", CompChoice);

    if (userchoice === CompChoice) {
        // Draw game
        drawGame();
    } else {
        let userWin = true;
        if (userchoice === "rock") {
            // scissors, paper
            userWin = CompChoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            // rock, scissors
            userWin = CompChoice === "scissors" ? false : true;
        } else {
            // rock, paper
            userWin = CompChoice === "rock" ? false : true;
        }
        showWinner(userWin,userchoice,CompChoice);
    }
};

const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});
