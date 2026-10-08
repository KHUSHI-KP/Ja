function countProperties(obj){
    return Object.keys(obj).length;
}

console.log(countProperties({
name: "John",
age: 25,
city: "Delhi"
 }));

 console.log(countProperties({
name: "John",
city: "Delhi"
 }));