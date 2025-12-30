const randomNos = Math.floor(Math.random() * 100) + 1;
console.log(randomNos);


const btn = document.getElementById("submit");
const inputVal = document.getElementById("enteredNos");
const message = document.getElementById("message");

btn.addEventListener("click", function () {
  if (inputVal.value === "") alert("enter something");
  
  else {
    if (inputVal.value > randomNos) {
      // too high, guess low
      message.innerText = "too high, guess low";
      inputVal.value = "";
    } else if (inputVal.value < randomNos) {
      // think big
      message.innerText = "think big";
      inputVal.value = "";
    } else {
      // congrats, won!!!
      message.innerText = "congrats, won!!!";
      inputVal.value = "";


    }

  }
});
