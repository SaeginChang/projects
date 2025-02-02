function checkAge() {
    const ageInput = document.getElementById('age-input').value;

    const age = Number(ageInput);

    let errorMessage = "";

    // if age not a number
    if (typeof age !== "number") {
        errorMessage = "Please enter a valid age";
    } else if (age % 1 !== 0) {
        errorMessage = "Please enter a valid age";
    } else if (age <= 0) {
        errorMessage = "Please enter a positive age";
    } else if (age < 18) {
        errorMessage = "Please turn at least 18 years old";
    } else if (age > 120) {
        errorMessage = "Age must be less than 120";
    } else {
        errorMessage = "";
    }

    if (errorMessage === "") {
        document.getElementById("main-content").style.visibility = "visible";

        document.getElementById("error-message").style.visibility = "hidden";
        document.getElementById("error-content").style.visibility = "hidden";
    } else {
        document.getElementById("error-message").innerHTML = errorMessage;
        document.getElementById("main-content").style.visibility = "hidden";
        document.getElementById("error-content").style.visibility = "visible";
        document.getElementById("error-message").style.visibility = "visible";
    }

}
