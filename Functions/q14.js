function calculate(a,b,operator){
    if(operator==='+'){
        return a+b;    }

       

        else if(operator==='-'){
        return a-b;    }

         else if(operator==='*'){
        return a*b;    }
         else if(operator==='/'){
            if(b==0){
                return console.log("Can't divide by zero")
            }
        return a/b;    }
        else{
            console.log("Invalid Operator");
        }


}
console.log(calculate(2,2,'+'));
console.log(calculate(2,6,'*'));
console.log(calculate(2,2,'-'));
console.log(calculate(2,2,'/'));
console.log(calculate(2,0,'/'));
console.log(calculate(2,2,'@'));