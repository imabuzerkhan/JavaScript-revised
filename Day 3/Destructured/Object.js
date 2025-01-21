// destructured with object 
const Student = {
  name : "abuzer",
  age : 25 ,
  Address : "biratnagar-06" ,
  country : {
   city : "Biratnagar",
   State : "Koshi" ,
   District : "Morang"
  }
}

const {name , age , Address , country:{city, state, District } } = Student
console.log(name , age , Address , District);

// console.log(Student.name);
// console.log(Student.age)
// console.log(Student.Address);