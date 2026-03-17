// ARRAY ----> OBJECT ----> NULL PROTOTYPAL INHERITANCE --- PROTOTYPAL CHAINING

String.prototype.greet= function (){
    console.log("Hello user");
    return 1;
}
const str = "Apple";
console.log(str.greet());