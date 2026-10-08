const products = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 30000 },
    { name: "Tablet", price: 20000 },
    { name: "Monitor", price: 15000 }
];
const lowToHigh = [...products].sort((a, b) => a.price - b.price);

console.log(lowToHigh);

const highToLow = [...products].sort((a, b) => b.price - a.price);

console.log(highToLow);