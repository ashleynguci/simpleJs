var speciesArray = ["Pike","Salmon","Salmon","Trout"];
var lengths =      [40, 71, 76, 22];
var weights = [4.925, 3.675, 5.400, 1.510];

// ----------------------------------------------------------------------------
function addFish() {

}

// ----------------------------------------------------------------------------
function listAllCatch() {
  var outputText = "";

  document.getElementById("pOutput2").innerHTML = outputText;
}

// ----------------------------------------------------------------------------
function showAverageWeight() {
  var outputText;

  document.getElementById("pOutput3").innerHTML = outputText;
}

// ----------------------------------------------------------------------------
function findFish() {
  var outputText = "";

  // Updating the View
  document.getElementById("pOutput4").innerHTML = outputText;
}

// ----------------------------------------------------------------------------
function maxWeightFreshmanWay() {
  var outputText = "";

  // Updating the View
  document.getElementById("pOutput5").innerHTML = outputText;
}

// ----------------------------------------------------------------------------
function maxWeightUsingIndex() {
  var outputText = "";

  // Updating the View
  document.getElementById("pOutput5").innerHTML = outputText;
}

// ------------ library function for converting kg to lbs ---------------------
function convertKgToLbs(kilograms) {
  
}



























// ----------------------------------------------------------------------------
function fishSpeciesReport() {
  // Read input
  var speciesSearched = document.getElementById("txtSpeciesSearched").value;    
  var found = false;
  var count = 0;
  var outputText = "";

  for(var i=0; i < speciesArray.length; i++) {
    if(speciesSearched===speciesArray[i]){
      found = true;
      count++;
      outputText = outputText + speciesArray[i] + ": " +lengths[i]
                    +"cm, "+ weights[i] + "kg.<br />";
    } 
  }

  if(found === false) {
    outputText = outputText + speciesSearched + " not found!";
  } else {
    outputText = outputText + count + " " +speciesSearched +"(s)";
  }

  // Updating the View
  document.getElementById("txtSpeciesSearched").value = "";
  document.getElementById("pOutput5").innerHTML = outputText;
}