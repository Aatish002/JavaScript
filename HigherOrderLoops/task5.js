// 1.Write a program that takes:
// a string "42"
// a number 10
// a boolean true
// Convert them so the final output:
// Number: 42
// String: "10"
// Boolean: false

// const string="42";
// console.log("number:",Number(string));
// const num=10;
// const numToString=String(num);
// console.log("string:",numToString);
// const bool=true;
// console.log("Boolean:",!bool);

// 2. Given an array :  const prices = [100, 250, 50, 300, 150];
//     perform the following operations
//     i.Increase each price by 10%
//     ii.Filter prices above 200
//     iii. Find total price of all items

// const prices=[100, 250, 50, 300, 150];
// const increasePrice=prices.map((i)=> ((i*10)/100)+i);
// console.log("Increase Price by 10%:",increasePrice);
// const filterPrice=prices.filter((i)=>i>200);
// console.log("Filter Price above 200:",filterPrice);
// const totalPrice=prices.reduce((acc,current)=>acc+current,0);
// console.log("Total Prices:",totalPrice);

// 3.Given
// const user = {
//   name: "Krisha",
//   age: 16,
//   country: "Nepal"
// };
// Add a new property isStudent: true but using spread operator

// const user={
//     name:"Aatish",
//     age:21,
//     country:"Nepal"
// };
// const student={isStudent:true};

// console.log({...user,...student});

// 4.Given:
// const students = [
//   { name: "Arin", marks: 85 },
//   { name: "Aatish", marks: 92 },
//   { name: "Krishna", marks: 67 },
//   { name: "Bishes", marks: 45 },
// ];
// i.add a new field:
// grade: "A/B/C/Fail"
// ii.return only passing students (marks ≥ 50)
// iii.find the average class marks

const students = [
  { name: "Arin", marks: 85 },
  { name: "Aatish", marks: 92 },
  { name: "Krishna", marks: 67 },
  { name: "Bishesh", marks: 45 },
];
const grade = students.map((i) => {
  let grade;
  if (i.marks >= 90) {
    grade = "A";
  } else if (i.marks >= 70) {
    grade = "B";
  } else if (i.marks >= 50) {
    grade = "C";
  } else {
    grade = "Fail";
  }
  return { ...i, grade };
});
console.log(grade);

const passingStudents = students.filter((i) => i.marks >= 50);
console.log(passingStudents);

const totalMarks = students.reduce((acc, current) => acc + current.marks, 0);
const averageTotalMarks = totalMarks / students.length;
console.log(averageTotalMarks);
