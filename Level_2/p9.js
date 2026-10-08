function wordFreq(Sentence){
    const freq={};
    Sentence=Sentence.toLowerCase();
    const words=Sentence.split(" ");
    for(let word of words){
        if(freq[word]){
            freq[word]++;
        }
        else{
            freq[word]=1;
        }
    }
    return freq;
}
console.log(wordFreq("khushi khushi diviya chaithra darshan darshan"))