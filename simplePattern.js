// matching word
let sentence=" we are learning Javascript.In javascript we are learning Regex";
let pattern1=/learning/gi;

let result1=sentence.match(pattern1);
console.log(result1,result1.length);

let find=sentence.search("javascript");
console.log(find);