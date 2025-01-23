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




//  for example
const number1  = [2,3,4,5,6]
const sum1 = number.reduce((accumulator , currval , index , array)=>{
  // return accumulator   2
  // return currval ;     6
  // return index ;      4
  return array ;      
  
  

})
console.log(sum1)
