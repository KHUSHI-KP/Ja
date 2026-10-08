function charFrequency(str){
    const frequency={};
    str=str.toLowerCase();
    for(let char of str){
        if(char===" "){
            continue;
        }
        if(frequency[char]){
            frequency[char]++;
        }
        else{
            frequency[char]=1;
        }
    }
    return frequency;
}
console.log(charFrequency("KHUSHi khushi"));