// display w colors
function displayResult(result) {
    const output = document.getElementById("output");
    output.innerHTML = String(result);

    // color for neg result
    if (result < 0) {
        output.style.color = "red";
    } else {
        output.style.color = "black";
    }
}

// adding function
function myAdd() {
    const num1 = parseFloat(document.getElementById("first_number").value);
    const num2 = parseFloat(document.getElementById("second_number").value);
    const result = num1 + num2;
    displayResult(result);
}

// subtracting function
function subtract() {
    const num1 = parseFloat(document.getElementById("first_number").value);
    const num2 = parseFloat(document.getElementById("second_number").value);
    const result = num1 - num2;
    displayResult(result);
}

// multiplying function
function multiply() {
    const num1 = parseFloat(document.getElementById("first_number").value);
    const num2 = parseFloat(document.getElementById("second_number").value);
    const result = num1 * num2;
    displayResult(result);
}

// dividing function
function divide() {
    const num1 = parseFloat(document.getElementById("first_number").value);
    const num2 = parseFloat(document.getElementById("second_number").value);
    // cannot divide by zero
    if (num2 === 0) {
        displayResult("Can't divide by zero")
        return;
    }
    const result = num1 / num2;
    displayResult(result);
}

// power function
function power() {
    const num1 = parseFloat(document.getElementById("first_number").value);
    const num2 = parseFloat(document.getElementById("second_number").value);
    let result = 1;
    for (let i = 0; i < Math.abs(num2); i++) {
        result *= num1;
    }
    // for negative powers
    if (num2 <0) {
        result = 1 / result;
    }
    displayResult(result);
}

// clear function
function clearCalculator() {
    document.getElementById("first_number").value = "";
    document.getElementById("second_number").value = "";
    document.getElementById("output").innerHTML = "";
    // make input disappear
    document.getElementById("output").style.color = "transparent";
}