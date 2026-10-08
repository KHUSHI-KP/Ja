let student ={
    name:"khushi",
    age:21,
    course:"Full Stack",
    isGraduated:true
};

console.log(student.name);
console.log(student.course);
student.age=22;
console.log(student.age);
student.city="bnglr";
console.log(student.city);
delete student.isGraduated;
console.log(student);