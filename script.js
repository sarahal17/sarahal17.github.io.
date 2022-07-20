var factList = [ //afghan//
  "Over 24.4 million out of 41.7 million people in Afghanistan are in need of humanitarian aid",/*0*/
  "Extreme weather and climate change are worsening the condition of drought and hunger in Afghanistan",/*1*/
  "Starvation within Afghanistan could kill more people now then it has in the past 20 years"/*2*/
];


var fact = document.getElementById("fact");
var afghan = document.getElementById("afghan");
var count = 0;

if (afghan){
  afghan.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}
