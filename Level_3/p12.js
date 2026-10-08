const cart = {
    item1: {
        name: "Laptop",
        price: 50000,
        quantity: 1
    },
    item2: {
        name: "Mouse",
        price: 1000,
        quantity: 2
    },
    item3: {
        name: "Keyboard",
        price: 2000,
        quantity: 1
    }
};
let total=0;
for(let item in cart){
    total=total+cart[item].price*cart[item].quantity;
}
console.log(total);