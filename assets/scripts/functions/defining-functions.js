//Constructor vs. declaration vs. expression
//Compare the following:

//A function defined with the Function constructor assigned to the variable multiply:
var multiply = new Function('x', 'y', 'return x * y');

//A function declaration of a function named multiply:
function multiply(x, y) {
   return x * y;
} // there is no semicolon here


//anonymousFunctionExpression(1,2); TypeError: anonymousFunctionExpression(undefined) is not a function
//Cannot be invoked before initalizing anonymous function expression
//A function expression of an anonymous function assigned to the variable anonymousFunctionExpression:
var anonymousFunctionExpression = function(x, y) {
   return x * y;
};

//A function expression of a function named func_name assigned to the variable multiply:
var multiply = function func_name(x, y) {
   return x * y;
};


//Functions in javascript are objects and can be passed as arguments.
function log(a) {
   console.log(a);  //outputs function(){console.log('hi)}
   a(); //outputs 'hi'
}

log(function() {
   console.log('hi')
});