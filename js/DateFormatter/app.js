const display = document.getElementById('display')

const fullBtn = document.getElementById('full')
const dateBtn = document.getElementById('date')
const timeBtn = document.getElementById('time')

//! trash code
// let actual_time = new Date()
// display.textContent = actual_time.toLocaleTimeString()
// let TimeInterval = setInterval( ()=> {
//     actual_time = new Date()
//     display.textContent = actual_time.toLocaleTimeString()
// }, 1000)

// btn_group.onclick = function (event) {
//     const id = event.target.id

//     clearInterval(TimeInterval)
 
//     switch(id) {
//         case 'full': {
//             display.textContent = actual_time.toLocaleString()
//             TimeInterval = setInterval(() => {
//                 actual_time = new Date()
//                 display.textContent = actual_time.toLocaleString()
//             }, 100)
//             break
//         }
//         case 'date': {
//             display.textContent = actual_time.toLocaleDateString()
//             TimeInterval = setInterval(() => {
//                 actual_time = new Date()
//                 display.textContent = actual_time.toLocaleString()
//             }, 86400)
//             break
//         }
//         case 'time': {
//             display.textContent = actual_time.toLocaleTimeString()
//             TimeInterval = setInterval(() => {
//                 actual_time = new Date()
//                 display.textContent = actual_time.toLocaleTimeString()
//             }, 100)
//             break
//         }
//         default: {
//             break
//         }
//     } 
// }


let mode = 'full'

function bindMode(name) {
    return function() {
        mode = name
        update()
    }
}

fullBtn.onclick = bindMode('full')

dateBtn.onclick = bindMode('date')

timeBtn.onclick = bindMode('time')


setInterval(update, 1000)
update()


function update() {
    display.textContent = formatter(mode)
}

function formatter(mode) {
    const actual_time = new Date()

    switch(mode) {
        case 'full': return actual_time.toLocaleString()
        case 'date': return actual_time.toLocaleDateString()
        case 'time': return actual_time.toLocaleTimeString()
        default: return actual_time
    }
}