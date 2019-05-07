var playerArray = [];

// Define a player object
function player(name, score) {
  this.name = name;
  this.score = score;
}

function addPlayer() {
  var nameInput = document.getElementById("txtName").value;
  var scoreInput = Number(document.getElementById("txtScore").value);
  if (nameInput !== "" && !isNaN(scoreInput)) {
    playerArray.push(new player(nameInput, scoreInput));
    //Clear the input field
    document.getElementById("txtName").value = "";
    document.getElementById("txtScore").value = "";
  } else {
    document.getElementById("pOutput").innerHTML =
      "Error: Enter a proper name and score!";
    //Clear the input field
    document.getElementById("txtName").value = "";
    document.getElementById("txtScore").value = "";
  }
}
// List players-------------------------------------------------------------------
function listPlayers() {
  // ----------------------------------------------------------------------------
  var outputtext = "";
  if (playerArray.length !== 0) {
    for (var i = 0; i < playerArray.length; i++) {
      outputtext =
        outputtext + playerArray[i].name + " " + playerArray[i].score + "</br>";
    }
  } else {
    outputext = "No fckingggg player";
  }
  document.getElementById("pOutput").innerHTML = outputtext;
}
// ----------------------------------------------------------------------------
function searchPlayer() {
  var outputtext = "";
  var found = false;
  var searchName = document.getElementById("searchName").value;
  for (var i = 0; i < playerArray.length; i++) {
    if (searchName === playerArray[i].name) {
      found = true;
      outputtext = playerArray[i].name + " " + playerArray[i].score + "</br>";
    }
  }
  if (found === true) {
    document.getElementById("pOutput2").innerHTML = outputtext;
  } else {
    document.getElementById("pOutput2").innerHTML = "not found";
  }
}

function findWinner() {
  var outputtext = "";
  var maxScore = playerArray[0].score;
  for (var i = 0; i < playerArray.length; i++) {
    if (playerArray[i].score >= maxScore) {
      maxScore = playerArray[i].score;
    }
  }
  for (var i = 0; i < playerArray.length; i++) {
    if (playerArray[i].score == maxScore) {
      outputtext += playerArray[i].name + " " + playerArray[i].score + "</br>";
    }
  }
  document.getElementById("pOutput3").innerHTML = outputtext;
}
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
