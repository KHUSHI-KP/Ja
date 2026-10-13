function canVote(age){
    if(age>=18){
        return true;
    }
    else{
        return false;
    }
}
console.log(canVote(6));
console.log(canVote(89));
console.log(canVote(18));
console.log(canVote(10));