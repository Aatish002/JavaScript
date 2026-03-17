// 1. Use for..of on a string to join each character with -.
// const str = "Hello";
// let result = "";
// for (const i of str){
//     result+= i+"-";
// }  
// console.log(result.slice(0,-1));



// 2. Use for...in to loop through an object and return a new object with all string values in uppercase
const obj = {
    name:"Aatish",
    age:"21",
    gender:"male",
}
let newObj = {};
for(const i in obj){
    newObj[i] = obj[i].toUpperCase();
};
console.log(newObj);



// 3. Given an array of lowercase strings, use for...of to create a new array with all strings in uppercase
// const strArr = ["Apple","Banana","Orange"];
// let newArr = [];
// for (const i of strArr){
//     newArr.push(i.toUpperCase());
// }
// console.log(newArr);


// 4. Use .forEach() on an array of names to log "Hello, name"
// const name = ["Apple","Banana"];
// name.forEach((el)=>{
//     console.log("Hello",el)
// });


// 5. Use .forEach() to find sum of all numbers in an array
// const numArr = [1,2,3,4,5];
// let sum = 0;
// numArr.forEach((i)=>{
//     sum = sum + i;
// });
// console.log(sum);


// 6. Given an array of numbers, use .forEach() to double each number and push to a new array
// const numArr = [1,2,3,4,5];
// let newArr = [];
// numArr.forEach((i)=>{
//     newArr.push(i*2);
// });
// console.log(newArr);





