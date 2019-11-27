//The var statement declares a variable, optionally initializing it to a value.

var x = 1;
if (x === 1) {
  var x = 2;
  console.log(x);
  // expected output: 2
}
console.log(x);
// expected output: 2
console.log('======================\n');

//var declarations, wherever they occur, are processed before any code is executed. This is called hoisting, and is discussed further below.
//The scope of a variable declared with var is its current execution context, which is either the enclosing function or, for variables declared outside 
//any function, global. If you re-declare a JavaScript variable, it will not lose its value.

//1. Declared variables are constrained in the execution context in which they are declared. Undeclared variables are always global.
// var only knows global scope and function scope, so variable created in function can't be used outside and varibale created globally can used anywhere.

function x1() {
    y1 = 1; // Throws a ReferenceError in strict mode.
    var z1 = 2;
  }
x1();
console.log(y1); // 1
//console.log(z1); // Throws a ReferenceError: z1 is not defined outside x.
console.log('1.======================\n');

//2. Declared variables are created before any code is executed. Undeclared variables do not exist until the code assigning to them is executed.
//console.log(a2);                // "undefined" or "" depending on browser
console.log('still going...'); // still going...
var b2 = 1;
console.log(b2);                // 1
console.log('still going...'); // still going...
console.log('2.======================\n');

//3. Declared variables are a non-configurable property of their execution context (function or global). Undeclared variables are configurable 
//(e.g. can be deleted).
var a3 = 1;
b3 = 2;
delete this.a3; // Throws a TypeError in strict mode. Fails silently otherwise.
delete this.b3;
console.log(a3, b3); // Throws a ReferenceError.
// The 'b' property was deleted and no longer exists.
console.log('3.======================\n');

//======================================================================================================================================================
//var hoisting
//Because variable declarations (and declarations in general) are processed before any code is executed, declaring a variable anywhere in the code is 
//equivalent to declaring it at the top. This also means that a variable can appear to be used before it's declared. This behavior is called "hoisting", 
//as it appears that the variable declaration is moved to the top of the function or global code.

bla = 2;
var bla;
// ...is implicitly understood as:
var bla;
bla = 2;

//For that reason, it is recommended to always declare variables at the top of their scope (the top of global code and the top of function code) so it's 
//clear which variables are function scoped (local) and which are resolved on the scope chain.

//======================================================================================================================================================
//It's important to point out that the hoisting will affect the variable declaration, but not its value's initialization. The value will be indeed 
//assigned when the assignment statement is reached:
function do_something() {
    console.log(bar); // undefined
    var bar = 111;
    console.log(bar); // 111
  }
// ...is implicitly understood as:
function do_something() {
    var bar;
    console.log(bar); // undefined
    bar = 111;
    console.log(bar); // 111
  }

  //===============================================================================================================
//Declaring and initializing two variables
var a = 0, b = 0;

//===============================================================================================================
//Assigning two variables with single string value
var a = 'A';
var b = a;
// ...is equivalent to:
var a, b = a = 'A';

var x = y, y = 'A';
console.log(x + y); // undefinedA
console.log('======================\n');

//===============================================================================================================
//Initialization of several variables
var x = 0;
function f() {
  var x = y = 1; // Declares x locally; declares y globally.
}
f();
console.log(x, y); // 0 1
// In non-strict mode:
// x is the global one as expected;
// y is leaked outside of the function, though!
console.log('======================\n');

//===============================================================================================================
'use strict';
var x = 0;
function f() {
  var x = y = 1; // Throws a ReferenceError in strict mode.
}
f();
console.log(x, y);
console.log('======================\n');

//===============================================================================================================
//Variables that appear to be implicit globals may be references to variables in an outer function scope:
/*var x = 0; // Declares x within file scope, then assigns it a value of 0.

console.log(typeof z); // "undefined", since z doesn't exist yet

function a() {
  var y = 2; // Declares y within scope of function a, then assigns it a value of 2.

  console.log(x, y); // 0 2

  function b() {
    x = 3; // Assigns 3 to existing file scoped x.
    y = 4; // Assigns 4 to existing outer y.
    z = 5; // Creates a new global variable z, and assigns it a value of 5.
           // (Throws a ReferenceError in strict mode.)
  }

  b(); // Creates z as a global variable.
  console.log(x, y, z); // 3 4 5
}

a(); // Also calls b.
console.log(x, z);     // 3 5
console.log(typeof y); // "undefined", as y is local to function a*/