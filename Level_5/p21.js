const obj1 = {
    name: "John",
    age: 25,
    city: "Delhi"
};

const obj2 = {
    age: 30,
    country: "India"
};
const merged = { ...obj1, ...obj2 };

console.log(merged);