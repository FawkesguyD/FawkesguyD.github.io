const result_label = document.getElementById('res')
const btn_group = document.getElementById('btn-group')

let result_value = '0'
let minus_flag = false


console.log('-2' / 100)
btn_group.onclick = function(event) {
    if (event.target.dataset.index) {
        if (result_value == '0') {
            result_value = ''
        }
        result_value += event.target.dataset.index
    }

    if (event.target.dataset.type == 'ac') {
        result_value = '0'
    }
    
    if (event.target.dataset.type == 'plusMinus') {
        minus_flag = !minus_flag
        if (minus_flag) {
            result_value = '-' + result_value
        } else {
            result_value = result_value.replace(/-/g, '')
        }
    }
    
    if (event.target.dataset.type == 'percent') {
        result_value = result_value / 100
    }

    if (result_value != '0') {
         document.getElementById('ac').textContent = "C"
    } else {
        document.getElementById('ac').textContent = "AC"
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
