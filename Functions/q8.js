function checkNumber(num){
    if(num<0){
       return console.log("Negative");
    }
    else if(num==0){
        return console.log("Zero");

    }
    else{
        return console.log("Positive");
    }
}
checkNumber(4);
checkNumber(9);
checkNumber(-2);
checkNumber(0);
checkNumber(-8);