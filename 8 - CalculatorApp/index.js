const firstNumberElement = document.getElementById("first-number");
const secondNumberElement = document.getElementById("second-number");
const calculateBtn = document.getElementById("calculate-btn");

console.log("First Number Pointer: ", firstNumberElement);
console.log("Second Number Pointer: ", secondNumberElement);
console.log("calculateBtn", calculateBtn);

calculateBtn.onclick = () => {
    const firstNumberValue = Number(firstNumberElement.value);
    const secondNumberValue = Number(secondNumberElement.value);

    const multiply = firstNumberValue * secondNumberValue;
    const sum = firstNumberValue + secondNumberValue;
    const differ = firstNumberValue - secondNumberValue;
    const division = firstNumberValue / secondNumberValue;

    console.log(multiply, sum, differ, division);

    document.getElementById("zarb").innerHTML = "multiplier: " + multiply;
    document.getElementById("taghsim").innerHTML = "division: " + division;
    document.getElementById("tafrigh").innerHTML = "differ: " + differ;
    document.getElementById("jam").innerHTML = "sum: " + sum;
};

// Variable Declaration
// Before 2015
// var
// After ES6
// let or const

// Data Types
// number
// string
// boolean
// NaN -> Not a Number
// object & arrays
