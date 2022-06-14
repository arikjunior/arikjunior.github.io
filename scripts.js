let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

const calculatorScreen = document.querySelector(".calculator-screen")

const updateScreen = (number) => {
    calculatorScreen.value = number
}
// prevScreen
const prevScreen = document.querySelector('.prev-screen');
const updatePrevScreen = (operation) => {
    prevScreen.value = operation;
}
// Number Clicked
const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})




const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
}



// Perhitungan
const calculate = () => {
    let result = ''
    switch (calculationOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case '*':
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case '÷':
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        default:
            result = "0"
            break
    }
    currentNumber = result
    calculationOperator = ''
}

// Proses Perhitungan 
const equalSign = document.querySelector(".equal-sign")

equalSign.addEventListener("click", () => {
    // if (calculationOperator == undefined) {
    //     return calculationOperator = divide;
    // }
    updatePrevScreen(prevNumber + ' ' + calculationOperator + ' ' + currentNumber)
    calculate()
    updateScreen(currentNumber)
})

// Operator Clicked
const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        updatePrevScreen(currentNumber)
        inputOperator(event.target.value)
    })
})

// Percentage

const percentage = document.querySelector('.percentage');
percentage.addEventListener('click', () => {
    percentageOutput();
    updateScreen(currentNumber);
});

const percentageOutput = () => {
    let percent = '';
    percent = parseFloat(currentNumber) / 100;
    currentNumber = percent;
}


// Clear Button 
const clearBtn = document.querySelector(".all-clear")

clearBtn.addEventListener("click", () => {
    clearAll()
    updateScreen(currentNumber)
    updatePrevScreen("");
})

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = "0"
}


// Decimal Number

const decimal = document.querySelector(".decimal")

decimal.addEventListener("click", (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

inputDecimal = (dot) => {
    if (currentNumber.includes(".")) {
        return
    }
    currentNumber += dot
}

// Delete Number 

const deleteButton = document.querySelector(".delete")

deleteButton.addEventListener("click", () => {
    delNumber()
    updateScreen(currentNumber)
})

const delNumber = () => {
    currentNumber = currentNumber.toString().slice(0, -1)
    if (currentNumber == '') {
        return currentNumber = "0"
    }
}
