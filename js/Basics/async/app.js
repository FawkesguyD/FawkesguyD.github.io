//* Event Loop

//? const timeout = setTimeout(() => {
//     console.log('after 2 second')
// }, 2000)

// clearTimeout(timeout)

//? setTimeout(() => {
//     console.log('after 3 second')
// }, 3000)


//? setInterval(() => {
//     console.log('tick')
// }, 1000)


//? function  delay(callback, time = 1000) {
//     setTimeout(callback, time)
// }

//? delay(() => {
//     console.log('timeout')
// }, 2000)


//! Promise
const delay = (time = 1000) => {
    const promise = new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve([1, 2, 3])
            reject('Error in delay')
        }, time)
    })
    return promise
}

//! delay(2500)
//     .then((data) => {
//     console.log('Time', data)
//     return data.map((x) => x**2 )
//     })
//     .then((data) => {
//         console.log(data)
//     })
//     .catch(err => { //? выполняется если есть ошибка в resolve
//         console.log(err)
//     })
//     .finally(() => console.log('Finally')) //? выполняется в любом случае

const getData = () => new Promise((resolve) => resolve([1, 2, 3]))


//! Работа с асинхронным кодом
async function asyncExample() {
    try {
        const data = await getData()
        console.log(data)
    } catch (err) {
        console.log(err)

    } finally {
        console.log('Finally')
    }
}

asyncExample()