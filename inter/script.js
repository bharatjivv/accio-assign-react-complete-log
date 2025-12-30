// const field = document.getElementById('field')
// const button = document.getElementById('addBtn')
// const shopList = document.getElementById('shop-list')
// const taskList = []

// button.addEventListener('click', () => {
//   console.log('clicked')
//   const task = field.value;
//   const newTask = {
//     id: taskList.length,
//     task,
//     purchased: false
//   }
//   taskList.push(newTask)
//   field.value = '';
//   console.log(taskList)


//   displayData(taskList)
// })


// function displayData(taskList) {
//     shopList.innerText = ''
//     for(let i=0; i<taskList.length; i++) {
//         const listItem = document.createElement('li')
//         const removeButton = document.createElement('button')
//         const purchasedButton = document.createElement('button')
//         removeButton.innerText = 'Remove'
//         purchasedButton.innerText = 'Purchased'
//         removeButton.id = `removeItem`
//         purchasedButton.id = `purchasedItem`
//         listItem.textContent += `${taskList[i].task}`
//         shopList.appendChild(listItem)
//         listItem.append(removeButton)
//         listItem.append(purchasedButton)

//     }


// }

// document.getElementById('removeItem').addEventListener('click', () => {
//     console.log('remove Item clicked ')
// })

// document.getElementById('purchasedItem').addEventListener('click', () => {
//     console.log('Purchased Item clicked')
// })



