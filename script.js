var myChoice = ""
var computerChoice = ""
var message = ""
var myScore = 0;
var computerScore = 0;

function checkWinner() {
    if (myScore == 5) {
        document.getElementById("results").innerHTML = "You Win!"
        myScore = 0;
        computerScore = 0;
        
    }
    if (computerScore == 5) {
        document.getElementById("results").innerHTML = "Computer Wins!"
        myScore = 0;
        computerScore = 0;
        
    }
}
function resetscore() {
    if (myScore == 0) {
            document.getElementById("results").innerHTML = ""
        }
        if (computerScore == 0) {
            document.getElementById("results").innerHTML = ""
        }

    }

function scissors() {
    resetscore();
    myChoice = "scissors";
    opponentChoice();
    results()
    document.getElementById("message").innerHTML = "Computer Score: " + computerScore + "<br>You: " + myScore
    checkWinner()
}

function paper() {
    resetscore();
    myChoice = "paper";
    opponentChoice();
    results()
    document.getElementById("message").innerHTML = "Computer Score: " + computerScore + "<br>You: " + myScore;
    checkWinner()
}

function rock() {
    resetscore();
    myChoice = "rock";
    opponentChoice();
    results()
    document.getElementById("message").innerHTML = "Computer Score: " + computerScore + "<br>You: " + myScore;
    checkWinner()
}

function opponentChoice() {
    var randomNo = Math.floor(Math.random() * 3)
    if (randomNo == 0) {
        computerChoice = "scissors"
    }
    else if (randomNo == 1) {
        computerChoice = "paper"
    }
    else {
        computerChoice = "rock"
    }

    document.getElementById("chosen").innerHTML = "You chose: " +  myChoice + ", Computer chose: " + computerChoice;
}

function results() {
    if (myChoice == computerChoice) {

    }
    else if (myChoice == "scissors" && computerChoice == "paper") {
        myScore = myScore + 1;
    }
    else if (myChoice == "scissors" && computerChoice == "rock") {
        computerScore = computerScore + 1;
    }
    else if (myChoice == "paper" && computerChoice == "scissors") {
        computerScore = computerScore + 1;
    }
    else if (myChoice == "paper" && computerChoice == "rock") {
        myScore = myScore + 1;
    }
    else if (myChoice == "rock" && computerChoice == "scissors") {
        myScore = myScore + 1;
    }
    else if (myChoice == "rock" && computerChoice == "paper") {
        computerScore = computerScore + 1;
    }
}