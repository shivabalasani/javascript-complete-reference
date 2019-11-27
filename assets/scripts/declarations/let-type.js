//The let statement declares a block scope local variable, optionally initializing it to a value.
let x = 1;
if (x === 1) {
  let x = 2;
  console.log(x);
  // expected output: 2
}
console.log(x);
// expected output: 1

//let allows you to declare variables that are limited to a scope of a block statement, or expression on which it is used, unlike the var keyword, which 
//defines a variable globally, or locally to an entire function regardless of block scope. The other difference between var and let is that the latter is 
//initialized to value only when parser evaluates it (see below).

//Just like const the let does not create properties of the window object when declared globally (in the top-most scope).

//Variables declared by let have their scope in the block for which they are defined, as well as in any contained sub-blocks. 
//In this way, let works very much like var. The main difference is that the scope of a var variable is the entire enclosing function:
function varTest() {
    var x = 1;
    {
      var x = 2;  // same variable!
      console.log(x);  // 2
    }
    console.log(x);  // 2
  }
  
  function letTest() {
    let x = 1;
    {
      let x = 2;  // different variable
      console.log(x);  // 2
    }
    console.log(x);  // 1
  }

var x1 = 'global';
let y1 = 'global';
console.log(this.x1); // "global"
console.log(this.y1); // undefined

//======================================================================================================================================================
//Emulating private members
//In dealing with constructors it is possible to use the let bindings to share one or more private members without using closures:

//======================================================================================================================================================
//Redeclarations
//Redeclaring the same variable within the same function or block scope raises a SyntaxError.

if (x) {
  let foo;
  //let foo; // SyntaxError thrown.
}

//You may encounter errors in switch statements because there is only one block.
let x2 = 1;
switch(x2) {
  case 0:
    let foo;
    break;
  case 1:
    //let foo; // SyntaxError for redeclaration.
    break;
}

//However, it's important to point out that a block nested inside a case clause will create a new block scoped lexical environment, which will not 
//produce the redeclaration errors shown above.
let x3= 1;
switch(x3) {
  case 0: {
    let foo;
    break;
  }  
  case 1: {
    let foo;
    break;
  }
}

//======================================================================================================================================================
//Temporal dead zone
//Unlike variables declared with var, which will start with the value undefined, let variables are not initialized until their definition is evaluated. 
//Accessing the variable before the initialization results in a ReferenceError. The variable is in a "temporal dead zone" from the start of the block 
//until the initialization is processed.

function do_something() {
  console.log(bar); // undefined
  console.log(foo); // ReferenceError
  var bar = 1;
  let foo = 2;
}

//======================================================================================================================================================
//The temporal dead zone and typeof
//Unlike with simply undeclared variables and variables that hold a value of undefined, using the typeof operator to check for the type of a variable in that 
//variable's temporal dead zone will throw a ReferenceError:

// prints out 'undefined'
console.log(typeof undeclaredVariable);
// results in a 'ReferenceError' if let i =10; is uncommented
console.log(typeof i);
//let i = 10;

//======================================================================================================================================================
//Another example of temporal dead zone combined with lexical scoping
//Due to lexical scoping, the identifier foo inside the expression (foo + 55) evaluates to the if block's foo, and not the overlying variable foo with the value of 33.
function test(){
    var foo = 33;
    {
       let foo = (foo + 55); // ReferenceError
    }
 }

 //======================================================================================================================================================
 //This is still in the temporal dead zone as its declaration statement has not been reached and terminated.
 function go(n) {
    // n here is defined!
    console.log(n); // Object {a: [1,2,3]}
  
    for (let n of n.a) { // ReferenceError
      console.log(n);
    }
  }
 // go({a: [1, 2, 3]});


 //======================================================================================================================================================
var a = 1;
var b = 2;
if (a === 1) {
  var a = 11; // the scope is global
  let b = 22; // the scope is inside the if-block
  console.log(a);  // 11
  console.log(b);  // 22
} 
console.log(a); // 11
console.log(b); // 2

//However, this combination of var and let declaration below is a SyntaxError due to var being hoisted to the top of the block. 
//This results in an implicit re-declaration of the variable.
let x4 = 1;
{
  //var x4 = 2; // SyntaxError for re-declaration
}