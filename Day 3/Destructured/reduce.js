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
