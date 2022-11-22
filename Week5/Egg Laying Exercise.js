const hen = {
  name: "Helen",
  eggCount: 0,
  layAnEgg() {
    this.eggCount++;
    return "EGG";
  },
};

console.log(hen.name); // Output : "Helen"
console.log(hen.eggCount); // Output : 0
console.log(hen.layAnEgg()); // Output : "EGG"
console.log(hen.layAnEgg()); // Output : "EGG"
console.log(hen.eggCount); // Output : 2
