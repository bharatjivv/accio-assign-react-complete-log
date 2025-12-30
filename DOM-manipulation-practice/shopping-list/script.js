const addBtn = document.getElementById('addBtn');
const itemInput = document.getElementById('itemInput');
const list = document.getElementById('list');
const listArr = []

addBtn.addEventListener('click', () => {
  const itemName = itemInput.value.trim();
  if (!itemName) {
    alert('Please enter an item name');
    return;
  }

  const li = document.createElement('li');
  const toggleBtn = document.createElement('button');
  const deleteBtn = document.createElement('button');

  // content of li, toggle button and delete button
  li.textContent = itemName;
  toggleBtn.textContent = 'Purchased';
  deleteBtn.textContent = 'Remove';

  // Mark purchased
  toggleBtn.addEventListener('click', () => {
    li.classList.toggle('purchased');
  });

  // Delete item
  deleteBtn.addEventListener('click', () => {
    list.removeChild(li);
  });

  li.appendChild(toggleBtn);
  li.appendChild(deleteBtn);
  list.appendChild(li);
  listArr.push(itemName)
//   localStorage.setItem('cart', JSON.stringify(listArr))

  itemInput.value = ''; // Clear input
});
