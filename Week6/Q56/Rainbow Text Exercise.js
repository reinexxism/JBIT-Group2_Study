const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const chars = document.querySelectorAll("span");

let color = 0;
for (let char of chars) {
  char.style.color = colors[color];
  color++;
}
