var screenResult = 0;
var input1 = "";
var input2 = "";

document.getElementById('output').innerHTML = screenResult;

function numberButton(number) {
    input1 = input1 + number.toString();
    console.log(input1)
    screenResult = input1;
    document.getElementById('output').innerHTML = screenResult;
}

function clearButton() {
    screenResult = 0;
    input1 = "";
    input2 = "";
    document.getElementById('output').innerHTML = screenResult;
}

function operationButton(operationInput) {
    input2 = parseInt(screenResult);
    input1 = "";
    operation = operationInput;
}

function operate() {
    input1 = parseInt(screenResult);

    if (operation === "+") {
        screenResult = input1 + input2;
        document.getElementById('output').innerHTML = screenResult;
    }

    if (operation === "-") {
        screenResult = input2 - input1;
        document.getElementById('output').innerHTML = screenResult;
    }

    if (operation === "*") {
        screenResult = input1 * input2;
        document.getElementById('output').innerHTML = screenResult;
    }

    if (operation === "÷") {
        if (input1 === 0) {
            console.log(input1)
            screenResult = "Can't divide by zero";
            document.getElementById('output').innerHTML = screenResult;
            return;
        }
        screenResult = input2 / input1;
        document.getElementById('output').innerHTML = screenResult;
    }
}