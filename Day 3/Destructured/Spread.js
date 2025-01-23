// function Spread (username , ...number){
//     console.log(username , number)
// }
// Spread("abuzer" , 40, 10 ,50)

// ! spread operator
let a = [1,2,3,4,5,6,7,8,9,10]
let b = [...a , 11]
console.log(a)
console.log("----------------------------------")
console.log(b)

// speard 
let value = [1,2,3,4,6]
console.log(Math.min(...value))