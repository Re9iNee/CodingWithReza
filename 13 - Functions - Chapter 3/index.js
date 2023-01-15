/* ESLINT-DISABLE */
const kossherKeBikhialShe = "";

// Define a function
// es5 <
// ESCMASCRIPT 2015
function sayHello_One() {
    return "Hello Motherfucker";
}
// es6 >
// Arrow Functions
const sayHello_Two = () => "Hello Motherfucker";
const sayHello_Three = () => {
    return "Hello Motherfucker";
};
let sayHello_Four = () => "Hello Motherfucker";

// Calling a function
sayHello_One();

// Binding & Scopes
const sayHello_Five = sayHello_One;
console.log(sayHello_Five());

// getting Arguments in a function
function square_one(x) {
    return x * x;
}

const square_two = (x) => x * x;
const square_three = (x) => x * x;

// call
console.log(square_three(2));

// call stack
function greet(who) {
    console.log("Hello" + " " + who);
}

greet("Paghi");
console.log("Bye");

// optional arguments
function square_four(x) {
    return x * x;
}

console.log(square_four(4, 2));

function multiply(x, y) {
    return x * y;
}
multiply(2, 2);

function divide(x, y = 1) {
    return x / y;
}
console.log(divide(2, 10));
console.log(divide(2));
console.log(divide(2, 100));

// closure
function wrapValue(n) {
    let local = n;
    return () => local;
}
let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);

console.log(wrap1());
console.log(wrap2());

// closure
function multiplier(factor) {
    return (number) => number * factor;
}
const twice = multiplier(2);

console.log(twice(10));
