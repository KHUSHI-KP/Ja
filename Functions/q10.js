function calculateDiscount(price,discount){
    return price - (price*discount/100);
}
console.log(calculateDiscount(1000, 20));
console.log(calculateDiscount(1200, 20));
console.log(calculateDiscount(5000, 20));