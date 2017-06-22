//business logic (Back-end)

var conditional = function (userInput) {
  for (var currentNumber = 1; currentNumber <= userInput; currentNumber 1++) {
    if (currentNumber % 15 === 0) {
      $("#results").append("<li>PING PONG!</li>");
    } else if (currentNumber % 5 === 0) {
      $("#results").append("<li>pong</li>");
    } else if (currentNumber % 3 === 0) {
      $("#results").append("<li>ping</li>");
    } else if (currentNumber % 3 !== 0 || currentNumber % 5 !== 0 || currentNumber % 15 !== 0) {
      $("#results").append("<li>" + currentNumber + "</li>");
    }
  };
};

//user logic (Front-end)
