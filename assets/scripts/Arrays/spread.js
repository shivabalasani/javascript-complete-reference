/*Spread syntax allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements 
(for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected. */

//Syntax
//1.For function calls:
//myFunction(...iterableObj);

//2.For array literals or strings:
//[...iterableObj, '4', 'five', 6];

//3.For object literals (new in ECMAScript 2018):
//let objClone = { ...obj };

//==================================================================================
//1.Spread in function calls
function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];
//Replace apply() : It is common to use Function.prototype.apply() in cases where you want to use the elements of an array as arguments to a function.
console.log(sum.apply(null, numbers)); // expected output: 6

//With spread syntax the above can be written as:
console.log(sum(...numbers)); // expected output: 6

//Any argument in the argument list can use spread syntax and it can be used multiple times.
console.log(sum(-1, ...numbers, 2, ...[3])); // expected output: 2
console.log(Math.min(...numbers)); // expected output: 1

//==================================================================================
//2.Spread in array literals
var parts = ["shoulders", "knees"];
var lyrics = ["head", ...parts, "and", "toes"]; // ["head", "shoulders", "knees", "and", "toes"]

//Just like spread for argument lists, ... can be used anywhere in the array literal and it can be used multiple times.
//Copy an array
var arr = [1, 2, 3];
var arr2 = [...arr]; // like arr.slice()
arr2.push(4);
console.log(arr2); // arr2 becomes [1, 2, 3, 4]
console.log(arr); // arr remains unaffected

var a = [[1], [2], [3]];
var b = [...a];
b.shift().shift(); // 1
console.log(a); // Now array a is affected as well: [[], [2], [3]]

//A better way to concatenate arrays
//Array.prototype.concat() is often used to concatenate an array to the end of an existing array. Without spread syntax this is done as:
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
// Append all items from arr2 onto arr1
arr1 = arr1.concat(arr2);
console.log(arr1); //[ 0, 1, 2, 3, 4, 5 ]

//With spread syntax this becomes:
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1 = [...arr1, ...arr2]; // arr1 is now [0, 1, 2, 3, 4, 5]

//Array.prototype.unshift() is often used to insert an array of values at the start of an existing array. Without spread syntax this is done as:
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
// Prepend all items from arr2 onto arr1
Array.prototype.unshift.apply(arr1, arr2); // arr1 is now [3, 4, 5, 0, 1, 2]

//With spread syntax, this becomes:
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1 = [...arr2, ...arr1]; // arr1 is now [3, 4, 5, 0, 1, 2]
//Note: Unlike unshift(), this creates a new arr1, and does not modify the original arr1 array in-place.

//==================================================================================
//3.Spread in object literals
//Shallow-cloning (excluding prototype) or merging of objects is now possible using a shorter syntax than Object.assign().
var obj1 = { foo: "bar", x: 42 };
var obj2 = { foo: "baz", y: 13 };
var clonedObj = { ...obj1 }; // Object { foo: "bar", x: 42 }
var mergedObj = { ...obj1, ...obj2 }; // Object { foo: "baz", x: 42, y: 13 }
console.log(mergedObj);

//Note that you cannot replace nor mimic the Object.assign() function:
var obj1 = { foo: "bar", x: 42 };
var obj2 = { foo: "baz", y: 13 };
const merge = (...objects) => ({ ...objects });
var mergedObj = merge(obj1, obj2); // Object { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 13 } }
var mergedObj = merge({}, obj1, obj2); // Object { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 13 } }
console.log(mergedObj);

//Only for iterables : Spread syntax (other than in the case of spread properties) can be applied only to iterable objects:
var obj = { key1: "value1" };
//var array = [...obj]; // TypeError: obj is not iterable

const persons = [
  { name: "Max", age: 30 },
  { name: "Manuel", age: 31 }
];
const copiedPersons = [...persons]; // copies addressess of the objects so if we change persons object values it will change copiedPersons object values as well

persons.push({ name: "Anna", age: 29 });
persons[0].age = 31111;
console.log(persons, copiedPersons); //copiedPersons won't have 'Anna' Object but will have 'Max' age change.
/*Expected output : 
[ { name: 'Max', age: 31111 },
  { name: 'Manuel', age: 31 },
  { name: 'Anna', age: 29 }
]       [ { name: 'Max', age: 31111 }, { name: 'Manuel', age: 31 } ] */

//If we don't want above behaviour of copying object addressess
const copiedPersonsWithoutReferences = [
  ...persons.map(person => ({ name: person.name, age: person.age }))
];
persons[0].age = 999999; // Won't change copiedPersonsWithoutReferences 
console.log(persons, copiedPersonsWithoutReferences); 
/*[
  { name: 'Max', age: 999999 },
  { name: 'Manuel', age: 31 },
  { name: 'Anna', age: 29 }
] [
  { name: 'Max', age: 31111 },
  { name: 'Manuel', age: 31 },
  { name: 'Anna', age: 29 }
]
*/