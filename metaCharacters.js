// .(dot)  charecter
// let text=" we learning javascript."
// let pattern=/l.a/g;
// let pat=/j.v/g; // if we give any thing between j and v except . it  will give null
// let result=text.match(pattern);
// let result1=text.match(pat);
// console.log(result);
// console.log(result1);


//The \w metacharacter matches word characters.  including numbers but not special chars. comes every letter in single quotes.

// let sentence=" We are learning  JavaScript 3456"
// let pattern=/\w/g;  // all chars will come separaring by ,s
// let result=sentence.match(pattern);
// console.log(result);


//The \W metacharacter matches non-word characters: like special   chars
// let sentence=" We are learning  JavaScript 3456 !@#$%^,.(){][]|"
// let pattern=/\W/g;  // all chars will come separaring by ,s
// let result=sentence.match(pattern);
// console.log(result);

// \d only for digits
// let sentence=" We are learning  345$%^ JavaScript 3456"
// let pattern=/\d/g;  // all chars will come separaring by ,s
// let result=sentence.match(pattern);
//  console.log(result);

//\D except numbers all will come.
// let sentence=" We are learning 345676#$%^ JavaScript 3456"
// let pattern=/\D/g;  // all chars will come separaring by ,s
// let result=sentence.match(pattern);
//  console.log(result);  // except digits all will come

//The \s metacharacter matches whitespace character.  total space-1;
// let sentence=" We are learning 345676#$%^ JavaScript 3456"
//  let pattern=/\s/g;  // all chars will come separaring by ,s
//  let result=sentence.match(pattern);
//   console.log(result);  // o/p  5 commas will com

// \S  no space counts. all chars will come by separate single quotes ans commas. same like above.


//The \b metacharacter matches at the beginning or end of a word.

// let sentence=" We are learning 345676#$%^ JavaScript 3456"
//  let pattern=/\bWe/g;  //begining  //we\b ending of we
//  let result=sentence.match(pattern);
//   console.log(result);


let sentence=" We are learning 345676#$%^ JavaScript 3456"
 let pattern=/\s/g;  
let result=sentence.match(pattern);
 console.log(result);
