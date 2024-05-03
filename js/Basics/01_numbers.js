const big = 1_000_000
const pow = 10e3

console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MAX_VALUE)
console.log(Number.POSITIVE_INFINITY)
console.log(Number.NEGATIVE_INFINITY)
console.log(1 / 0)
console.log(Number.isFinite(1 / 0))
console.log(Number.isNaN(12))

const strInt = '42'
const strFloat = '42.42'

console.log(parseInt(strInt))
console.log(parseFloat(strFloat))

console.log(+strInt, +strFloat)

console.log(+(0.1 + 0.2).toFixed(10))

//! BigInt

//?  число с n на конце это отдельный тип данных работает только с integer
console.log(BigInt(Number.MAX_SAFE_INTEGER) + 923842093842n)

console.log(parseInt(10n) - 4)


//! Math

console.log(Math.E)
console.log(Math.PI)

/*  Math
        sqrt
        pow
        abs
        max ( ... ) - любое колличество цифр 
        min ( ... )
*/

console.log(Math.floor(4.9)) //? округляет всегда в меньшую сторону
console.log(Math.ceil(4.1)) //? округляет всегда в большую степень
console.log(Math.round(4.2)) //? классическое округление
console.log(Math.trunc(4.8)) //? возвращает только целую часть числа
console.log(Math.random())


function getRandomNuber(min, max) {
    return Math.random() * (max - min  + 1) + min
}

console.log(getRandomNuber(10, 100))

console.log(Math.round(Math.random() * 100))