document.getElementById('mortgage_form').addEventListener('submit', calculateMortgage);

function calculateMortgage(event) {

    console.log('calculating mortgage');

    // Input values and variables

    const mortgageAmount = document.getElementById('mortgage_amount');
    const interestRate = document.getElementById('interest_rate');
    const yearsMortgage = document.getElementById('year');

    // Output values

    const totalMortgageCost = document.getElementById('total_cost');
    const monthlyRate = document.getElementById('monthly_rate');

    // Integers to strings.

    const principalMortgage = parseFloat(mortgageAmount.value);
    const interestCalculation = parseFloat(interestRate.value / 100);
    const monthCalculation = parseFloat(yearsMortgage.value * 12);

    // Calculating interest Rate - interest / 12;

    const interestRateCalc = interestCalculation/12

    // Calculating mortgage principal times interest rate - Numerator;

    const calculationPR = principalMortgage * interestRateCalc;
    console.log(calculationPR);

    // Calculating rate plus 1 in Numerator 
    const calculationOnePlusRate = 1 + (interestCalculation/12);
    console.log(calculationOnePlusRate);

    // Calculating rate the power in the Exponent - Numerator
    const calculationMonthsPower = Math.pow(calculationOnePlusRate, monthCalculation);
    console.log(calculationMonthsPower);

    // Calculating Denominator
    const calculationDenomPow = calculationMonthsPower - 1
    console.log(calculationDenomPow);

    // Numerator Calculation

    const calculationNumerFinal = calculationPR * calculationMonthsPower;
    console.log(calculationNumerFinal);

    // Final Calculation for Mortgage Payment

    const calculationFinal = calculationNumerFinal / calculationDenomPow;

    const calculateTotalMortgage = calculationFinal * monthCalculation;
    console.log(calculateTotalMortgage);

    if(isFinite(calculationFinal)){
        monthlyRate.value = calculationFinal.toFixed(2);
        totalMortgageCost.value = calculateTotalMortgage.toFixed(2);
    } else {
        checkNumbers("Numbers are not valid - please review inputs");
    }

    event.preventDefault();

}

function checkNumbers(message){
    // Creating a new Div for number errors
    const checkNumbersDiv = document.createElement('div');

    const mainCard = document.querySelector(".card");

    const mainTitle = document.querySelector(".title");



    // Adding a class for number errors and text details

    checkNumbersDiv.className = "alert alert-warning";

    textDetails = document.createTextNode(message);

    checkNumbersDiv.appendChild(textDetails);

    mainCard.insertBefore(checkNumbersDiv, mainTitle);

    setTimeout(removeErrorDiv, 5000)

}

function removeErrorDiv(){
    document.querySelector('.alert').remove();
}

