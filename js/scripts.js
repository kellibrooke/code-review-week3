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

function replaceOnes(numberSplit){
  for(x=0; x<numberSplit.length; x++){
    if(numberSplit[x] === "1"){
      numberSplit.splice(x, 1, "boop");
    } else{
      numberSplit = numberSplit;
    }
  }
  return numberSplit;
}

function replaceZeros(numberSplit){
  for(x=0; x<numberSplit.length; x++){
    if(numberSplit[x] === "0"){
      numberSplit.splice(x, 1, "beep");
    } else{
      numberSplit = numberSplit;
    }
  }
  return numberSplit;
}

function masterFunction1(userInput){
  var splitNumber = userInput.split("");
  var divisibleTest = divisibleBy3(userInput);
  var onesTest = findOnes(splitNumber);
  var zerosTest = findZeros(userInput);

  if(divisibleTest === true){
    $("#result-box").text("I'm sorry, Dave. I'm afraid I can't do that.");
  } else if(onesTest === true){
    $("#result-box").text("boop");
  } else if(zerosTest === true){
    $("#result-box").text("beep");
  } else{
    $("#result-box").text(userInput);
  }
  $("#result-box").slideDown();
};

function masterFunction2(userInput){
  var splitNumber = userInput.split("");
  var divisibleTest = divisibleBy3(userInput);
  var onesTest = findOnes(splitNumber);
  var zerosTest = findZeros(userInput);

  if(divisibleTest === true){
    $("#result-box2").text("I'm sorry, Dave. I'm afraid I can't do that.");
  } else if(onesTest === true){
    var onesDone = replaceOnes(splitNumber);
    var onesDoneJoined = onesDone.join(" ");
    if(zerosTest === true){
      var onesZerosDone = replaceZeros(onesDone);
      var onesZerosDoneJoined = onesZerosDone.join(" ");
      $("#result-box2").text(onesZerosDoneJoined);
    } else{
      $("#result-box2").text(onesDoneJoined);
    }
  } else if(zerosTest === true){
    var zerosDone = replaceZeros(splitNumber);
    var zerosDoneJoined = zerosDone.join(" ");
    $("#result-box2").text(zerosDoneJoined);
  } else{
    $("#result-box2").text(userInput);
  }
};



// USER INPUT LOGIC
$(function(){
  $("#submit-button").click(function(){
    event.preventDefault();
    $("#result-box").hide();
    var uiInput = $("#ui-input").val();
    masterFunction1(uiInput);
    document.getElementById("the-form").reset();

  });
  $("#submit-button2").click(function(){
    event.preventDefault();
    var uiInput = $("#ui-input2").val();
    masterFunction2(uiInput);
    document.getElementById("the-form2").reset();
  });



});
