const key1 = Symbol("gangKey");
const key2 = Symbol("fakeKey");
let vault = {
  name: "Gang's Vault",
  [key1]:
    "Think Floki is tired of me like in Vikings, Floki tired of Ragnor even though he loves him",
  logBook: [],
  trust(key, name) {
    if (this[key]) {
      this.logBook.push({ name, status: "Access Granted" });
      return this[key];
    } else {
      this.logBook.push({ name, status: "Access Denied" });
      return "Access Denied";
    }
  },
};

vault.trust(key1, "Ragnar");
vault.trust(key2, "Loki");

vault.trust(key1, "Aatish");
console.log(vault.logBook);
