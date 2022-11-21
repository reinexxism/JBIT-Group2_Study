function lastElement(params) {
  if (params.length == 0) {
    return null;
  }
  return params[params.length - 1];
}

console.log(lastElement([1]));
