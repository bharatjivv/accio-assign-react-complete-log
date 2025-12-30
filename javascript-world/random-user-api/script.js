const userImg = document.getElementById("userImg");
const userName = document.getElementById("userName");
const userInfo = document.getElementById("user-info");
const randomUser = document.getElementById("randomUser");
const allButtons = document.querySelectorAll("button[data-attr]");

let currentUser = null;

async function fetchData() {
  try {
    const res = await fetch("https://randomuser.me/api/");
    const dataUnformatted = await res.json();
    const data = dataUnformatted.results[0];

    currentUser = {
      name: `${data.name.first} ${data.name.last}`,
      image: data.picture.large,
      age: data.dob.age,
      email: data.email,
      phone: data.phone,
    };
  } catch (e) {
    console.log(`Couldn't fetch data due to error, ${e}`);
  }

  domFilling();
}

fetchData()

function domFilling() {
  // current user ka data dom me bharna hai.
  userName.innerText = `${currentUser.name}`;
  userImg.src = currentUser.image;
  userInfo.innerText = "";
}

randomUser.addEventListener("click", function () {
  fetchData();
});

allButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const attr = button.getAttribute("data-attr");
    userInfo.innerText = currentUser[attr];
  });
});
