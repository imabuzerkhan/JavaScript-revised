//* Key Differences
//! Return Value:
//? forEach: It doesn't return a value. The forEach method is used for iterating over the elements of an array and performing a side effect, such as modifying the array or performing a task for each element.

//? map: It returns a new array containing the results of applying a function to each element in the original array. The original array remains unchanged.

//! Chaining:
//? forEach: It doesn't return a value, so it cannot be directly chained with other array methods.

//? map: Since it returns a new array, you can chain other array methods after using map.

//* Use Case:
//? forEach: Used when you want to iterate over the array elements and perform an action on each element, but you don't need a new array.

//? map: Used when you want to create a new array based on the transformation of each element in the original array.


const fruits = ['Mango', 'Banana', 'Apple', 'Grapes', 'Pista']

// for off method 
for(let item of fruits){
  console.log(item)
}

// for in method 
for(let item in fruits){
  console.log(item)
}

// foreach method
fruits.forEach((currElement , index , arr)=>{
  console.log(`${currElement} ${index} ` )

})

// one more thing aabout foreach it never return a value 
// const MyForeach = fruits.forEach((currElement , index , arr)=>{
//   return `${currElement} ${index}`
   // console.log(`${currElement} ${index} ` )

// })
// console.log(MyForeach)
// !it always gives undefined beacuse it not return any value