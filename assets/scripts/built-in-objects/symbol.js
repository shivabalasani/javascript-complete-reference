/*The data type symbol is a primitive data type. The Symbol() function returns a value of type symbol, has static properties that expose several members of built-in objects,
has static methods that expose the global symbol registry, and resembles a built-in object class but is incomplete as a constructor because it does not support the syntax 
"new Symbol()".  

Every symbol value returned from Symbol() is unique.  A symbol value may be used as an identifier for object properties; this is the data type's only purpose. */

const symbol1 = Symbol();
const symbol2 = Symbol(42);
const symbol3 = Symbol('foo');

console.log(typeof symbol1);// expected output: "symbol"
console.log(symbol3.toString());// expected output: "Symbol(foo)"
console.log(Symbol('foo') === Symbol('foo'));// expected output: false
console.log();

//=================================================================================
// Library land
const uid = Symbol();
console.log(uid);
const user = {
  // id: 'p1',
  [uid]: 'p1',
  name: 'Max',
  age: 30,
  [Symbol.toStringTag]: 'User'
};
user[uid] = 'p3';

// app land => Using the library
user.id = 'p2'; // this should not be possible!

console.log(user[Symbol('uid')]);
console.log(Symbol('uid') === Symbol('uid'));
console.log(user);