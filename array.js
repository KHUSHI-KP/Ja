// const arr=["user1","user2","user3"];
// arr["four"]="user4";
// // console.log(arr);
// // console.log(arr.length);

// // console.log(arr["four"]);
// for(let array of arr){
//     console.log(array);
// }
let student={
    name:"khushi",
    age:21,
}
// student.

const object = {};

Object.defineProperty(student, "foo", {
  value: 42,
enumerable: false,
});
console.log(Object.keys(student))
console.log(Object.getOwnPropertyNames(student))
// console.log(student);