// script.js

function checkMathAnswer() {
    const answer = document.getElementById('math-answer').value;
    const feedback = document.getElementById('math-feedback');
    if (answer == 6912) {
        feedback.textContent = "Correct! Well done!";
    } else {
        feedback.textContent = "Oops! Try again.";
    }
}

function checkStatsAnswer() {
    const answer = document.getElementById('stats-answer').value;
    const feedback = document.getElementById('stats-feedback');
    if (answer == "72") {
        feedback.textContent = "Correct!";
    } else {
        feedback.textContent = "Try again!";
    }
}

function showSecretMessage() {
    const secret = document.getElementById('secret-message');
    if (secret.classList.contains("hidden")) {
        secret.classList.remove("hidden");
    } else {
        secret.classList.add("hidden");
    }
}

function checkPythonCode() {
    const userCode = document.getElementById('python-code').value;
    const output = document.getElementById('python-output');
    if (userCode.includes('print') && userCode.includes("Mother's Day")) {
        output.textContent = "Code is correct! Output: Happy Mother's Day!";
    } else {
        output.textContent = "Oops, try again.";
    }
}
