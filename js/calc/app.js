const result = document.getElementById('result')
const number_1 = document.getElementById('num1')
const number_2 = document.getElementById('num2')
const submitBtn = document.getElementById('calculate')
const addBtn = document.getElementById('plus')
const subtractBtn = document.getElementById('minus')
let action = '+'

addBtn.addEventListener('click', () => {
    action = '+'
    submitBtn.textContent = 'Add'
})

subtractBtn.addEventListener('click', () => { 
    action = '-'
    submitBtn.textContent = 'Subtract'
})

submitBtn.addEventListener('click', () => { 
    if (action == '+') {
        debugger
        result.textContent = number_1.value + number_2.value
    }
    if (action == '-'){
        result.textContent = Number(number_1.value) - Number(number_2.value)
    }
})