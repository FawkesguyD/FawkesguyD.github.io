// const car = {
//     model: "Ford",
//     year: 2020,
// }



// //? Работа с json форматом 
// const json = JSON.stringify(car);
// console.log(json);

// const parsed = JSON.parse(json);
// console.log(parsed);


//TODO: добавить раскрывающийся список под каждым пользователем с остальной информацией
const listOfUsers = document.querySelector('#list')
const filter = document.querySelector('#filter')
let USERS = []

filter.addEventListener('input', (event) => {
    const value = event.target.value.toLowerCase()
    if (value) {
        const filterUsers = USERS.filter((user) => user.name.toLowerCase().includes(value))
        clearList()
        render(filterUsers)
    } else {
        render(USERS)
    }
})

async function start() {
    listOfUsers.innerHTML = 'Loading...'
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        clearList()
        USERS = data
        render(data)
    } catch(error) {
        listOfUsers.style.color = 'red'
        console.log(error)
    }
}


function render(users = []) {
    if (users.length) {
        for (const user of users) {
            listOfUsers.insertAdjacentHTML('beforeend', getLiTemplate(user.name))
        }
    } else {
        listOfUsers.innerHTML = 'No matched users!'
    }
    // const html = users.map(getLiTemplate)
    // listOfUsers.innerHTML = html
}

function clearList() {
    listOfUsers.innerHTML = ''
}

function getLiTemplate(data) {
    return `<li class="list-group-item">${data}</li>`
}

start()
