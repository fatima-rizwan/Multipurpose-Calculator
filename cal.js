
const operation = document.getElementById("operation");
const inputSection = document.getElementById("input-section");
const calculateBtn = document.getElementById("calculate-btn");
const result = document.getElementById("result");

// Display inputs according to selected operation

function showInputs() {

    let choice = operation.value;

    result.innerText = "Result will appear here";

    switch (choice) {

        case "arithmetic":

            inputSection.innerHTML = `
                <label>First Number</label>
                <input type="number" id="num1" placeholder="Enter first number">

                <label>Second Number</label>
                <input type="number" id="num2" placeholder="Enter second number">

                <label>Select Operator</label>
                <select id="operator">
                    <option value="+">Addition (+)</option>
                    <option value="-">Subtraction (-)</option>
                    <option value="*">Multiplication (*)</option>
                    <option value="/">Division (/)</option>
                </select>
            `;
            break;

        case "currency":

            inputSection.innerHTML = `
                <label>Enter Amount</label>
                <input type="number" id="amount" placeholder="Enter amount">

                <label>Conversion</label>
                <select id="conversion">
                    <option value="usd-pkr">USD to PKR</option>
                    <option value="pkr-usd">PKR to USD</option>
                </select>
            `;
            break;

        case "weight":

            inputSection.innerHTML = `
                <label>Enter Weight</label>
                <input type="number" id="weight" placeholder="Enter weight">

                <label>Conversion</label>
                <select id="conversion">
                    <option value="kg-g">KG to Grams</option>
                    <option value="g-kg">Grams to KG</option>
                </select>
            `;
            break;

        case "temperature":

            inputSection.innerHTML = `
                <label>Enter Temperature</label>
                <input type="number" id="temperature" placeholder="Enter temperature">

                <label>Conversion</label>
                <select id="conversion">
                    <option value="c-f">Celsius to Fahrenheit</option>
                    <option value="f-c">Fahrenheit to Celsius</option>
                </select>
            `;
            break;
    }
}

// Perform calculation

function calculate() {

    let choice = operation.value;
    let answer;

    switch (choice) {

        case "arithmetic":

            let num1 = Number(document.getElementById("num1").value);
            let num2 = Number(document.getElementById("num2").value);
            let operator = document.getElementById("operator").value;

            if (document.getElementById("num1").value === "" ||
                document.getElementById("num2").value === "") {
                result.innerText = "Please enter both numbers";
                return;
            }

            if (operator === "/" && num2 === 0) {
                result.innerText = "Cannot divide by zero";
                return;
            }

            switch (operator) {
                case "+":
                    answer = num1 + num2;
                    break;

                case "-":
                    answer = num1 - num2;
                    break;

                case "*":
                    answer = num1 * num2;
                    break;

                case "/":
                    answer = num1 / num2;
                    break;
            }
            break;

        case "currency":

            let amount = Number(document.getElementById("amount").value);
            let currency = document.getElementById("conversion").value;

            if (document.getElementById("amount").value === "") {
                result.innerText = "Please enter an amount";
                return;
            }

            const exchangeRate = 276.60;

            if (currency === "usd-pkr") {
                answer = (amount * exchangeRate).toFixed(2) + " PKR";
            } else {
                answer = (amount / exchangeRate).toFixed(2) + " USD";
            }
            break;

        case "weight":

            let weight = Number(document.getElementById("weight").value);
            let weightType = document.getElementById("conversion").value;

            if (document.getElementById("weight").value === "") {
                result.innerText = "Please enter weight";
                return;
            }

            if (weightType === "kg-g") {
                answer = weight * 1000 + " Grams";
            } else {
                answer = weight / 1000 + " KG";
            }
            break;

        case "temperature":

            let temp = Number(document.getElementById("temperature").value);
            let tempType = document.getElementById("conversion").value;

            if (document.getElementById("temperature").value === "") {
                result.innerText = "Please enter temperature";
                return;
            }

            if (tempType === "c-f") {
                answer = (temp * 9 / 5 + 32).toFixed(2) + " °F";
            } else {
                answer = ((temp - 32) * 5 / 9).toFixed(2) + " °C";
            }
            break;
    }

    result.innerText = "Result: " + answer;
}

// Event Listeners

operation.addEventListener("change", showInputs);

calculateBtn.addEventListener("click", calculate);

// Initial display

showInputs();
