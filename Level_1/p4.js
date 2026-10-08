function hasProperties(obj,key){
    return key in obj;
}
const student={
    name:"khushi",
    age:21
};
console.log(hasProperties(student,"name"));
console.log("=============================");


function hasProperty(obj,key){
    return obj.hasOwnProperty(key);
}
const student1={
    name:"khushi",
    age:21
};
console.log(hasProperty(student1,"name"));

console.log("=============================");


function hasProperty1(obj, key) {
    return Object.hasOwn(obj,key);
}

console.log(hasProperty1(student, "name")); 
console.log(hasProperty1(student, "city")); 