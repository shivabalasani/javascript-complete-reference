/*Changes in strict mode
Strict mode changes both syntax and runtime behavior. Changes generally fall into these categories: changes converting mistakes into errors (as syntax errors or at runtime),
changes simplifying how the particular variable for a given use of a name is computed, changes simplifying eval and arguments, changes making it easier to write "secure" 
JavaScript, and changes anticipating future ECMAScript evolution.
*/
//Converting mistakes into errors
//Strict mode changes some previously-accepted mistakes into errors.

//1) First, strict mode makes it impossible to accidentally create global variables. In normal JavaScript mistyping a variable in an assignment creates a new property on the 
//global object and continues to "work" 
'use strict';                  
mistypeVariable = 17;  // Assuming a global variable mistypedVariable exists this line throws a ReferenceError due to the misspelling of variable

//2) Second, strict mode makes assignments which would otherwise silently fail to throw an exception.
'use strict';

// Assignment to a non-writable global
var undefined = 5; // throws a TypeError
var Infinity = 5; // throws a TypeError

// Assignment to a non-writable property
var obj1 = {};
Object.defineProperty(obj1, 'x', { value: 42, writable: false });
obj1.x = 9; // throws a TypeError

// Assignment to a getter-only property
var obj2 = { get x() { return 17; } };
obj2.x = 5; // throws a TypeError

// Assignment to a new property on a non-extensible object
var fixed = {};
Object.preventExtensions(fixed);
fixed.newProp = 'ohai'; // throws a TypeError

//3) Third, strict mode makes attempts to delete undeletable properties throw (where before the attempt would simply have no effect):
'use strict';
delete Object.prototype; // throws a TypeError

//4) Fourth, strict mode prior to Gecko 34 requires that all properties named in an object literal be unique
'use strict';
var o = { p: 1, p: 2 }; // !!! syntax error

//5) Fifth, strict mode requires that function parameter names be unique.
function sum(a, a, c) { // !!! syntax error : Duplicate parameter name not allowed in this context
    'use strict';
    return a + a + c; // wrong if this code ran
  }

//6) Sixth, a strict mode in ECMAScript 5 forbids octal syntax. The octal syntax isn't part of ECMAScript 5, but it's supported in all browsers by prefixing the octal 
//number with a zero: 0644 === 420 and "\045" === "%". In ECMAScript 2015 Octal number is supported by prefixing a number with "0o". i.e. 
var a = 0o10; // ES2015: Octal

'use strict';
var sum = 015 + // !!! syntax error
          197 +
          142;
var sumWithOctal = 0o10 + 8;
console.log(sumWithOctal); // 16

//7) Seventh, strict mode in ECMAScript 2015 forbids setting properties on primitive values. Without strict mode, setting properties is simply ignored (no-op), 
//with strict mode, however, a TypeError is thrown.
(function() {
    'use strict';  
    false.true = '';         // TypeError
    (14).sailing = 'home';   // TypeError
    'with'.you = 'far away'; // TypeError   
})();
