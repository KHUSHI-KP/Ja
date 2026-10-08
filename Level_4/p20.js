const products = [
    { name: "iPhone", category: "electronics", price: 70000 },
    { name: "Shirt", category: "clothing", price: 2000 },
    { name: "Laptop", category: "electronics", price: 60000 },
    { name: "Jeans", category: "clothing", price: 3000 }
];
const groupedProducts = products.reduce((result, product) => {

    if (!result[product.category]) {
        result[product.category] = [];
    }

    result[product.category].push(product);

    return result;

}, {});

console.log(groupedProducts);