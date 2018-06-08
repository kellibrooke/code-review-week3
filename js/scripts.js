// BUSINESS LOGIC

function divisibleBy3(number){
var parsedNumber = parseInt(number);
  if(parsedNumber % 3 === 0){
    return true;
  } else{
    return false;
  }
};

function findOnes(number){
  if(number.includes("1")){
    return true;
  } else{
    return false;
  }
};

function findZeros(number){
  if(number.includes("0")){
    return true;
  } else{
    return false;
  }
};

function replaceOnes(number){
  var splitNumber = number.split("");
  for(x=0; x<splitNumber.length; x++){
    if(splitNumber[x] === "1"){
      splitNumber.splice((x+1), 1, "boop");
    } else{
      splitNumber = splitNumber;
    }
  }
  return splitNumber;
}



// USER INPUT LOGIC
$(function(){
  $("#submit-button").click(function(){
    var uiInput = $("#ui-input");
  });



});
