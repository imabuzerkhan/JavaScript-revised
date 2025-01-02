// in javascript all the charachter are strings . chaye wo single characther oh ya bhaut sara

// * example of single chracter string
var singleChar = "c";
console.log(typeof(singleChar)) //* checking thetype of datatypes
console.log(singleChar)

// * exampleof multicharacter string

let multicharactrer = 'abuzer you are fool'
console.log(typeof(multicharactrer)) //* checking thetype of datatypes

console.log(multicharactrer)


// * templates literal string

let marks = 98;
let English = `The total marks of english is ${marks}`
console.log(English)

// * it is possibleto add numbers and sting

var num = 23;
console.log("the type of num is", typeof(num));
var letter = 'shayam';
var add = num + letter ;
console.log(add)
console.log("the type of add is", typeof(add));

// * length function in string
var Myname = `Mohammad 
abuzer  
khan`
var checking = Myname.length;
console.log(checking)