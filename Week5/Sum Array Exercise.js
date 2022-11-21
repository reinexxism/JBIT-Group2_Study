function sumArray(params) {
  let total = 0;
  for (let i = 0; i < params.length; i++) {
    total += params[i];
  }
  return total;
}

console.log(sumArray([50, 50, 1])); // Output : 101
