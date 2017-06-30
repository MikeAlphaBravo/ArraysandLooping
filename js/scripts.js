var answer = [];

//business logic (Back-end)

var conditional = function (userInput) {
  for (var currentNumber = 1; currentNumber <= userInput; currentNumber += 1) {
    if (currentNumber % 15 === 0) {
      answer.push("PingponG");
    } else if (currentNumber % 5 === 0) {
      answer.push("pong");
    } else if (currentNumber % 3 === 0) {
      answer.push("ping");
    } else {
      answer.push(currentNumber);
    }
  };
  return answer;
};

//user logic (Front-end)

$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    event.preventDefault();
    $("#unorderedList").empty();
    var userInput = parseInt($("input#inputNumber").val());
    var results = conditional(userInput);
    if (isNaN(userInput)) {
      alert("You must enter a number!");
    } else if (userInput <= 0) {
      alert("Enter a number higher than 0!");
    } else {
      for (var currentNumber = 0; currentNumber < userInput; currentNumber += 1) {
        $("#unorderedList").append("<li>" + results[currentNumber] + "</li>");
      }
      $("#results").show();
    };
  });
});
