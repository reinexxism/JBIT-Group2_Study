const input = document.querySelector("#username");
const h1 = document.querySelector("h1");

input.addEventListener("input", function () {
  const userName = input.value;
  h1.innerText = `Welcome, ${userName}`;
  if (userName.length == 0) {
    h1.innerText = "Enter your Username";
  }
});
