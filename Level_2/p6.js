const marks={
    math:85,
    science:90,
    english:78,
    computer:95
};
let total=0;
let highest=0;
let lowest=Infinity;

for(subject in marks){
    total=total+marks[subject];
    if(marks[subject]>highest){
        highest=marks[subject];
    }
    if(marks[subject]<lowest){
        lowest=marks[subject];
    }
}
let avg=total/Object.keys(marks).length;

console.log("Total:", total);
console.log("Average:", avg);
console.log("Highest:", highest);
console.log("Lowest:", lowest);