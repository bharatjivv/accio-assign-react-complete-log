let modifiedArr = []
const listItem = document.getElementById('listItem')
let input = document.getElementById('searchElem')
async function fetchingData () {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()
        modifiedArr = data.map((usr) => usr.name)

        for(let elem of modifiedArr) {
            const li = document.createElement('li')
            li.innerText = elem;
            listItem.appendChild(li)
        }

    } catch (e) {
        console.log(`Couldn't fetch api : `, e.message)
    }
}

fetchingData()


input.addEventListener('input', function () {
    const values = modifiedArr.filter((char) => (char.toLowerCase()).includes((input.value).toLowerCase()))
    listItem.innerText = ''
    for(let elem of values) {
        const li = document.createElement('li')
        li.innerText = elem;
        listItem.append(li)
    }
    // console.log(input.value)
})


