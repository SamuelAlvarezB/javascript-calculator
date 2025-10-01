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

function clearScreen() {
    screen.textContent = "";
}

function restoreButtons() {
    allButtons.forEach((button) => {
        button.disabled = false;
        button.style.backgroundColor = "";
    });

}

function restoreDecimalButton() {
    decimalButton.disabled = false;
}

let numA = 0;
let numB = 0;
let result = 0;
let operator = "";
let operatorCount = 0;
let equalPressed = false;
let existDecimal = false;

const screen = document.getElementById("screen");
const allButtons = document.querySelectorAll("button");
const decimalButton = document.getElementById("btnDecimal");
allButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        console.log(e.target.className);
        if (e.target.className === "btnDigit") {
            if (equalPressed) {
                clearScreen();
            }
            screen.textContent = screen.textContent + e.target.textContent;
            restoreButtons();
            equalPressed = false;
            existDecimal ? decimalButton.disabled = true : decimalButton.disabled = false;
        } else if (e.target.className === "btnOperator") {
            if (screen.textContent != "") {
                restoreButtons();
                e.target.style.backgroundColor = "orange";
                e.target.disabled = true;
                if (operatorCount === 0) {
                    numA = Number.parseFloat(screen.textContent);
                    operator = e.target.textContent;
                } else {
                    numB = Number.parseFloat(screen.textContent);
                    result = operate(numA, numB, operator);
                    numA = result;
                    console.log("Resultado: " + result);
                }
                console.log("numA: " + numA + " | numB: " + numB);
                clearScreen();
                existDecimal = false;
                operatorCount++;
                operator = e.target.textContent;
            }
        } else if (e.target.className === "btnEqual") {
            numB = Number.parseFloat(screen.textContent);
            result = operate(numA, numB, operator);
            screen.textContent = result;
            numA = screen.textContent;
            numB = 0;
            operatorCount = 0;
            equalPressed = true;
            restoreButtons();
            existDecimal = false;
        } else if (e.target.className === "btnCLR") {
            numA = 0;
            numB = 0;
            clearScreen();
            restoreButtons();
            existDecimal = false;
        } else if (e.target.className === "btnDecimal") {
            if (!existDecimal) {
                screen.textContent = screen.textContent + e.target.textContent;
                decimalButton.disabled = true;
                existDecimal = true;
            }
        } else if (e.target.className === "btnReturn") {
            if (!equalPressed) {
                screen.textContent = screen.textContent.replace(screen.textContent.charAt(screen.textContent.length - 1), "");
            }
        }
        console.log(numA + " | " + numB);
    })
})