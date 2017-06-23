//business logic (Back-end)

var conditional = function (userInput) {
  for (var currentNumber = 1; currentNumber <= userInput; currentNumber += 1) {
    if (currentNumber % 15 === 0) {
      $("#unorderedList").append("<li>PING PONG!</li>");
    } else if (currentNumber % 5 === 0) {
      $("#unorderedList").append("<li>pong</li>");
    } else if (currentNumber % 3 === 0) {
      $("#unorderedList").append("<li>ping</li>");
    } else if (currentNumber % 3 !== 0 || currentNumber % 5 !== 0 || currentNumber % 15 !== 0) {
      $("#unorderedList").append("<li>" + currentNumber + "</li>");
    }
  };
};

//user logic (Front-end)

$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    $("#unorderedList").empty();
    var userInput = parseInt($("input#inputNumber").val());
    if (isNaN(userInput)) {
      alert("You must enter a number!");
    } else if (userInput <= 0) {
      alert("Enter a number higher than 0!");
    } else {
      $("#results").show("slow");
    };
    conditional(userInput);
    event.preventDefault();
  });
});
