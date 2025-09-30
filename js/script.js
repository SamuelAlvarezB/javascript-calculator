function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, operator) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
    }
}

let numA = 0;
let numB = 0;
let result = 0;
let operator = "";
let operatorCount = 0;

const screen = document.getElementById("screen");
const allButtons = document.querySelectorAll("button");
allButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        console.log(e.target.className);
        if (e.target.className === "btnDigit") {
            screen.textContent = screen.textContent + e.target.textContent;
        } else if (e.target.className === "btnOperator") {
            allButtons.forEach((button) => button.style.backgroundColor = "");
            e.target.style.backgroundColor = "orange";
            if (operatorCount === 0) {
                numA = Number.parseFloat(screen.textContent);
                operator = e.target.textContent;
            } else {
                numB = Number.parseInt(screen.textContent);
                result = operate(numA, numB, operator);
                numA = result;
                console.log("Resultado: " + result);
            }
            console.log("numA: " + numA + " | numB: " + numB);
            screen.textContent = "";
            operatorCount++;
            operator = e.target.textContent;
        } else if (e.target.className === "btnEqual") {
            numB = Number.parseInt(screen.textContent);
            result = operate(numA, numB, operator);
            screen.textContent = result;
            numA = screen.textContent;
            numB = 0;
            operatorCount = 0;
            allButtons.forEach((button) => button.style.backgroundColor = "");
        }
    })
})