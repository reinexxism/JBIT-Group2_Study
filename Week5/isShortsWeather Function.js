function isShortWeather(temperature) {
  if (temperature >= 75) {
    return true;
  } else {
    return false;
  }
}

console.log(isShortWeather(75));
