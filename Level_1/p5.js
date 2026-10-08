const employees = {
    Rahul: 45000,
    Priya: 55000,
    Amit: 40000,
    Sneha: 70000
};

let highestSalary = 0;
let highestEmployee = "";

for (let employee in employees) {
    if (employees[employee] > highestSalary) {
        highestSalary = employees[employee];
        highestEmployee = employee;
    }
}

console.log(highestEmployee);
console.log(highestSalary);