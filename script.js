var rate5 = document.getElementById("rate5").value;
var rate5Text = document.getElementById("rate5");
var rate4 = document.getElementById("rate4").value;
var rate4Text = document.getElementById("rate4");
var rate3 = document.getElementById("rate3").value;
var rate3Text = document.getElementById("rate3");
var numRoll = document.getElementById("noOfRolls").value;
var desSSR = document.getElementById("desiredSSR").value;

rate5Text.addEventListener("change", function(){
  rate5 = document.getElementById("rate5").value;
  rate3 = 100-rate4-rate5;
  document.getElementById("rate3").value=rate3;
});
rate4Text.addEventListener("change", function(){
  rate4 = document.getElementById("rate4").value;
  rate3 = 100-rate4-rate5;
  document.getElementById("rate3").value=rate3;
});
rate3Text.addEventListener("change", function(){
  rate3 = document.getElementById("rate3").value;
  rate4 = 100-rate3-rate5;
  document.getElementById("rate4").value=rate4;
});



var specSSR = document.getElementById("specSSRChkBox");
var calProb = document.getElementById("calProb");
specSSR.addEventListener("click", function(){
  // console.log("chkbox")
  if (specSSR.checked == true){
    document.getElementById("specSSRRate").disabled = false;
    document.getElementById("calProb").value = "Calculate probability of getting specific 5*/UR/SSR";
    // document.getElementById("desiredSSR").disabled = true;
  }
  else{
    document.getElementById("specSSRRate").disabled = true;
    document.getElementById("calProb").value = "Calculate probability of getting 5*/UR/SSR";
    // document.getElementById("desiredSSR").disabled = false;
  }
});
var specSSRRate = document.getElementById("specSSRRate").value;
// console.log(specSSRRate);



calProb.addEventListener("click", function(){
  rate5 = document.getElementById("rate5").value;
  rate4 = document.getElementById("rate4").value;
  rate3 = document.getElementById("rate3").value;
  if(specSSR.checked == true){
    rate5=document.getElementById("specSSRRate").value;
  }
  numRoll = document.getElementById("noOfRolls").value;
  desSSR = document.getElementById("desiredSSR").value;
  var nCrValue=0;
  var overallProb=1;
  for(var j = 0 ; j < desSSR ; j++){
    nCrValue = 0;
    var nFactorial = 1;
    for(var i = numRoll ; i>(numRoll-j) ; i--){
      nFactorial = nFactorial*i;
    }
    var rFactorial = 1;
    for(var i = j ; i>0 ; i--){
      rFactorial = rFactorial*i;
    }
    nCrValue = nFactorial/rFactorial;
    // consol
    probCur = nCrValue * Math.pow(rate5/100,j) * Math.pow((1 - rate5/100),(numRoll - j));
    console.log(probCur);
    overallProb = overallProb - probCur;
  }
  console.log(overallProb);
  overallProb = overallProb * 100;
  overallProb = overallProb.toFixed(2);
  document.getElementById("probability").innerHTML = overallProb + "%";

  
});