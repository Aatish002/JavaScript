// 1. Group students by grade using a single reduce
//  const students = [
//   { name: "Alice", grade: "A" },
//   { name: "Bob", grade: "B" },
//   { name: "Charlie", grade: "A" },
//   { name: "Diana", grade: "C" }
// ];

// output:
// {
//   A: ["Alice", "Charlie"],
//   B: ["Bob"],
//   C: ["Diana"]
// }

// 2.Count occurrences of each word using a single reduce
// const words = ["apple", "banana", "apple", "orange", "banana", "apple"];
// output:
// {
//   apple: 3,
//   banana: 2,
//   orange: 1
// }

//  const students = [
//    { name: "Alice", grade: "A" },
//    { name: "Bob", grade: "B" },
//    { name: "Charlie", grade: "A" },
//    { name: "Diana", grade: "C" }
// ];
// const catagorizedStudents=students.reduce((acc,current)=>{
//     acc[current.grade]=acc[current.grade]||[];
//     acc[current.grade].push(current.name);
//     return acc;
// },{})
// console.log(catagorizedStudents);

// const words = ["apple", "banana", "apple", "orange", "banana", "apple"];
// const repeatedWords=words.reduce((acc,current)=>{
//     acc[current]=(acc[current]||0)+1
//     return acc;
// },{})
// console.log(repeatedWords);

// Group products by category AND count how many products are in each category using a single reduce.

// const products = [
//   { name: "Laptop", category: "Electronics" },
//   { name: "Headphones", category: "Electronics" },
//   { name: "T-shirt", category: "Clothing" },
//   { name: "Jeans", category: "Clothing" },
//   { name: "Apple", category: "Food" }
// ];

// Expected Output:

// { Electronics: { items: ["Laptop", "Headphones"], count: 2 },
//   Clothing:    {
//   items: ["T-shirt", "Jeans"],      count: 2 },
//   Food:        { items: ["Apple"],                 count: 1 }

const products = [
  { name: "Laptop", category: "Electronics" },
  { name: "Headphones", category: "Electronics" },
  { name: "T-shirt", category: "Clothing" },
  { name: "Jeans", category: "Clothing" },
  { name: "Apple", category: "Food" },
];

const catagorizedProducts = products.reduce((acc, current) => {
  acc[current.category] = acc[current.category] || [];
  acc[current.category].push(current.name);

  return acc;
}, {});
const count = products.reduce((acc, current) => {
  acc[current.category] = (acc[current.category] || 0) + 1;
  return acc;
}, {});
console.log(catagorizedProducts, count);
