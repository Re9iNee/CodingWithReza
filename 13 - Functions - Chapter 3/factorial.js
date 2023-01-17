function factorial(n) {
    let result = n;

    while (n > 1) {
        result = result * --n;
    }

    return result;
}

console.log("Final Result", factorial(5));
