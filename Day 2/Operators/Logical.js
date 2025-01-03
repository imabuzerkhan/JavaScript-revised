//  logical operator

// ! Start from And operator
// * for example it denotes with (&)
// ? if both value are true then it will return true oterwise it return false

let a = 23;
let b = 10 ;
let c = 12 ;

if(a == b && b > c){
  console.log("a is the grater number")
}else{
  console.log("Both value are not true that why its return false")
}


// ! Start from or operator
// * for example it denotes with (||)
// ? if one value are true then it will return true 

let d = 23;
let e = 10 ;
let f = 12 ;

if(d == e || e < f){
  console.log("It return true because one value is true")
}else{
  console.log("both value are false that why its return false")
}

// ! Not operator
// * it make true to false and false to true and its denotes with (!)

let k = 20 ;
let j = 23 ;

if(k != j){
  console.log(true)
}else{
  console.log("false")
}