const name = 'Daniel'
const age = '29'

function getAge() {
    return age
}
const output = `Hello my name is ${name} and my age is ${getAge() > 18 ? 'and i can drive' : "and ican't drive"}`

console.log(output)
console.log(name.length)
console.log(name.charAt(2))
console.log(name.indexOf('D'))
console.log(name.toLowerCase().startsWith('da'))
console.log(name.endsWith('el'))

//* console.log(name.repeat(222))

const password = '    my super pass    '
console.log(password.trim()) //! удаляет пробелы вначале и в конце строки

