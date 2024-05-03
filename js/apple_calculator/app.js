const result_label = document.getElementById('res')
const btn_group = document.getElementById('btn-group')

let result_value = '0'
let operator_sign = ''
let minus_flag = false

const math = [
    { type: 'del', flag: false, sign: '/' },
    { type: 'mul', flag: false, sign: '*' },
    { type: 'min', flag: false, sign: '-' },
    { type: 'plu', flag: false, sign: '+' },
]

//? _________________________________________
//? _________Listener of the Buttons_________
//?------------------------------------------

btn_group.onclick = function(event) {
    let targetButton = event.target
    if (targetButton.dataset.index) {
        if (result_value === '0') {
            result_value = ''
        }
        result_value += targetButton.dataset.index
    }

    if (targetButton.dataset.type === 'ac') {
        result_value = '0'
    }
    
    if (targetButton.dataset.type === 'plusMinus') {
        minus_flag = !minus_flag
        if (minus_flag) {
            result_value = '-' + result_value
        } else {
            result_value = result_value.replace(/-/g, '')
        }
    }
    
    if (targetButton.dataset.type === 'percent') {
        result_value = result_value / 100
    }
    if (targetButton.dataset.type === 'dot') {
        if (!result_value.includes('.')) {
            result_value += '.'
        }
    }

    if (result_value !== '0') {
         document.getElementById('ac').textContent = "C"
    } else {
        document.getElementById('ac').textContent = "AC"
    }

    if (targetButton.dataset.type === 'del' || targetButton.dataset.type === 'mul' || targetButton.dataset.type === 'min' || targetButton.dataset.type === 'plu') {
        for (const operator of math) {
            if (targetButton.dataset.type === operator.type) {
                operator_hold(targetButton)
                operator_sign = operator.sign
                operator.flag = true
                operators_color_hold(targetButton)
                break
            }
        }
    }
    
    sizing()
    res(result_value)
}

const fontSizes = {
    6: "var(--font-size-large)",
    7: "var(--font-size-medium)",
    8: "var(--font-size-small)",
    9: "var(--font-size-tiny)",
}

function operator_hold(targetButton) {
    for (let index = 0; index < math.length; index++) {
        if (math[index].flag) {
            math[index].flag = false
            targetButton.classList.remove('btn-orange-active')
        }
    }
}

function operators_color_hold(targetButton) {
    for (const operator of math) {
        if (operator.flag) {
            targetButton.classList.add('btn-orange-active')
        }
    }
}

function sizing() {
    for (let size in fontSizes) {
        if (result_value.length <= size) {
        result_label.style.fontSize = fontSizes[size]
        break;
        }
    }
}

function res(number) {
    if (number.toString().includes('.')) 
    {
        number = number.toString()
        index = number.indexOf('.')

        number = number.replace('.', ',')
        integer_number = number.slice(0, index)
        let temp_array = integer_number.split('')
        for (let index = temp_array.length - 3; index > 0; index -= 3) {
            temp_array.splice(index, 0, ' ')
        }
        integer_number = temp_array.join('')
        number = integer_number + number.slice(index, number.length)
    } 
    else 
    {
        let temp_array = number.split('')
        for (let index = temp_array.length - 3; index > 0; index -= 3) {
            temp_array.splice(index, 0, ' ')
        }
        number = temp_array.join('')
    }

    result_label.textContent = number
}
