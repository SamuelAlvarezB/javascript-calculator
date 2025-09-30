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
            add(a, b);
            break;
        case "-":
            subtract(a, b);
            break;
        case "*":
            multiply(a, b);
            break;
        case "/":
            divide(a, b);
            break;
    }
}

let numA = 0;
let numB = 0;
let operator = "";

const screen = document.getElementById("screen");
const allButtons = document.querySelectorAll("button");
allButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.textContent != "CLR" && e.target.textContent != "=") {
            screen.textContent = screen.textContent + e.target.textContent;
        }
    })
})