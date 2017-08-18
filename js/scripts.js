//back end logic
//function to create an array of incremental numbers
function toArrayOfNumbers(number){
  arrayOfNumbers = [];
  for (var i=0; i<number; i++){
    arrayOfNumbers[i] = i + 1;
  };
  return arrayOfNumbers;
};




//front end logic
//puts number user enters into variable number
//removes all html from output div
$(document).ready(function(){
  $("#userForm").submit(function(event){
    event.preventDefault();
    $("#output").empty();
    var num = $("#userInput").val();
    $("#output").append(toArrayOfNumbers(num));
  });
});
