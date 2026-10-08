
function findValue(obj,target){
    for(let key in obj){
        if(obj[key]===target){
            return true;
        }
        if(typeof obj[key] ==="object"&& obj[key]!=null){
            if(findValue(obj[key],target)){
                return true;
            }
        }
    }
    return false;
}


const data = {
    name: "John",
    address: {
        city: "Delhi",
        details: {
            zip: 110001
        }
    }
};

console.log(findValue(data, 110001));
console.log(findValue(data, "Mumbai"));