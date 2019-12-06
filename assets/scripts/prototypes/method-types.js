/*
Prototypes & “Method Types”
---------------------------------------------------------------------------------------------------------------------------------------------------------------
Method Shorthand                           |                Property Function                         |         Property Arrow Function
---------------------------------------------------------------------------------------------------------------------------------------------------------------
class Person {                                              class Person {                                      class Person {
 greet() {                                                       greet = function() { … }                          greet = () => { … }
    console.log(‘Hello’);                                        constructor() {                                   constructor() {
 }                                                               this.greet2 = function() { … }                    this.greet2 = () => { … }
}                                                                }                                                  }
                                                            }                                                     }
Assigned to Person’s                                        Assigned to individual                                Assigned to individual
prototype and hence shared                                  instances and hence recreated per object.             instances and hence recreated
across all instances (NOT recreated per instance).          this refers to "what called the method"               per object. this always refers to instance

Unnecessary re-creations of function can cost performance!
-----------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

class Person {
  name = "Max";
  constructor() {
    this.age = 30;
    //   this.greetPropertyFunction = function(){
    //     console.log(
    //         "Hi, I am " + this.name + " and I am " + this.age + " years old."
    //       );
    //   }
  }

  //or creating a function like this is same as above
  greetPropertyFunction = function() {
    console.log(
      "Hi, I am " + this.name + " and I am " + this.age + " years old."
    );
  };

  //or with the arrow function where you don't have to use bind to access this. Bit worse than below
  greetPropertyArrowFunction = () => {
    console.log(
      "Hi, I am " + this.name + " and I am " + this.age + " years old."
    );
  };

  //This is prefered but have to use bind to bind the object
  greetMethodShorthand() {
    console.log(
      "Hi, I am " + this.name + " and I am " + this.age + " years old."
    );
  }
}

const p = new Person();
const p2 = new Person();
p.greetPropertyFunction(); //Hi, I am Max and I am 30 years old.
console.log(p); //Person {name: "Max", age: 30, greet: ƒ}
//Now greet is part of the object created. greet will be created for every instance of the class Person.
//This will have less perfromance than the greet function created with greet() without assigning it to a variable(greet = function() {})

// Add button to html   <button id="btn"></button>
const button = document.getElementById("btn");
button.addEventListener("click", p.greetPropertyArrowFunction); ////Hi, I am Max and I am 30 years old. For arrow function you don't have to bind
button.addEventListener("click", p.greetMethodShorthand.bind(p)); //Hi, I am Max and I am 30 years old. Without binding this will refer to the button.
