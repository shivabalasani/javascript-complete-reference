/*JavaScript classes, introduced in ECMAScript 2015, are primarily syntactical sugar over JavaScript's existing prototype-based inheritance. 
The class syntax does not introduce a new object-oriented inheritance model to JavaScript.

Defining classes
Classes are in fact "special functions", and just as you can define function expressions and function declarations, the class syntax has two components: class 
expressions and class declarations.
*/
//Class declarations :One way to define a class is using a class declaration. To declare a class, you use the class keyword with the name of the class ("Rectangle" here).

class Triangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

//==================================================================================================================================================================
//Hoisting :An important difference between function declarations and class declarations is that function declarations are hoisted and class declarations are not. 
//You first need to declare your class and then access it, otherwise code like the following will throw a ReferenceError:

//const p = new Rectangle1(); // ReferenceError: Cannot access 'Rectangle1' before initialization
//class Rectangle1 {}

//Class expressions : A class expression is another way to define a class. Class expressions can be named or unnamed. The name given to a named class expression is local 
//to the class's body. (it can be retrieved through the class's (not an instance's) name property, though).

// unnamed
let Square = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Square.name); // output: "Square"

// named
let Circle = class Circle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Circle.name); // output: "Circle2"

//==================================================================================================================================================================
//Prototype methods
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(10, 10);
console.log(square.area); // 100

//==================================================================================================================================================================
//Static methods :The static keyword defines a static method for a class. Static methods are called without instantiating their class and cannot be called through a
// class instance. Static methods are often used to create utility functions for an application.

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
p1.distance; //undefined
p2.distance; //undefined

console.log(Point.distance(p1, p2)); // 7.0710678118654755
console.log();

//==================================================================================================================================================================
//Boxing with prototype and static methods
//When a static or prototype method is called without a value for this, the this value will be undefined inside the method. This behavior will be the same even if the 
//"use strict" directive isn't present, because code within the class body's syntactic boundary is always executed in strict mode.

class Animals { 
  speaks() {
    return this;
  }
  static eats() {
    return this;
  }
}

let objs = new Animals();
console.log(objs.speaks()); // Animals {}
let speaks = objs.speaks;
console.log(speaks()); // undefined

console.log(Animals.eats()); // class Animals
let eats = Animals.eats;
console.log(eats()); // undefined
console.log();

//==================================================================================================================================================================
//Autoboxing will not happen in strict mode, the this value remains as passed.

function Animal() { }

Animal.prototype.speak = function() {
  return this;
}

Animal.eat = function() {
  return this;
}

let obj = new Animal();
let speak = obj.speak;
console.log(speak()); // global object

let eat = Animal.eat;
console.log(eat()); // global object


//==================================================================================================================================================================
/*
class Rectangle {
  constructor(height, width) {    
    this.height = height;
    this.width = width;
  }
}*/
//Public field declarations : With the JavaScript field declaration syntax, the above example can be written as:
class Rectangle {
  height = 0;
  width;
  constructor(height, width) {    
    this.height = height;
    this.width = width;
  }
}

//Private field declarations : Using private fields, the definition can be refined as below.
/*
class Rectangle {
  #height = 0; //Not yet supported in IDE and some browsers
  #width;
  constructor(height, width) {    
    this.#height = height;
    this.#width = width;
  }
}*/