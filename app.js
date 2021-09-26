document.getElementById('mortgage_form').addEventListener('submit', calculateMortgage);

function calculateMortgage(event) {

    console.log('calculating mortgage');

    // Input values and variables

    const mortgageAmount = document.getElementById('mortgage_amount');
    const interestRate = document.getElementById('interest_rate');
    const yearsMortgage = document.getElementById('years');

    // Output values

    const totalMortgageCost = document.getElementById('totalmortgage_cost');
    const monthlyRate = document.getElementById('monthly_rate');

    // Integers to strings.

    const principalMortgage = parseFloat(mortgageAmount.value);
    const interestCalculation = parseFloat(interestRate.value / 100);
    const monthCalculation = parseFloat(yearsMortgage.value * 12);

    // Calculating interest Rate;

    const interestRateCalc = interestCalculation/12

    // Calculating mortgage principal times interest rate;

    const calculationOne = principalMortgage * interestRateCalc;
    console.log(calculationOne);

    // Calculating rate plus 1 in numerator 
    const calculationTwo = 1 + (interestCalculation/12);
    console.log(calculationTwo);

    // Calculating rate the power in the Exponent - Numerator - Denomitor uses same
    const calculationThree = Math.pow(calculationTwo, monthCalculation);
    console.log(calculationThree);

    // Calculating denominator calc
    const calculationFour = calculationThree - 1
    console.log(calculationFour);

    //

    const calculationFive = calculationOne * calculationThree;
    console.log(calculationFive);

    //

    const calculationSix = calculationFive / calculationFour;

    console.log(calculationSix);

    monthlyRate.value = calculationSix;

    event.preventDefault();

}

