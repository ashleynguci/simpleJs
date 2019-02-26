// 08.06 JavasScript code

function showComparisonScores() {
  var totalVotes = document.getElementById("txtVotes").value;
  var candidates = document.getElementById("txtCandidates").value;

  var outPut = "";
  // For each candidate
  // Calculate comparison score for the candidate
  for (var i = 0; i < candidates; i++) {
    outPut +=
      i + 1 + ". candidate: " + Math.floor(totalVotes / (i + 1)) + "<br>";
  }
  document.getElementById("pOutput").innerHTML = outPut;
  // Show scores
}
