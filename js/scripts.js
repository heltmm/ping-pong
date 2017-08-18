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
  };
};
//loop through array every .5 seconds and replace the previous element with the index of that array
function displaySlow(array){
  for (var i = 0; i < array.length; i++){
    setTimeout(function(x) { return function() { $("#ping").html(array[x]); }; }(i), 500*i);
  };
};
// function displayEnd(array){
//   array.forEach(function(element){
//     $("#output").append("<p>"+element+"</p>");
//   })
// }
//front end logic
//puts number user enters into variable number
//removes all html from output div
$(document).ready(function(){
  //run normal rules if ping Pong is clicked
  $("#normal").click(function(){
    $("#userForm").submit(function(event){
      event.preventDefault();
      $("#table").show();
      var num = $("#userInput").val();
      displaySlow(toArrayOfNumbers(num).map(toPingPongRules));
    });
  });
  //run in reverse if pong ping is clicked
  $("#reverse").click(function(){
    $("#userForm").submit(function(event){
      event.preventDefault();
      $("#table").show();
      var num = $("#userInput").val();
      displaySlow(toArrayOfNumbers(num).reverse().map(toPingPongRules));
    });
  })
});
