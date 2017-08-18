//back end logic
//function to create an array of incremental numbers from one to number
function toArrayOfNumbers(number){
  var arrayOfNumbers = [];
  for (var i=0; i<number; i++){
    arrayOfNumbers[i] = i + 1;
  };
  return arrayOfNumbers;
};
//function to change a number based on the rules listed in the specifications
function toPingPongRules(number){
  if (number % 15 === 0){
    number = '<img src="img/pingRight.png" alt="paddle">Ping-Pong<img src="img/pingLeft.png" alt="paddle">';
    return number;
  }else if (number % 5 === 0){
    number = '<img src="img/pingLeft.png" alt="paddle">Pong';
    return number;
  }else if (number % 3 === 0){
    number = '<img src="img/pingRight.png" alt="paddle">Ping';
    return number;
  }else{
    return number;
  }
}
//loop through array and append each item in a p tag
function display(array){
  array.forEach(function(element){
    $("#output").append("<li>"+element+"</li>");
  })
}



//front end logic
//puts number user enters into variable number
//removes all html from output div
$(document).ready(function(){
  $("#userForm").submit(function(event){
    event.preventDefault();
    $("#output").empty();
    var num = $("#userInput").val();
    // arrayWithRules = toArrayOfNumbers(num).map(toPingPongRules);
    //$("#output").append(arrayWithRules);
    // display(arrayWithRules);
    display(toArrayOfNumbers(num).map(toPingPongRules))
  });
});
