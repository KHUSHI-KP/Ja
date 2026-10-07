
let studentName = "Khushi";
let studentId = 101;
let age = 20;
let course = "JavaScript";

let mark1 = 85;
let mark2 = 72;
let mark3 = 91;
let mark4 = 68;
let mark5 = 88;

let attendance = 82;
let courseFee = 75000;
let amountPaid = 30000;
let scholarship = 20;
let hostelRequired = true;


let totalMarks = mark1 + mark2 + mark3 + mark4 + mark5;

let average = totalMarks / 5;


let percentage = (totalMarks / 500) * 100;


let scholarshipAmount = courseFee * scholarship / 100;


let finalFee = courseFee - scholarshipAmount;


let remainingFee = finalFee - amountPaid;

let ageEligibility = age > 18;


let attendanceEligibility = attendance >= 75;


let result = percentage >= 40;

let scholarshipEligibility = percentage >= 75 && attendance >= 75;

let hostelStatus = hostelRequired ? "Hosteller" : "Day Scholar";


console.log("Total Marks:", totalMarks);
console.log("Average Marks:", average);
console.log("Percentage:", percentage + "%");
console.log("Scholarship Amount:", scholarshipAmount);
console.log("Fee After Scholarship:", finalFee);
console.log("Remaining Fee:", remainingFee);
console.log("Above 18:", ageEligibility);
console.log("Attendance at least 75%:", attendanceEligibility);
console.log("Passed:", result);
console.log("Scholarship Eligible:", scholarshipEligibility);
console.log("Hostel Status:", hostelStatus);