//* Structure
const names = ['kate', 'daniel', 'john']
//TODO: перенести все эти функциии в notion 


//! Method with
console.log("With:")

const newPerson = names.with(1, 'Bob')

console.log(newPerson)
console.log(names)


//! Method `map`

//*forEach и map - это два метода массива в JavaScript, которые используются для итерации по элементам массива, но они имеют несколько ключевых различий:

//* Возвращаемое значение: forEach ничего не возвращает. Он просто выполняет функцию для каждого элемента массива. С другой стороны, map создает новый массив на основе результатов выполнения функции для каждого элемента исходного массива.

//* Изменение исходного массива: forEach может изменять исходный массив, в то время как map не изменяет исходный массив, а создает новый.

console.log("Map:")

//? применяет определенное условие для каждого элемента массива
const capitalNames = names.map(function(name, index) {
    if (index === 1) {
        return 'Not Daniel'
    }
    return name
})
console.log(capitalNames)


//! Method includes и indexof
console.log("Includes and indexof:")
//? лучше использовать метод includes он более современый
console.log(names.includes('john'))

console.log(names.indexOf('kate') !== -1)


//* Structure
const people = [
    { name: 'kate', budget: 7000 },
    { name: 'daniel', budget: 10000 },
    { name: 'john', budget: 520 },
]


//! Method find
console.log("Find:")

const findedPerson = people.find(function(person) {
    return person.budget === 520
})
console.log(findedPerson)

//? стрелочная функция
const finded = people.findIndex((person) => person.budget === 520)

console.log(people.with(finded, {name: 'jonh', budget: 1000000}))
console.log(people)


//! Method filter
console.log("Filter:")

const filtered = people.filter((person) => person.budget > 5000)

console.log(filtered)
console.log(people)

let budget = 0

people.forEach((person) => person.budget > 5000 ? budget += person.budget : budget += 0)


//? функциональное програмирование
const byBudget = (p) => p.budget > 5000
const pickBudget = (p) => p.budget

const sumBudget = people
    .filter(byBudget)
    .map(pickBudget)
    .reduce((accamulator, value) => accamulator += value, 0)

console.log(budget)
console.log(sumBudget)


//! Method split 
//? разделяет строку по заданому значению (если пусто, то делить каждый символ в отдельную ячейку)
//! Method join 
//? работает также как и split
//! Method toReversed переворачивает массив
const string = 'Привет, как дела?'
const reversed = string
    .split('')
    .toReversed()
    .join('')

console.log(reversed)