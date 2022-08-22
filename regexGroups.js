// [xxx] group model
// let myText=" here am writing anything i want"
// let pattern=/[amwr]/g;  /// here we can write what ever we want but dont give spacwe it won't consider.
// let output=myText.match(pattern);
// console.log(output);


// ^ means not include chars.
// let myWords="I don't 34 34 6 6 ."
// let myPattern=/[^A-z]/g;
// let myResult=myWords.match(myPattern);
// console.log(myResult); // o/p no alphabets will return


// let myNum="345 6543 64534 9 10 Mahesh badankurhti"
// let myPattern=/[5-9]/g;
// let myResult=myNum.match(myPattern);
// console.log(myResult); //o/p all numbers between 5 to 9 will com not chars.


// let myNum="345 6543 64534 9 10 Mahesh badankurhti"
// let myPattern=/[^5-9]/g;
// let myResult=myNum.match(myPattern);
// console.log(myResult);// except 5 to 9 all numbers and chars will come  in output


//The (x|y) expression is used to find any of the alternatives specified.

let myExpression=" CGCS,Cgcs,Mahesh,MAhesh,Cgcs,MAHESH,"
let myPattern=/(Cgcs|Mahesh)/g;
let myResult=myExpression.match(myPattern);
console.log(myResult); // o/p  will come either like myPattern





