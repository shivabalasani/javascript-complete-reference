class Person {
  name = "Max";

  constructor() {
    this.age = 30;
  }

  greet() {
    console.log(
      "Hi, I am " + this.name + " and I am " + this.age + " years old."
    );
  }
}

const p = new Person();
const p2 = new Person();
console.log(p); //Person {name: "Max", age: 30} //greet is not part of the Peson Object
//greet method in Person will be part of __proto__ and will be shared with instances (p and p2) to save memory
console.log(p.__proto__ === p2.__proto__);


//This constructor function is same as above class
// function Person() {
//   this.age = 30;
//   this.name = "Max";
// }

// Person.prototype.greet = function() {
//   console.log(
//     "Hi, I am " + this.name + " and I am " + this.age + " years old."
//   );
// };



  