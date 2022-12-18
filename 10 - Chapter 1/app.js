// Operators
// *
// /
// -
// +
// %

// Strings
// ''
// ""
// ``

let firstName = `Amirhosein ${32 * 232}`;
let lastName = "Paghi";
let fullName = firstName + " " + lastName;

// Boolean
// true
// false
let age = 24;

// === equal to
// == equal to

// !== -> not equal
// != -> not equal

// Whats the difference:
let ageAme = "50";

// Logical Operators
// && -> AND
// || -> OR
let isPaghiOld = false;
let isPaghisAuntOld = false;
// console.log(isPaghiOld || isPaghisAuntOld);
// console.log(isPaghiOld && isPaghisAuntOld);

// typecast Number();
// console.log("5" + 1);
// console.log("5" - 1);
// console.log(8 * null);

// console.log("five" + 1);
// console.log("five" * 2);
// undefined | null | NaN - not a number

// functions
// function declaration
// Functions with parameters and arguments
function isAsgharPedophile(asgharGFAge) {
    // Conditions
    if (asgharGFAge < 18) {
        console.log("Asghar yek pedophile e");
    } else {
        console.log("Asghar Pedophile nist");
    }
}
// function call
// isAsgharPedophile(15);

// function declaration
function calculateBill(hazine) {
    let maliat = 0.09;
    console.log("Calculating ...");
    const total = hazine * maliat + hazine;

    console.log("enghad pul bede lashi: ", total);
}

calculateBill(200);

// Loop
// let animals = ["ant", "bison", "cat", "duck", "elephant"];
// animals.forEach();
// function outputAnimalsName(name)

// p5js
function setup() {
    //
}
function draw() {
    //
}
