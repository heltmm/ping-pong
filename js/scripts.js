




//front end logic
//puts number user enters into variable number
//removes all html from output div
$(document).ready(function(){
  $("#userForm").submit(function(event){
    event.preventDefault();
    $("#output").empty();
    var number = $("#userInput").val();
  });
});
