// Using map, transform a string so that each character is separated by a hyphen.
// Example: "hello" → "h-e-l-l-o".

// Using reduce, iterate over an object's key–value pairs and produce a new object where all string values are converted to uppercase.

// Using map, take an array of lowercase strings and return a new array with all the strings in uppercase.

// Using map, process an array of names and print "Hello, [name]!" for each element.

// Using reduce, calculate the sum of all numbers in an array.

// Using map, create a new array where each number from the original array is doubled

// let str= "Hello";
// let splitStr=str.split("");
// let newStr=splitStr.map((i)=>i).join("-");
// console.log(newStr);

// const obj = {
//     name:"aatish",
//     age:22,
//     gender:"male"
// }
// let newObj=Object.entries(obj).reduce(
//     (i,[keys,values])=>{
//         if(typeof values ==="string"){
//             i[keys]=values.toUpperCase();
//         }else{
//             i[keys]=values;
//         }return i;
//     },{}
// );
// console.log(newObj);


// const arr=["mango","banana","apple"];
// const newArr=arr.map((i)=>i.toUpperCase());
// console.log(newArr);

// const arr = ["apple","banana","mango"];
// const newArr=arr.map((i)=>i="Hello"+ " "+[i]);
// console.log(newArr)

// const arr=[1,2,3,4];
// const newArr=arr.reduce((acc,i)=>acc+i,0);
// console.log(newArr);

// const arr=[1,2,3,4];
// const newArr=arr.map((i)=>i*i);
// console.log(newArr);





