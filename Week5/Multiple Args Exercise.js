function isSnakeEyes(num1, num2) {
  if ((num1 == 1) & (num2 == 1)) {
    console.log("Snake Eyes!");
  } else {
    console.log("Not Snake Eyes!");
  }
}

isSnakeEyes(1, 1); // Output : "Snake Eyes!"
isSnakeEyes(1, 5); // Output : "Not Snake Eyes!"
