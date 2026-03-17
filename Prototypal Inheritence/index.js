function person(fName, lname) {
  ((this.firstName = fName), (this.lastName = lname));
}

person.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};

person.prototype.gender = "male";

const person1 = new person("Eleon", "Musk");
const person2 = new person("Bill", "Gates");

// console.log(person1);

console.log(person2.gender);

console.log(person2.getFullName());
