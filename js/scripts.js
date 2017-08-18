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
    setTimeout(function(x) { return function() { $("#displaySlowOutput").html(array[x]); }; }(i), 500*i);
  };
};
//loop throug array and apend the index of that array
function displayFast(array){
  array.forEach(function(element){
    $("#displayFastOutput").append("<li>"+element+"</li>");
  });
};
//front end logic
//puts number user enters into variable number
$(document).ready(function(){
  //run normal rules if ping Pong is clicked
  $("#normal").click(function(){
    $("#userForm").submit(function(event){
      event.preventDefault();
      var num = $("#userInput").val();
      $("#table").show();
      $("#userForm").hide();
      $("#again").show();
      displaySlow(toArrayOfNumbers(num).map(toPingPongRules));
      displayFast(toArrayOfNumbers(num).map(toPingPongRules));
      if(num ===""){
        alert("Enter a Number and Try Again!")
      };
    });
  });
  //run in reverse if pong ping is clicked
  $("#reverse").click(function(){
    $("#userForm").submit(function(event){
      event.preventDefault();
      var num = $("#userInput").val();
      $("#table").show();
      $("#userForm").hide();
      $("#again").show();
      displaySlow(toArrayOfNumbers(num).reverse().map(toPingPongRules));
      displayFast(toArrayOfNumbers(num).reverse().map(toPingPongRules));
      if(num ===""){
        alert("Enter a Number and Try Again!")
      };
    });
  })
  //reloads page if user clicks
  $("#again").click(function(){
    location.reload();
  });
});
