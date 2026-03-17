const key1 = Symbol();
const key2 = Symbol();

let vault = {
  name: "Gang's Vault",
  [key1]: "Here's your secret!",
  trust(key) {
    if (this[key]) {
      return this[key];
    } else {
      return "Access denied";
    }
  },
};

// console.log("Welcome to" , vault.name);
// console.log(vault.trust(key1));//

console.log("Welcome to", vault.name + ": " + vault.trust(key1));
console.log("Welcome to", vault.name + ": " + vault.trust(key2));
