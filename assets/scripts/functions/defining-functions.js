//Constructor vs. declaration vs. expression
//Compare the following:

//A function defined with the Function constructor assigned to the variable multiply:
var multiply = new Function('x', 'y', 'return x * y');

//A function declaration of a function named multiply:
function multiply(x, y) {
   return x * y;
} // there is no semicolon here

//A function expression of an anonymous function assigned to the variable multiply:
var multiply = function(x, y) {
   return x * y;
};

//A function expression of a function named func_name assigned to the variable multiply:
var multiply = function func_name(x, y) {
   return x * y;
};