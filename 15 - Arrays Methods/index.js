const huruf = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
];

hurufeJadid = huruf.map((harf) => harf.repeat(5));

console.log(hurufeJadid);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNumbers = numbers.map((num) => num * 2);
console.log(newNumbers);

const dividedNumbers = numbers.map((num) => num / 2);
console.log(dividedNumbers);

const hurufInUpperCase = huruf.map((harf) => harf.toUpperCase());
console.log(hurufInUpperCase);
