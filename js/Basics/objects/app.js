const person = {
    name: 'Daniel',
    age: 20,
    languages: ['ru', 'en'],
    address: {
        city: 'Moscow',
        street: 'Izmaitovskiy Bulwar'
    },
    'complex key': 'complex',
    [new Date().getTime()]: 'computed value',
    greet() {
        console.log('Greet from ' + this.name)
    },
    arrow: () => {
        console.log('Arrow to ' + this.name)
    },
    info() {
        console.log('Person name ' + this.name)
    }
}

const addressKey = 'address'
console.log(person)
console.log(person[addressKey])
console.log(person['complex key'])

person.age++
person.languages.push('de')

console.log(person.languages)

// person.address = undefined
delete person.address

console.log(person)

//! Destructoring
// const age = person.age
// const name = person.name
// const languages = person.languages

const name = 'Petr'

const { age, name: firstName, languages } = person
console.log(languages, age, firstName)



console.log([1, 2])
// for (let key in person) {
//     if (person.hasOwnProperty(key)) { // проверка чтобы код не проходился по прототипу
//         console.log(person[key])
//     }
// }

Object.keys(person).forEach((key) => {
    console.log(person[key])
})

const logger = {
    keys() {
        console.log('Object keys: ', Object.keys(this))
    },

    keysAndValues() {
        Object.keys(this).forEach((key) => {
            console.log('Key: ' + key + '\n' + 
                        'Value: ' + this[key]
            )
        })
    }
}


// чтобы работал this
const boundKeys = logger.keys.bind(person)
const boundKeysAndValues = logger.keysAndValues.bind(person)

boundKeys()
boundKeysAndValues()

//! Тоже самое как и bind, только сразу вызывает эту функцию
logger.keys.call(person)  // позволяет задать неограниченное колличество параметров
logger.keys.apply(person) // позволяет задать только два параметра, второй это всегда массив
 


//! Классы

class Human {
    isHuman = true

    humanGreet() {
        console.log('greet from human')
        return 42
    }
}

class Person extends Human {
    constructor(name, age) {
        super()
        this.name = name ?? 'Undefined name'  //* знак ?? используется для проверки, если name не было переданно то выполняется то что после ??
        this.age = age ?? 'Undefined age'
    }
  
    sayHello() {
        console.log('Hello from ', this.name)
    }
}

const person1 = new Person('Daniel', 20)

console.log(person1)
person1.sayHello()
person1.humanGreet()