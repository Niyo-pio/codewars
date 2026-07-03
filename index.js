function pigLatin(string){
  const lowCas = string.toLowerCase();
  const vowels = 'aioue';
  const arr = lowCas.split('');
  const alphabet = "bcdfghjklmnpqrstvwxyz";

  for(let char of lowCas){
    if(!vowels.includes(char) && !alphabet.includes(char)){
        return null;
    } 
  }

  if(vowels.includes(lowCas[0])){
    return lowCas+'way';
  } else{
      const stringArr =  lowCas.split('');
      const portion = [];

      for(let i = 0; i < stringArr.length; i++){
           if(vowels.includes(stringArr[i])){
              break;
          }
          portion.push(stringArr[i]); 
          arr.splice(0, 1);   
       }

       return arr.join('')+portion.join('')+'ay';
  
}
  }


 
const word = 'iJ=OY';

console.log(pigLatin(word));

