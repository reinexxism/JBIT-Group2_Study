const form = document.querySelector("form");
const list = document.querySelector("#list");

form.addEventListener("submit", function (a) {
  a.preventDefault();
  const productInput = form.elements.product;
  const productQuantity = form.elements.qty;
  addItem(productInput.value, productQuantity.value);
  productInput.value = "";
  productQuantity.value = "";
});

const addItem = function (productInput, productQuantity) {
  const newItem = document.createElement("li");
  list.appendChild(newItem);
  newItem.innerText = `${productQuantity} ${productInput}`;
};
