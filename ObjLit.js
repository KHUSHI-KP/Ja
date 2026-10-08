let person1={
    name:"khushi",
    age:21,
    
}
console.log(person1.name)
console.log(typeof(person1));
console.log("======================")

let person2=new Object();
person2.name="Divya";
console.log(person2.name)
console.log(typeof(person2));
console.log("======================")

function createObject(name, age) {
   let user = {
        name: name,
        age: age
    };

    return user;

}

let p1 = createObject("khushi", 21);
let p2 = createObject("Divya", 22);

console.log(p1);
console.log(p2);

console.log(typeof createObject);