const inputVal = document.getElementById("listItem");
const submitBtn = document.getElementById("submitBtn");
const listOfItems = document.querySelector("#list");

submitBtn.addEventListener("click", function () {
  if (inputVal.value === "") {
    return;
  }
  console.log(inputVal.value);
  const li = document.createElement("li");
  const removeBtn = document.createElement("button");
  const purchasedBtn = document.createElement("button");
  li.innerText = inputVal.value;
  removeBtn.innerText = "Remove";
  purchasedBtn.innerText = "Purchased";

  li.appendChild(removeBtn);
  li.appendChild(purchasedBtn);
  listOfItems.appendChild(li);
  inputVal.value = "";

  removeBtn.addEventListener("click", function () {
    li.remove();
  });

  purchasedBtn.addEventListener("click", function () {
    li.style.textDecoration = "line-through"; // mark as purchased
    li.style.color = "gray";
  });
});


