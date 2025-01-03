//  Assignment operator

// ! for example

// * + - * / % ** ++ --

const a = 20;
const b = 10 ;

const sum = a + b; 
console.log("the sum of two number is : " , sum);

const sub = a - b ;
console.log("the sub of two number is : " , sub);

const mul = a * b ;
console.log("the mul of two number is : " , mul)

const div = a / b ;
console.log("the div of the two num is : " , div )

const modlus = a % b ;
console.log("the reminder of the two number is : " , modlus)

// Increment operator
let x = 5; // Temporary variable for demonstration

// Postfix
console.log("The value of x (postfix increment) is:", x++); // Logs 5, then x becomes 6
console.log("The value of x after increment is:", x); // Logs 6

// Prefix
console.log("The value of x (prefix increment) is:", ++x); // Increments to 7, then logs 7

// Decrement operator
x = 5; // Reset x

// Postfix
console.log("The value of x (postfix decrement) is:", x--); // Logs 5, then x becomes 4
console.log("The value of x after decrement is:", x); // Logs 4

// Prefix
console.log("The value of x (prefix decrement) is:", --x); // Decrements to 3, then logs 3