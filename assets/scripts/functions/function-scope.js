//Function scope
//Variables defined inside a function cannot be accessed from anywhere outside the function, because the variable is defined only in the scope of the function.
//However, a function can access all variables and functions defined inside the scope in which it is defined.

//In other words, a function defined in the global scope can access all variables defined in the global scope. A function defined inside another function can also access
//all variables defined in its parent function, and any other variables to which the parent function has access.

// The following variables are defined in the global scope
var num1 = 20,
  num2 = 3,
  name = "Chamahk";

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

multiply(); // Returns 60

// A nested function example
function getScore() {
  var num1 = 2,
    num2 = 3;

  function add() {
    return name + " scored " + (num1 + num2);
  }

  return add();
}

getScore(); // Returns "Chamahk scored 5"

//===================================================================================================================================================================
//Recursion
/*A function can refer to and call itself. There are three ways for a function to refer to itself:

The function's name
arguments.callee
An in-scope variable that refers to the function*/

var foo = function bar() {
  // statements go here
};
/*
Within the function body, the following are all equivalent:
bar()
arguments.callee()
foo()

A function that calls itself is called a recursive function. In some ways, recursion is analogous to a loop. Both execute the same code multiple times, and both require a condition (to avoid an infinite loop, or rather, infinite recursion in this case).

For example, the following loop...*/

var x = 0;
while (x < 10) {
  // "x < 10" is the loop condition
  // do stuff
  x++;
}
//...can be converted into a recursive function declaration, followed by a call to that function:

function loop(x) {
  if (x >= 10)
    // "x >= 10" is the exit condition (equivalent to "!(x < 10)")
    return;
  // do stuff
  console.log(x); //0 1 2 3 4 5 6 7 8 9
  loop(x + 1); // the recursive call
}
loop(0);

//It is possible to convert any recursive algorithm to a non-recursive one, but the logic is often much more complex, and doing so requires the use of a stack.

//In fact, recursion itself uses a stack: the function stack. The stack-like behavior can be seen in the following example:

function foo(i) {
  if (i < 0) return;
  console.log("begin: " + i);
  foo(i - 1);
  console.log("end: " + i);
}
foo(3);

/*Nested functions and closures
You may nest a function within another function. The nested (inner) function is private to its containing (outer) function.

It also forms a closure. A closure is an expression (most commonly, a function) that can have free variables together with an environment that binds those variables (that "closes" the expression).

Since a nested function is a closure, this means that a nested function can "inherit" the arguments and variables of its containing function. In other words, the inner function contains the scope of the outer function.

To summarize:

The inner function can be accessed only from statements in the outer function.
The inner function forms a closure: the inner function can use the arguments and variables of the outer function, while the outer function cannot use the arguments and variables of the inner function.
The following example shows nested functions:*/

function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}
a = addSquares(2, 3); // returns 13
b = addSquares(3, 4); // returns 25
c = addSquares(4, 5); // returns 41

//Since the inner function forms a closure, you can call the outer function and specify arguments for both the outer and inner function:

function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}
fn_inside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give itit
result = fn_inside(5); // returns 8
result1 = outside(3)(5); // returns 8
