
//The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
function sum(...theArgs) {
    return theArgs.reduce((previous, current) => {
      return previous + current;
    });
  }
  
  console.log(sum(1, 2, 3));
  // expected output: 6
  console.log(sum(1, 2, 3, 4));
  // expected output: 10
  
 // A function's last parameter can be prefixed with ... which will cause all remaining (user supplied) arguments to be placed 
 // within a "standard" javascript array. Only the last parameter can be a "rest parameter".

 function myFun(a, b, ...manyMoreArgs) {
    console.log("a", a); 
    console.log("b", b);
    console.log("manyMoreArgs", manyMoreArgs); 
  }
  myFun("one", "two", "three", "four", "five", "six");
  // Console Output:
  // a, one
  // b, two
  // manyMoreArgs, [three, four, five, six]
  
  myFun("one", "two");
  // a, one
  // b, two
  // manyMoreArgs, []

//================================================================================================
  function multiply(multiplier, ...theArgs) {
    return theArgs.map(function(element) {
      return multiplier * element;
    });
  }
  var arr = multiply(2, 1, 2, 3); 
  console.log(arr); // [2, 4, 6]

//================================================================================================
//Since theArgs is an array, a count of its elements is given by the length property:
function fun1(...theArgs) {
  console.log(theArgs.length);
}
fun1();  // 0
fun1(5); // 1
fun1(5, 6, 7); // 3

//================================================================================================
//Array methods can be used on rest parameters, but not on the arguments object:
  function sortRestArgs(...theArgs) {
    var sortedArgs = theArgs.sort();
    return sortedArgs;
  }
  
  console.log(sortRestArgs(5, 3, 7, 1)); // 1, 3, 5, 7
  
  function sortArguments() {
    var sortedArgs = arguments.sort(); 
    return sortedArgs; // this will never happen
  }
  console.log(sortArguments(5, 3, 7, 1)); // TypeError (arguments.sort is not a function)


//================================================================================================
//To use Array methods on the arguments object, it must be converted to a real array first.
  function sortArguments() {
    var args = Array.from(arguments);
    var sortedArgs = args.sort();
    return sortedArgs;
  }
  console.log(sortArguments(5, 3, 7, 1)); // 1, 3, 5, 7

//================================================================================================


//Destructuring rest parameters
//Rest parameters can be destructured; arrays only (though objects will soon be supported). That means that their data can be
//unpacked into distinct variables. See Destructuring assignment.
function f(...[a, b, c]) {
  return a + b + c;
}
console.log(f(1));          // NaN (b and c are undefined)
f(1, 2, 3)    // 6
f(1, 2, 3, 4) // 6 (the fourth parameter is not destructured)