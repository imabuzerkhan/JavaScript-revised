function operate(num1 , num2 , operation) {
return operation(num1 , num2) ;
}
function add(a, b){
  return a+b ;
}

function multiplication(a,b){
  return a*b;
}

console.log(operate(2,3, add));
console.log(operate(2,3, multiplication));
