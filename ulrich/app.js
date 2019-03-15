var userScore = 0;
var comScore = 0;

var userScore_span = document.getElementById(".user-score");
var comScore_span = document.getElementById(".com-score");
var scoreBoard_div = document.querySelector(".score-board");
var result_p = document.querySelector(".result > p");

var rock_div = document.getElementById("r");
var paper_div = document.getElementById("p");
var scissors_div = document.getElementById("s");

function getComChoice() {
  const choices = ["r", "p", "s"];
  const randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
}

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

function win(userChoice, comChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  comScore_span.innerHTML = comScore;
  const smallUserWord = "user".fontsize(4).sub();
  const smallComWord = "com".fontsize(4).sub();
  result_p.innerHTML = `${convertToWord(
    userChoice
  )}${smallUserWord} beats ${convertToWord(
    comChoice
  )}${smallComWord}. You won!`;
}

function lose(userChoice, comChoice) {
  comScore++;
  userScore_span.innerHTML = userScore;
  comScore_span.innerHTML = comScore;
  const smallUserWord = "user".fontsize(4).sub();
  const smallComWord = "com".fontsize(4).sub();
  result_p.innerHTML = `${convertToWord(
    userChoice
  )}${smallUserWord} loses to ${convertToWord(
    comChoice
  )}${smallComWord}. You lost!`;
}

function draw(userChoice, comChoice) {
  userScore_span.innerHTML = userScore;
  comScore_span.innerHTML = comScore;
  result_p.innerHTML = `${convertToWord(
    userChoice
  )}${smallUserWord} beats ${convertToWord(
    comChoice
  )}${smallComWord}. It's a draw!`;
}

function game(userChoice) {
  console.log("er");
  const comChoice = getComChoice;
  switch (userChoice + comChoice) {
    case "rs":
    case "pr":
    case "sp":
      console.log("heelo");
      win(userChoice, comChoice);
      break;

    case "rp":
    case "ps":
    case "sr":
      console.log("heelo");
      lose(userChoice, comChoice);
      break;

    case "rr":
    case "pp":
    case "ss":
      console.log("heelo");
      draw(userChoice, comChoice);
      break;
  }
}
function main() {
  rock_div.addEventListener("click", function() {
    game("r");
  });

  paper_div.addEventListener("click", function() {
    game("p");
  });

  scissors_div.addEventListener("click", function() {
    game("s");
  });
}
main();
