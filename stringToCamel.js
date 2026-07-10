// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

 


function toCamelCase(str){

  let arrOfStr = str.split(/[_ -]/);
  for(let i=1; i<arrOfStr.length; i++){
    let start = arrOfStr[i][0].toUpperCase();    
    let endPart = arrOfStr[i].slice(1, arrOfStr[i].length);   
    arrOfStr[i] = start+endPart;    
  }
  return arrOfStr.join('');
}

const strr = 'a_cat_is_kawaii';
console.log(toCamelCase(strr));
