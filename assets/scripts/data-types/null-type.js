
//The value null represents the intentional absence of any object value. 
//It is one of JavaScript's primitive values and is treated as falsy for boolean operations.

//The value null is written with a literal: null. null is not an identifier for a property of the global object, 
//like undefined can be. Instead, null expresses a lack of identification, indicating that a variable points to no object. 
//In APIs, null is often retrieved in a place where an object can be expected but no object is relevant. 


//Difference between null and undefined
//When checking for null or undefined, beware of the differences between equality (==) and identity (===) operators, as the former 
//performs type-conversion.

console.log(typeof null)          // "object" (not "null" for legacy reasons)
console.log(typeof undefined)     // "undefined"
console.log(typeof NaN)           // "number"


console.log(null === undefined)   // false
console.log(null  == undefined)   // true
console.log(null === null)        // true
console.log(null == null)         // true
console.log(!null)                // true
console.log(1 + null)      // false
console.log(isNaN(1 + undefined)) // true

console.log();
let logHi = (str = 'hi') => {
    console.log(str);
  }

logHi();// hi
logHi('bye');// bye
logHi(undefined);// hi
logHi(null); // null

//null is an assigned value. It means nothing.
//undefined typically means a variable has been declared but not defined yet.
//null and undefined are falsy values.
//null and undefined are both primitives. However an error shows that typeof null = object.
//null !== undefined but null == undefined.
