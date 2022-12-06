const age = 24;
const firstName = "Amirhosein";
const lastName = "Paghi";

let PaghisBrain;
const IQ = null;

const person = {
    firstName: "Amirhosein",
    lastName: "Parmian",
    nickname: "Paghi",
    age: 24,
    IQ: 10,
    isPregnant: true,
    brain: undefined,
    scores: [10, "20", { name: "ANE" }, [2, 1, 3]],
};

// scores: {0: 10, 1: "20", ...}

console.log(typeof age);
console.log(typeof firstName, typeof lastName);
console.log(typeof PaghisBrain);
console.log(typeof IQ);

console.log(
    person.firstName + " " + person.lastName + " has an iq of " + person.IQ
);

console.log(typeof person.scores);
console.log(typeof person.isPregnant);

console.log(person.scores.reduce((curr, acc) => curr + acc, 0));
