// 1. Variables are case sensetive
// 2. Variables names can contain letters, digits, underscores, dollar Signs
// 3. Variables names must begin with a ByteLengthQueuingStrategy, underscore, or dollar sign.
// 4. Variables names cannot be JavaScriot reserved words

//---TYPE CONVERSION---

// to number
// from String,null,undefined,boolean

//to boolean
//from Number,String,emoty string

//to string
//from number

// const str ="Hello";
// const numberedStr=Number(str);
// console.log("Type of numberedStr",typeof(numberedStr));
// console.log("Value of numberStr",numberedStr);

// const noValue=null;
// const numberedNoValue = Number(noValue);
// console.log("Type of numberedNoValue",typeof(numberedNoValue));
// console.log("Value of numberedNoValue",numberedNoValue);

// let undef;
// const numberedUndef=Number(undef);
// console.log("Type of numberedUndef",tyoeof(numberedUndef));
// console.log("Value of numberedUndef",numberedUndef);

// let emptyStr = "";
// const numberedEmptyStr =Number(emptyStr);
// console.log("Type of numberedEmptyStr",typeof(numberedEmptyStr));
// console.log("Value of numberedEmptyStr",numberedEmptyStr);

// let bool = false;
// const numberedBool = Number(bool);
// console.log("type of numberedBool",typeof(numberedBool));
// console.log("Value of numberedBool",numberedBool);

// let num = -1 ;
// const booledNum=Boolean(num);
// console.log("Type of booledNum",typeof(booledNum));
// console.log("Value of booledNum",booledNum);

// let str = "0";
// const booledStr = Boolean(str);
// console.log("Type of booledStr",typeof(booledStr));
// console.log("Value of booledStr",booledStr);

const num = 123;
let a = null;
const strNum = String(a);
const methodConversion = a.toString();
console.log("value of methodConversion", methodConversion);
console.log("type of methodConversion", typeof methodConversion);
console.log("value of strNum", strNum);
console.log("type of strNum", typeof strNum);
// console.log(The value of num is ${num} and the type of num is ${typeof num})
