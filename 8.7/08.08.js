// 08.08 JavasScript code

function calculateProfit() {
  // Read value of rounds from the input field

  var numberOfRound = document.getElementById("txtRounds").value;
  var winsMoney = 0;
  for (var i = 0; i < numberOfRound; i++) {
    var pips = Math.round(Math.random() * 5 + 1);
    if (pips == 1 || pips == 3 || pips == 5) {
      winsMoney;
    } else if (pips == 2 || pips == 3) {
      winsMoney += 1.25;
    } else {
      winsMoney += 1.5;
    }
  }
  var output =
    "Bets were altogether " +
    parseFloat(numberOfRound).toFixed(2) +
    " euros" +
    "<br>" +
    "Wins were " +
    parseFloat(winsMoney).toFixed(2) +
    " euros <br>" +
    "Profit was " +
    parseFloat(numberOfRound - winsMoney).toFixed(2) +
    " euros";

  document.getElementById("pOutput").innerHTML = output;
  // Make a loop which is executed as many times as was set through the input field.
  // Let win counter cumulating during every round of the loop.

  // Randomize pips between 1-6 calling Math.round( (Math.random( ) * 5) + 1 );

  // If the randomized pips is 1, 3 or 5, then no pay

  // Otherwise if the pips 2 and 4 return the set coins back 125% (=multiplied by 1.25)

  // Otherwise the pips 6 returns the inserted bet 150%

  //Calculate the profit (euros) by subtracting the win counter (euros) from the bets (euros)

  // Write the answer to the web page
}
