function addition() {
    const numberInput = document.getElementById("number-input").value;
    const number2Input = document.getElementById("number2-input").value;

    const num = Number(numberInput);
    const num2 = Number(number2Input);

    let errorMessage = "";
    let output = 0;

    if (num === "" || num2 === "") {
        errorMessage = "Please fill the boxes."
    } else if (isNaN(num)) {
        errorMessage += "Input number 1 is not a number. Please enter a valid number.";
    } else if (isNaN(num2)) {
        errorMessage += "Input number 2 is not a number. Please enter a valid number.";
    }

    if (errorMessage === "") {
        document.getElementById("output-content").style.visibility = "visible";
        document.getElementById("error-content").style.visibility = "hidden";

        output = num + num2;

        if (output < 0) {
            document.getElementById("output").style.color = "red";
        } else {
            document.getElementById("output").style.color = "black";
        }

        document.getElementById("output").innerHTML = output;
    } else {
        document.getElementById("error-message").innerHTML = errorMessage;
        document.getElementById("error-content").style.visibility = "visible";
        // document.getElementById("output-content").style.visibility = "hidden";
    }
}

function subtract() {
    const numberInput = document.getElementById("number-input").value;
    const number2Input = document.getElementById("number2-input").value;

    const num = Number(numberInput);
    const num2 = Number(number2Input);

    let errorMessage = "";
    let output = 0;

    if (num === "" || num2 === "") {
        errorMessage = "Please fill the boxes."
    } else if (isNaN(num)) {
        errorMessage += "Input number 1 is not a number. Please enter a valid number.";
    } else if (isNaN(num2)) {
        errorMessage += "Input number 2 is not a number. Please enter a valid number.";
    }

    if (errorMessage === "") {
        document.getElementById("output-content").style.visibility = "visible";
        document.getElementById("error-content").style.visibility = "hidden";

        output = num - num2;

        if (output < 0) {
            document.getElementById("output").style.color = "red";
        } else {
            document.getElementById("output").style.color = "black";
        }

        document.getElementById("output").innerHTML = output;
    } else {
        document.getElementById("error-message").innerHTML = errorMessage;
        document.getElementById("error-content").style.visibility = "visible";
        // document.getElementById("output-content").style.visibility = "hidden";
    }
}

function multiply() {
    const numberInput = document.getElementById("number-input").value;
    const number2Input = document.getElementById("number2-input").value;

    const num = Number(numberInput);
    const num2 = Number(number2Input);

    let errorMessage = "";
    let output = 0;

    if (num === "" || num2 === "") {
        errorMessage = "Please fill the boxes."
    } else if (isNaN(num)) {
        errorMessage += "Input number 1 is not a number. Please enter a valid number.";
    } else if (isNaN(num2)) {
        errorMessage += "Input number 2 is not a number. Please enter a valid number.";
    }

    if (errorMessage === "") {
        document.getElementById("output-content").style.visibility = "visible";
        document.getElementById("error-content").style.visibility = "hidden";

        output = num * num2;

        if (output < 0) {
            document.getElementById("output").style.color = "red";
        } else {
            document.getElementById("output").style.color = "black";
        }

        document.getElementById("output").innerHTML = output;
    } else {
        document.getElementById("error-message").innerHTML = errorMessage;
        document.getElementById("error-content").style.visibility = "visible";
        // document.getElementById("output-content").style.visibility = "hidden";
    }
}

function divide() {
    const numberInput = document.getElementById("number-input").value;
    const number2Input = document.getElementById("number2-input").value;

    const num = Number(numberInput);
    const num2 = Number(number2Input);

    let errorMessage = "";
    let output = 0;

    if (num === "" || num2 === "") {
        errorMessage = "Please fill the boxes."
    } else if (isNaN(num)) {
        errorMessage += "Input number 1 is not a number. Please enter a valid number.";
    } else if (isNaN(num2)) {
        errorMessage += "Input number 2 is not a number. Please enter a valid number.";
    } else if (num2 === 0) {
        errorMessage += "Number 2 is a zero, cannot divide by zero. ";
    }

    if (errorMessage === "") {
        document.getElementById("output-content").style.visibility = "visible";
        document.getElementById("error-content").style.visibility = "hidden";
        
        output = num / num2;

        if (output < 0) {
            document.getElementById("output").style.color = "red";
        } else {
            document.getElementById("output").style.color = "black";
        }

        document.getElementById("output").innerHTML = output;
    } else {
        document.getElementById("error-message").innerHTML = errorMessage;
        document.getElementById("error-content").style.visibility = "visible";
        // document.getElementById("output-content").style.visibility = "hidden";
    }
}



function power() {
    const numberInput = document.getElementById("number-input").value;
    const powerInput = document.getElementById("number2-input").value;

    const num = Number(numberInput);
    const pow = Number(powerInput);

    let errorMessage = "";
    let output = 1;

    if (num === "" || pow === "") {
        errorMessage = "Please fill the boxes."
    } else if (isNaN(num)) {
        errorMessage += "Input number is not a number. Please enter a valid number.";
    } else if (isNaN(pow)) {
        errorMessage += "Input power is not a number. Please enter a valid number.";
    }

    if (errorMessage === "") {
        document.getElementById("output-content").style.visibility = "visible";
        document.getElementById("error-content").style.visibility = "hidden";

        if (pow > 0) {
            for (let i = 0; i < pow; i++) {
                output = output * num;
            }
        } else if (pow === 0) {
            output = 1;
        } else {
            let positivePow = pow * (-1);
            let tempNum = 1;
            for (let i = 0; i < positivePow; i++) {
                tempNum = tempNum * num;
            }
            output = 1 / tempNum;
        }

        if (output < 0) {
            document.getElementById("output").style.color = "red";
        } else {
            document.getElementById("output").style.color = "black";
        }

        document.getElementById("output").innerHTML = output;

    } else {
        document.getElementById("error-message").innerHTML = errorMessage;
        document.getElementById("error-content").style.visibility = "visible";
        // document.getElementById("output-content").style.visibility = "hidden";
    }
}

function clearFields() {
    document.getElementById("output").innerHTML = "";
    // document.getElementById("output-content").style.visibility = "hidden";
    document.getElementById("error-content").style.visibility = "hidden";
    document.getElementById("number-input").value = "";
    document.getElementById("number2-input").value = "";
}