function returnDay(numberForDay) {
  if (numberForDay < 1 || numberForDay > 7) {
    return null;
  }
  if (numberForDay === 1) {
    return "Monday";
  } else if (numberForDay === 2) {
    return "Tuesday";
  } else if (numberForDay === 3) {
    return "Wednesday";
  } else if (numberForDay === 4) {
    return "Thursday";
  } else if (numberForDay === 5) {
    return "Friday";
  } else if (numberForDay === 6) {
    return "Saturday";
  } else if (numberForDay === 7) {
    return "Sunday";
  }
}

console.log(returnDay(7)); // Output : "Sunday"
