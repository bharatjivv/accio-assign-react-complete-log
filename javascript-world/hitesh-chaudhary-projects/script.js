const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = document.querySelector("#height").value;
  const weight = document.querySelector("#weight").value;
  // console.log(weight, height)

  const div = document.createElement("div");

  if (isNaN(height) || isNaN(weight)) {
    div.innerText = "Not Valid Details";
  } else {
    const bmi = parseInt(((height * weight) / height) * 2).toFixed(2);
    div.innerText = `${bmi}`;
  }

  document.body.appendChild(div);
});

const buttons = document.querySelectorAll("button");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    const bg = button.innerText;
      document.body.style.backgroundColor = bg;
  });
});

const clock = document.querySelector("#clockGlock");

clock.addEventListener("click", function () {
  setInterval(function () {
    let date = new Date();
    clock.innerText = date.toLocaleTimeString();
  }, 1000);
});




document.getElementById('random').addEventListener('click', function(e) {
  console.log(e)
}, false)