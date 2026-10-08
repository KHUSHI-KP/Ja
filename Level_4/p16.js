const users = [
    { name: "Rahul", age: 17 },
    { name: "Priya", age: 22 },
    { name: "Amit", age: 16 },
    { name: "Sneha", age: 25 }
];

const adults = users.filter(user => user.age >= 18);

console.log(adults);