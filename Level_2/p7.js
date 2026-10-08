const user = {
    name: "Alice",
    age: 25,
    city: "Mumbai"
};

const arr=Object.entries(user);
console.log(arr);

const obj=Object.fromEntries(arr);
console.log(obj);