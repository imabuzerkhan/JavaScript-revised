//  for example
const number  = [2,3,4,5,6]
const sum = number.reduce((accumulator , currval)=>{
  return accumulator + currval;
  //      0         +  2    = 2
  //      2     +     3  =  5
  //      5    +     4  =  9 
  //    9   +      5  =  14
  //  14  +      6  =  20
  

})
console.log(sum)




// const number1 = [2, 3, 4, 5, 6];
// const sum1 = number1.reduce((accumulator, currval, index, array) => {
//   console.log("Accumulator:", accumulator);
//   console.log("Current Value:", currval);
//   console.log("Index:", index);
//   console.log("Array:", array);
//   console.log("----------------");
//   return accumulator + currval; // Yeh zaroori hai accumulator ko update karne ke liye
// }, 0); // Initial value = 0
// console.log("Final Sum:", sum1);


// reduced with string
const fruit = ["banana" , "apple", "banana" , "pinapple ", "apple"]
constfruitcount = fruit.reduce((acc , curval)=>{
  acc[curval] = (acc[curval] || 0) + 1 ;
  console.log(acc[curval]);
  console.log("----------------");
  return acc;

}, {})
console.log(constfruitcount)
