function range(start, end, step) {
    const resultArray = [];

    for (let index = start; index <= end; index = index + step) {
        resultArray.push(index);
    }
    return resultArray;
}

function sum(arr) {
    return arr.reduce((curr, acc) => curr + acc, 0);
}

console.log(sum(range(1, 10, 1)));
