const secret1 = Symbol();
const secret2 = Symbol();
const iHaveKey = Symbol();
// revealSecret(symbol) no need to call its return type function

let vault = {
  name: "Aatish's Vault",
  [secret1]: "Floki is immortal",
  [secret2]: "Gang has the master key",

  revealSecret(key) {
    if (this[key]) {
      //this key meaning like any key can be passed unbtil its symbol
      return this[key];
    } else {
      return "Access Denied";
    }
  },
};
console.log(vault.name);
console.log(vault[secret1]);
console.log(vault[secret2]);
console.log(vault.revealSecret(iHaveKey));
