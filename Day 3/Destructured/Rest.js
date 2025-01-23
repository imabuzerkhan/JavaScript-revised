// value ko ikkatha akrta hai 

function sum(...imput){
  // console.log(...imput)
total = 0
  for(let i of imput){
   total += i;
   
  }
  console.log(total)

}
sum(1,2,3,4,5,6,7,8,9,10)