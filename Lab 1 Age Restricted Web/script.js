function checkAge() {
    // get the user input from the input field with the id "age-input"
    const ageInput = document.getElementById("age-input").value; // type string

    // convert this user input to a number
    const age = Number(ageInput); // type number

    let errorMessage = "";

    if (isNaN(age)) {
        errorMessage = "Input value is not a number. Please enter a valid number"
    } else if (age < 0) {
        errorMessage = "Age is not a positive value. Please enter a positive value"
    } else if (age < 18) {
        errorMessage = "You are too young to view this web page."
    } else if (age > 120) {
        errorMessage = "You are too old to view this web page."
    } else if (!Number.isInteger(age)) {
        errorMessage = "Number is not a valid integer."
    }

    if (errorMessage === "") {
        // no error message, so the user input is valid
        // make the main content visible
        document.getElementById("main-content").style.visibility = "visible";
        
        // hide the error content
        document.getElementById("error-content").style.visibility = "hidden";
    } else {
        // there is an error message, so the user input is invalid
        // display the error message by setting the innerHTML of the element with id "error-message"
        document.getElementById("error-message").innerHTML = errorMessage;

        document.getElementById("main-content").style.visibility = "hidden";

        document.getElementById("error-content").style.visibility = "visible";
    }
}