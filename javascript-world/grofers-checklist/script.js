const prices = document.querySelectorAll('[data-ns-test="price"]');
const priceTable = document.querySelector("#priceTable");

const lastRow = document.createElement("tr");
const grandKey = document.createElement("td");
const sumTotal = document.createElement("td");

sumTotal.setAttribute("data-ns-test", "grandTotal"); // ✅ attach attribute here, not on grandKey

lastRow.id = "totalId";
grandKey.innerText = "Grand Total";

let sum = 0;
for (let i = 0; i < prices.length; i++) {
  sum += parseInt(prices[i].innerText);
}
sumTotal.innerText = sum;

lastRow.appendChild(grandKey);
lastRow.appendChild(sumTotal);
priceTable.appendChild(lastRow);

const voteForm = document.getElementById("voteForm");
const fname = document.getElementById("name");
const age = document.getElementById("age");

let count = 0;
voteForm.addEventListener("submit", function (e) {
  count++;
  e.preventDefault();

  if (!age.value || !fname.value) {
    alert("Please enter valid details.");
    return;
  } else {
    const promise = new Promise(function (resolve, reject) {
      if (Number(age.value) > 18) {
        setTimeout(function () {
          resolve(`Welcome, ${fname.value}. You can vote.`);
        }, 1000);
      } else {
        setTimeout(function () {
          reject(`Oh sorry ${fname.value}. You aren't old enough.`);
        }, 1000);
      }
    });

    promise
      .then(function (message) {
        console.log(message);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
});


const button = document.getElementById('btn')
console.log(button)
console.log(count)
if(count > 3) {
  console.log(count)
  button.setAttribute('disabled')
}
