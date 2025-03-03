const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 72 },
  { name: "Charlie", score: 90 },
  { name: "David", score: 60 }
];

const marks = students.filter(students => students.score > 80) 
console.log(marks)