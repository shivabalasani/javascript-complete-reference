/*An Immediately-invoked Function Expression (IIFE for friends) is a way to execute functions immediately, as soon as they are created.

IIFEs are very useful because they don’t pollute the global object, and they are a simple way to isolate variables declarations.*/
//This is the syntax that defines an IIFE:
(function() {
  /* */
})()

//IIFEs can be defined with arrow functions as well:
(() => {
  /* */
})()

//function() {} //SyntaxError: Function statements require a function name
(function() {})();

//Function declarations want a name, while function expressions do not require it.
//You could also put the invoking parentheses inside the expression parentheses, there is no difference, just a styling preference:
(function() {
  /* */
}());

//Named IIFE : An IIFE can also be named regular functions (not arrow functions). This does not change the fact that the function 
//does not “leak” to the global scope, and it cannot be invoked again after its execution:
(function doSomething() {
  /* */
})()