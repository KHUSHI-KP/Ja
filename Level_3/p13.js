const students = {
    rahul: {
        age: 20,
        marks: 85
    },
    priya: {
        age: 21,
        marks: 92
    },
    amit: {
        age: 19,
        marks: 67
    },
    sneha: {
        age: 22,
        marks: 95
    }
};
for(let stu in students){
    if(students[stu].marks>80){
        console.log(stu);
    }
}