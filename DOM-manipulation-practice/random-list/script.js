// console.log('hi')
// const input = document.getElementById('list-text');
// const btn = document.getElementById('submitBtn');
// const list = document.getElementById('shopping-list');

// btn.addEventListener('click', () => {
//     let val = input.value.trim();
//     if(!val) {
//         alert('Enter some item in your list!')
//     }

//     const listItem = document.createElement('li')
//     const purchasedButton = document.createElement('button')
//     const removeButton = document.createElement('button')

//     listItem.innerText = val;
//     purchasedButton.innerText = 'Purchased'
//     removeButton.innerText = 'Remove'

//     purchasedButton.addEventListener('click', () => {
//         listItem.classList.toggle('purchased')
//     })

//     removeButton.addEventListener('click', () => {
//         list.removeChild(listItem)

//     })

//     listItem.append(purchasedButton)
//     listItem.append(removeButton)
//     list.appendChild(listItem)
//     input.value = ''
// })






// const form = document.getElementById("data");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const name = document.getElementById("name").value.trim();
//   const email = document.getElementById("email").value.trim();
//   const text = document.getElementById("textrandom").value.trim();

//   if (!name || !email || !text) {
//     alert("Please fill all fields!");
//     return;
//   }
//   const obj = {
//     name,
//     email,
//     text
//   }
//   console.log(obj)

// });
