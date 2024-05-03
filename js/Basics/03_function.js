//! Function Declaration
function greet(name) {
    console.log('Hello - ', name)
}

//! Function Expression
const greet2 = function (name) {
    console.log('2 Hello -', name)
}

greet2('Daniel')
greet('Daniel')

console.dir(greet)

//! функция выполниться через заданное количесво мили-секунд (единоразово)
setTimeout(function () {
    greet(" Daniel")
}, 500)

let counter = 0

//! функция будет выполняться через заданный интервал
const interval = setInterval(function () {
    if (counter === 3) {
        clearInterval(interval) //! функция остановки повторяющегося действия 
    } else {
        console.log(counter++)
    }
}, 1000)



//! Стрелочные функции

const arrow = (name, age) => {
    console.log('Hello -', name, age)
}

arrow('Daniel', 20)


function pow(num, exp) {
    return Math.pow(num, exp)
}

const pow2 = (num, exp) => Math.pow(num, exp)

//!===============Default Parameters===============

const sum = (a = 40, b = 2) => a + b


function sumAll (... numbers) {
    return numbers.reduce((accum, value) => accum += value, 0)
}

console.log(sumAll(10, 5))


//! Closures

function createPerson(name) {
    return function (lastname) {
        console.log(name + ' ' + lastname)
    }
}

const addLastName = createPerson('Daniel')

addLastName('G')
