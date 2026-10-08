function invert(obj){
    const inverted={};
    for(let key in obj){
        inverted[obj[key]]=key;

    }
    return inverted;
}
const person = {
    name: "John",
    age: 25,
    city: "Delhi"
};

console.log(invert(person));