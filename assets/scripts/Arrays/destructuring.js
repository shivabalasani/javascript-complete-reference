//The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

var a, b, rest;
[a, b] = [10, 20];

console.log(a); // expected output: 10
console.log(b); // expected output: 20
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(rest); // expected output: [30,40,50]

({ a, b } = { a: 10, b: 20 });
console.log(a); // 10
console.log(b); // 20

// Stage 4(finished) proposal
({ a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 });
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}

//=========================================================================================================================================================
//Array destructuring
//Basic variable assignment
const basic = ["one", "two", "three"];
const [red, yellow, green] = basic;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"

//Assignment separate from declaration : A variable can be assigned its value via destructuring separate from the variable's declaration.
[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2

//Default values : A variable can be assigned a default, in the case that the value unpacked from the array is undefined.
[a = 5, b = 7] = [1];
console.log(a); // 1
console.log(b); // 7

(a = 1), (b = 3);
//Swapping variables : Two variables values can be swapped in one destructuring expression.
[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

const arr = [1, 2, 3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // [1,3,2]

//Parsing an array returned from a function : It's always been possible to return an array from a function. Destructuring can make working with an array return value more concise.
function f() {
  return [1, 2];
}
[a, b] = f();
console.log(a); // 1
console.log(b); // 2

//Ignoring some returned values : You can ignore return values that you're not interested in:
function f() {
  return [1, 2, 3];
}

[a, , b] = f();
console.log(a); // 1
console.log(b); // 3
//You can also ignore all returned values:
[, ,] = f();

//Assigning the rest of an array to a variable
[a, ...b] = [1, 2, 3];
console.log(a); // 1
console.log(b); // [2, 3]

//const [a, ...b,] = [1, 2, 3];// SyntaxError: rest element may not have a trailing comma

//=========================================================================================================================================================
//Object destructuring
//Basic assignment
const o = { p: 42, q: true };
const { p, q } = o;
console.log(p); // 42
console.log(q); // true

//Assignment without declaration : A variable can be assigned its value with destructuring separate from its declaration.
({ a, b } = { a: 1, b: 2 });

//Assigning to new variable names
const { p: foo, q: bar } = o;
console.log(foo); // 42
console.log(bar); // true

//Default values : A variable can be assigned a default, in the case that the value unpacked from the object is undefined.
var { a = 10, b = 5 } = { a: 3 };
console.log(a); // 3
console.log(b); // 5

//Assigning to new variables names and providing default values
var { a: aa = 10, b: bb = 5 } = { a: 3 };
console.log(aa); // 3
console.log(bb); // 5

//Unpacking fields from objects passed as function parameter
const user = {
  id: 42,
  displayName: "jdoe",
  fullName: {
    firstName: "John",
    lastName: "Doe"
  }
};

//This unpacks the id, displayName and firstName from the user object and prints them.
function userId({ id }) {
  return id;
}

function whois({ displayName, fullName: { firstName: name } }) {
  return `${displayName} is ${name}`;
}

console.log(userId(user)); // 42
console.log(whois(user)); // "jdoe is John"


//Setting a function parameter's default value
function drawChart({
  size = "big",
  coords = { x: 0, y: 0 },
  radius = 25
} = {}) {
  console.log(size, coords, radius);
}

drawChart({
  coords: { x: 18, y: 30 },
  radius: 30
}); // big { x: 18, y: 30 } 30

drawChart({}); //big { x: 0, y: 0 } 25
drawChart(); //Throws TypeError: Cannot destructure property `size` of 'undefined' or 'null'   if '= {}' is not present in the function 


//Computed object property names and destructuring. Computed property names, like on object literals, can be used with destructuring.
let key = 'z';
let {[key]: foo2} = {z: 'bar'};
console.log(foo2); // "bar"

//Rest in Object Destructuring
var {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40};
console.log(rest); //{ c: 30, d: 40 }


//Combined Array and Object Destructuring
//Array and Object destructuring can be combined. Say you want the third element in the array props below, and then you want the
// name property in the object, you can do the following:
const props = [
  { id: 1, name: 'Fizz'},
  { id: 2, name: 'Buzz'},
  { id: 3, name: 'FizzBuzz'}
];
const [,, { name }] = props;
console.log(name); // "FizzBuzz"


//For of iteration and destructuring
const people = [
  {
    name: 'Mike Smith',
    family: {
      mother: 'Jane Smith',
      father: 'Harry Smith',
      sister: 'Samantha Smith'
    },
    age: 35
  },
  {
    name: 'Tom Jones',
    family: {
      mother: 'Norah Jones',
      father: 'Richard Jones',
      brother: 'Howard Jones'
    },
    age: 25
  }
];

for (const {name: n, family: {father: f}} of people) {
  console.log('Name: ' + n + ', Father: ' + f);
}

// "Name: Mike Smith, Father: Harry Smith"
// "Name: Tom Jones, Father: Richard Jones"