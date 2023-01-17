function Min(...numbers) {
    let minValue = Infinity;

    for (let num of numbers) {
        if (num < minValue) minValue = num;
    }

    return minValue;
}

const result = Min(121, 123, 213213213, 12312, 123, 10, 213213, 123, 123, 32);
console.log(result);
