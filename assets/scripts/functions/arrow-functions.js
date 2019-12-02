//An arrow function expression is a syntactically compact alternative to a regular function expression, although without its own 
//bindings to the this, arguments, super, or new.target keywords. Arrow function expressions are ill suited as methods, and they 
//cannot be used as constructors.

var materials = ['Hydrogen', 'Helium', 'Lithium','Beryllium'];
console.log(materials.map(material => material.length));
  // expected output: Array [8, 6, 7, 9]
/*
Basic syntax
(param1, param2, …, paramN) => { statements } 
(param1, param2, …, paramN) => expression
// equivalent to: => { return expression; }

// Parentheses are optional when there's only one parameter name:
(singleParam) => { statements }
singleParam => { statements }

// The parameter list for a function with no parameters should be written with a pair of parentheses.
() => { statements }

Advanced syntax
// Parenthesize the body of a function to return an object literal expression:
params => ({foo: bar})

// Rest parameters and default parameters are supported
(param1, param2, ...rest) => { statements }
(param1 = defaultValue1, param2, …, paramN = defaultValueN) => { 
statements }

// Destructuring within the parameter list is also supported
var f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;
f(); // 6
*/

//Two factors influenced the introduction of arrow functions: the need for shorter functions and the behavior of the this keyword.

//Shorter functions
var elements = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

// This statement returns the array: [8, 6, 7, 9]
elements.map(function(element) {
  return element.length;
});

// The regular function above can be written as the arrow function below
elements.map((element) => {
  return element.length;
}); // [8, 6, 7, 9]

// When there is only one parameter, we can remove the surrounding parentheses
elements.map(element => {
  return element.length;
}); // [8, 6, 7, 9]

// When the only statement in an arrow function is `return`, we can remove `return` and remove
// the surrounding curly brackets
elements.map(element => element.length); // [8, 6, 7, 9]

// In this case, because we only need the length property, we can use destructuring parameter:
// Notice that the `length` corresponds to the property we want to get whereas the
// obviously non-special `lengthFooBArX` is just the name of a variable which can be changed
// to any valid variable name you want
elements.map(({ length: lengthFooBArX }) => lengthFooBArX); // [8, 6, 7, 9]

// This destructuring parameter assignment can also be written as seen below. However, note that in
// this example we are not assigning `length` value to the made up property. Instead, the literal name
// itself of the variable `length` is used as the property we want to retrieve from the object.
elements.map(({ length }) => length); // [8, 6, 7, 9] 


//No separate this
//Before arrow functions, every new function defined its own this value based on how the function was called:

//A new object in the case of a constructor.
//undefined in strict mode function calls.
//The base object if the function was called as an "object method".etc.

//==============================================================================================================================
//Function body
//Arrow functions can have either a "concise body" or the usual "block body".
//In a concise body, only an expression is specified, which becomes the implicit return value. In a block body, you must use an 
//explicit return statement.

var func = x => x * x;                  
// concise body syntax, implied "return"

var func = (x, y) => { return x + y; }; 
// with block body, explicit "return" needed


//==============================================================================================================================
//Returning object literals
//Keep in mind that returning object literals using the concise body syntax params => {object:literal} will not work as expected.

var func = () => { foo: 1 };
// Calling func() returns undefined!
//var func = () => { foo: function() {} };
// SyntaxError: function statement requires a name
//You must wrap the object literal in parentheses:
var func = () => ({ foo: 1 });

//==============================================================================================================================
//An arrow function cannot contain a line break between its parameters and its arrow.
var func = (a, b, c)
  => 1;
// SyntaxError: expected expression, got '=>'

//==============================================================================================================================
//Parsing order
//Although the arrow in an arrow function is not an operator, arrow functions have special parsing rules that interact differently 
//with operator precedence compared to regular functions.

let callback;
callback = callback || function() {}; // ok
//callback = callback || () => {}; // SyntaxError: invalid arrow-function arguments
callback = callback || (() => {});    // ok

//==============================================================================================================================
// An empty arrow function returns undefined
let empty = () => {};

(() => 'foobar')(); 
// Returns "foobar"
// (this is an Immediately Invoked Function Expression)

var simple = a => a > 15 ? 15 : a; 
simple(16); // 15
simple(10); // 10

let max = (a, b) => a > b ? a : b;

// Easy array filtering, mapping, ...

var arr = [5, 6, 13, 0, 1, 18, 23];

var sum = arr.reduce((a, b) => a + b);
// 66

var even = arr.filter(v => v % 2 == 0); 
// [6, 0, 18]

var double = arr.map(v => v * 2);
// [10, 12, 26, 0, 2, 36, 46]

// More concise promise chains
promise.then(a => {
  // ...
}).then(b => {
  // ...
});

// Parameterless arrow functions that are visually easier to parse
setTimeout( () => {
  console.log('I happen sooner');
  setTimeout( () => {
    // deeper code
    console.log('I happen later');
  }, 1);
}, 1);
Specificatio