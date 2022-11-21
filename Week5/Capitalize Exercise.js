function capitalize(str) {
  let newStr = str[0].toUpperCase();
  return newStr + str.slice(1);
}

console.log(capitalize("eggplant")); // Output : "Eggplant"
