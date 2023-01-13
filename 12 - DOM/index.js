function calcAge() {
    console.log(this);

    return 2023 - this.birthYear;
}

const person = {
    firstName: "Amir",
    lastName: "Paghi",
    birthYear: 1998,
    calculateAge: calcAge,
};

const person2 = {
    firstName: "Reza",
    lastName: "Attarzadeh",
    birthYear: 1997,
    calculateAge: calcAge,
};

console.log(person.calculateAge());
console.log(person2.calculateAge());
