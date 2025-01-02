// There are three main types of variables in JavaScript: var, let, and const.
// The `var` keyword is an older way to declare variables in JavaScript.
// It has function scope or global scope, but it does NOT have block scope.

// Example 1
// Here, the `var` keyword is used to declare a variable.
// This variable `Name` is globally scoped because it is declared outside a function.
var Name = "abuzer khan";
function MyName() {
  console.log(Name); // Outputs: "abuzer khan"
}
MyName();

// Example 2
// Multiple variables can be declared with `var` in a single statement.
var test1 = 12,
    test2 = 14,
    test3 = 16;
function foo() {
  console.log(test1, test2, test3); // Outputs: 12, 14, 16
}
foo();

// Example 3
// `var` is NOT block-scoped, so even if it is declared inside an `if` block, 
// it will be accessible outside the block.
if (true) {
  var x = 22; // This variable is function-scoped or global-scoped, not block-scoped.
}
console.log(x); // Outputs: 22

// Example 4
// Multiple variables declared with `var` inside an `if` block will also be accessible globally.
if (true) {
  var y = 20;
  var z = 30;
}
console.log(y, z); // Outputs: 20, 30

// About `var`:
// - `var` declarations are hoisted to the top of their scope but are not initialized.
// - They are prone to errors due to the lack of block scope, leading to unexpected behaviors.
// - In modern JavaScript, `let` and `const` are preferred as they provide block scope and prevent redeclaration.


// * let
// `let` modern JavaScript ka ek keyword hai jo block-scope provide karta hai.  
// Iska matlab hai ki ye sirf us block ke andar accessible hota hai jaha ise declare kiya gaya hai.  

let value = 78; // Ek variable `value` declare kiya gaya hai.  

function mynumber() {
  console.log(value); // Output: 78
}
mynumber();

// Block-scope ka udaharan
if (true) {
  let y = 20; // `y` sirf is block ke andar accessible hai.  
  let z = 30; // `z` bhi sirf is block ke andar accessible hai.  
}
console.log(y, z); // Error: `y` aur `z` block ke bahar accessible nahi hain.  

// Duplicate declaration error
let x = 20;  
let x = 30; // Error: `let` ke saath same variable ko dubara declare nahi kar sakte.  
console.log(x);  

// * const
// `const` ek keyword hai jo constant value ko declare karne ke liye use hota hai.  
// Ek baar declare hone ke baad `const` ki value change nahi ho sakti.  
// Ye bhi block-scope provide karta hai jaise `let`.  

const pi = 3.14; // Ek constant declare kiya gaya hai.  
console.log(pi); // Output: 3.14  

// Value change karne ki koshish
// pi = 3.14159; // Error: `const` ki value change nahi ki ja sakti.  

// Object aur Array ke sath const
const person = { name: "Abuzer", age: 25 };  
person.name = "Mohammad"; // Object ke properties change kar sakte hain.  
console.log(person); // Output: { name: "Mohammad", age: 25 }  

const numbers = [1, 2, 3];  
numbers.push(4); // Array ke elements change kar sakte hain.  
console.log(numbers); // Output: [1, 2, 3, 4]  

// const redeclare karna allowed nahi hai
const value2 = 50;  
// const value2 = 60; // Error: `const` ko dubara declare nahi kar sakte.  
