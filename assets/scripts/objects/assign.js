//The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. 
//It will return the target object.
//Syntax : Object.assign(target, ...sources)

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);
console.log(target);// expected output: Object { a: 1, b: 4, c: 5 }
console.log(returnedTarget);// expected output: Object { a: 1, b: 4, c: 5 }


//Cloning an object
var obj = { a: 1 };
var copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }

//Warning for Deep Clone
//For deep cloning, we need to use other alternatives because Object.assign() copies property values. 
//If the source value is a reference to an object, it only copies that reference value.

function test() {
    'use strict';
  
    let obj1 = { a: 0 , b: { c: 0}};
    let obj2 = Object.assign({}, obj1);
    console.log(JSON.stringify(obj2)); // { "a": 0, "b": { "c": 0}}
    
    obj1.a = 1;
    console.log(JSON.stringify(obj1)); // { "a": 1, "b": { "c": 0}}
    console.log(JSON.stringify(obj2)); // { "a": 0, "b": { "c": 0}}
    
    obj2.a = 2;
    console.log(JSON.stringify(obj1)); // { "a": 1, "b": { "c": 0}}
    console.log(JSON.stringify(obj2)); // { "a": 2, "b": { "c": 0}}
    
    obj2.b.c = 3;
    console.log(JSON.stringify(obj1)); // { "a": 1, "b": { "c": 3}}
    console.log(JSON.stringify(obj2)); // { "a": 2, "b": { "c": 3}}
    
    // Deep Clone
    obj1 = { a: 0 , b: { c: 0}};
    let obj3 = JSON.parse(JSON.stringify(obj1));
    obj1.a = 4;
    obj1.b.c = 4;
    console.log(JSON.stringify(obj3)); // { "a": 0, "b": { "c": 0}}
  }
  
  test();

// Merging objects
var o1 = { a: 1 };
var o2 = { b: 2 };
var o3 = { c: 3 };

var obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1, b: 2, c: 3 }, target object itself is changed.

//Merging objects with same properties. The properties are overwritten by other objects that have the same properties later in the parameters order.
var o1 = { a: 1, b: 1, c: 1 };
var o2 = { b: 2, c: 2 };
var o3 = { c: 3 };

var obj = Object.assign({}, o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }

//Primitives will be wrapped to objects
var v1 = 'abc';
var v2 = true;
var v3 = 10;
var v4 = Symbol('foo');

var obj = Object.assign({}, v1, null, v2, undefined, v3, v4); 
// Primitives will be wrapped, null and undefined will be ignored.
// Note, only string wrappers can have own enumerable properties.
console.log(obj); // { "0": "a", "1": "b", "2": "c" }


//Exceptions will interrupt the ongoing copying task
var target1 = Object.defineProperty({}, 'foo', {
  value: 1,
  writable: true //Changed this to true to execute
}); // target1.foo is a read-only property

Object.assign(target1, { bar: 2 }, { foo2: 3, foo: 3, foo3: 3 }, { baz: 4 });
// TypeError: "foo" is read-only
// The Exception is thrown when assigning target1.foo

console.log(target1.bar);  // 2, the first source was copied successfully.
console.log(target1.foo2); // 3, the first property of the second source was copied successfully.
console.log(target1.foo);  // 1, exception is thrown here.
console.log(target1.foo3); // undefined, assign method has finished, foo3 will not be copied.
console.log(target1.baz);  // undefined, the third source will not be copied either.