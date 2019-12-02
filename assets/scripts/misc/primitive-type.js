/*
In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods. 
There are 7 primitive data types: string, number, bigint, boolean, null, undefined, and symbol.

All primitives are immutable, i.e., they cannot be altered. It is important not to confuse a primitive itself with a variable 
assigned a primitive value. The variable may be reassigned a new value, but the existing value can not be changed in the ways 
that objects, arrays, and functions can be altered.
*/

//This example will help you understand the fact that primitive values are immutable.
//Using a string method doesn't mutate the string
var bar = "baz";
console.log(bar);               // baz
bar.toUpperCase();
console.log(bar);               // baz

// Using an array method mutates the array
var foo = [];
console.log(foo);               // []
foo.push("plugh");
console.log(foo);               // ["plugh"]

// Assignment gives the primitive a new (not a mutated) value
bar = bar.toUpperCase();       // BAZ

//=======================================================================================


// The Primitive 
let foo = 5;

// Defining a function that should change the Primitive value
function addTwo(num) {
   num += 2;
}
// Another function trying to do the same thing
function addTwo_v2(foo) {
   foo += 2;
}

// Calling our first function while passing our Primitive as an argument
addTwo(foo);
// Getting the current Primitive value
console.log(foo);   // 5

// Trying again with our second function...
addTwo_v2(foo);
console.log(foo);   // 5


/*
Primitive wrapper objects in JavaScript
Except for null and undefined, all primitive values have object equivalents that wrap around the primitive values:

String for the string primitive.
Number for the number primitive.
BigInt for the bigint primitive.
Boolean for the boolean primitive.
Symbol for the symbol primitive.
The wrapper's valueOf() method returns the primitive value.
*/