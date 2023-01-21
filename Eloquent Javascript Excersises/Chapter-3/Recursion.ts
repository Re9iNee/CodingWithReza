// Define a recursive function isEven
// Function should accept only 1 parameter
// That parameter is positive and whole
function isEven(num: number): boolean {
    if (num === 0) return true;
    if (num === 1) return false;

    return isEven(num - 2);
}

console.log(isEven(50));
// expect: true
console.log(isEven(75));
// expect: false
