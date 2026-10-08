const people = [
    { name: "Rahul", age: 20 },
    { name: "Priya", age: 21 },
    { name: "Amit", age: 20 },
    { name: "Sneha", age: 21 },
    { name: "John", age: 22 }
];
const grouped = people.reduce((result, person) => {

    if (!result[person.age]) {
        result[person.age] = [];
    }

    result[person.age].push(person.name);

    return result;

}, {});

console.log(grouped);