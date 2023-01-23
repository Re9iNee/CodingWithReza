const person = {
    age: 2,
    nickName: "Paghi",
    hasBeenRaped: true,
    lastName: "Parmian",
    firstName: "Amirhosein",
    isVirgin: !this.hasBeenRaped,
};

const girlFriend = {
    age: 50,
    lastName: "Amini",
    isVirgin: undefined,
    nickName: "Arghanun",
    firstName: "Arghavan",
    hasBeenRaped: undefined,
};

// Copying Object
const copyOfPerson = Object.assign(person);

console.log(copyOfPerson);

// Mutation
// Adding Property
person.hasLongPeePee = true;

// Removing Property
delete person.firstName;

person.age++;
person.age = 24;

console.log(person);

const thaiGirl = Object.assign(
    person,
    girlFriend,
    { age: 24 },
    { likesAsghar: true }
);

console.log("Two People Object: ", thaiGirl);

// Array Of Objects
const bills = [
    { month: "january", year: 2022, price: 220 },
    {
        month: "februrary",
        year: 2021,
        price: 231,
    },
];

for (let bill of bills) {
    console.log(bill);
}

// Methods for Arrays
const numberOfBills = bills.length;
console.log("numberOfBills", numberOfBills);

const animals = ["ant", "bison", "cat", "duck", "elephant", "cat"];
// Searching in Array
console.log(animals.indexOf("cat"));
console.log(animals.indexOf("dragon"));

console.log(animals.lastIndexOf("cat"));

let whereTheCatsAt = [];
for (let index = 0; index <= animals.length; index++) {
    if (animals[index] === "cat") {
        whereTheCatsAt.push(index);
    }
}

console.log(whereTheCatsAt);

// Adding at the end of array
animals.push("dragon");

console.log(animals);

// Copying Array
const copyOfAnimals = animals.slice();

copyOfAnimals.push("Horse");
console.log(copyOfAnimals, animals);

// TODO: array.splice
