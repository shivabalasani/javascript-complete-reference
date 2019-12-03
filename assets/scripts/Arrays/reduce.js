//The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
//Syntax : arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])

const prices = [10.99, 5.99, 1.99, 6.99];

let sum = 0;
prices.forEach(price => {
  sum += price;
});
console.log(sum); //25.96

const reducedSum = prices.reduce((prevValue, curValue, curIndex, prices) => {
  return prevValue + curValue;
}, 0);
const reducedSumConcise = prices.reduce(
  (prevValue, curValue) => prevValue + curValue,
  0
);
console.log(reducedSum); //25.96
console.log(reducedSumConcise); //25.96

//================================================================================================
//Chaining Methods in JavaScript
const originalArray1 = [{ price: 10.99 }, { price: 5.99 }, { price: 29.99 }];
const transformedArray1 = originalArray1.map(obj => obj.price); // produces [10.99, 5.99, 29.99]
const sum1 = transformedArray1.reduce((sumVal, curVal) => sumVal + curVal, 0); // => 46.97

const originalArray2 = [{ price: 10.99 }, { price: 5.99 }, { price: 29.99 }];
const sum2 = originalArray2.reduce(
  (sumVal, curVal) => sumVal + curVal.price,
  0
); // => 46.97

//But let's say you have a more complex extraction logic and hence want to split this into multiple method calls. Or you have a re-usable map function which you want
//to be able to use in different places of your app. Then you can still write the initial example in a more concise way if you leverage method chaining:
const originalArray3 = [{ price: 10.99 }, { price: 5.99 }, { price: 29.99 }];
const sum3 = originalArray3
  .map(obj => obj.price)
  .reduce((sumVal, curVal) => sumVal + curVal, 0); // => 46.97

//================================================================================================
//Sum all the values of an array
var sum4 = [0, 1, 2, 3].reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0); // sum is 6
//Alternatively written with an arrow function:
var total = [0, 1, 2, 3].reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
//================================================================================================
//Sum of values in an object array
var initialValue = 0;
var sum5 = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce(function(
  accumulator,
  currentValue
) {
  return accumulator + currentValue.x;
},
initialValue);
console.log(sum5); // logs 6

//Alternatively written with an arrow function:
var initialValue = 0;
var sum6 = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce(
  (accumulator, currentValue) => accumulator + currentValue.x,
  initialValue
);
console.log(sum6); // logs 6

//================================================================================================
//Flatten an array of arrays
var flattened = [
  [0, 1],
  [2, 3],
  [4, 5]
].reduce(function(accumulator, currentValue) {
  return accumulator.concat(currentValue);
}, []); // flattened is [0, 1, 2, 3, 4, 5]

//Alternatively written with an arrow function:
var flattened = [
  [0, 1],
  [2, 3],
  [4, 5]
].reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);

//================================================================================================
//Counting instances of values in an object
var names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];
var countedNames = names.reduce(function(allNames, name) {
  if (name in allNames) {
    allNames[name]++;
  } else {
    allNames[name] = 1;
  }
  return allNames;
}, {});
console.log(countedNames);
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }

//================================================================================================
//Grouping objects by a property
var people = [
  { name: "Alice", age: 21 },
  { name: "Max", age: 20 },
  { name: "Jane", age: 20 }
];

function groupBy(objectArray, property) {
  return objectArray.reduce(function(acc, obj) {
    var key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}

var groupedPeople = groupBy(people, "age");
console.log(groupedPeople);
// groupedPeople is:
// {
//   20: [
//     { name: 'Max', age: 20 },
//     { name: 'Jane', age: 20 }
//   ],
//   21: [{ name: 'Alice', age: 21 }]
// }

//================================================================================================
// Bonding arrays contained in an array of objects using the spread operator and initialValue
// friends - an array of objects 
// where object field "books" - list of favorite books 
var friends = [{
  name: 'Anna',
  books: ['Bible', 'Harry Potter'],
  age: 21
}, {
  name: 'Bob',
  books: ['War and peace', 'Romeo and Juliet'],
  age: 26
}, {
  name: 'Alice',
  books: ['The Lord of the Rings', 'The Shining'],
  age: 18
}];

// allbooks - list which will contain all friends' books +  
// additional list contained in initialValue
var allbooks = friends.reduce(function(accumulator, currentValue) {
  return [...accumulator, ...currentValue.books];
}, ['Alphabet']);

console.log(allbooks);
// allbooks = ['Alphabet', 'Bible', 'Harry Potter', 'War and peace', 
//   'Romeo and Juliet', 'The Lord of the Rings', 'The Shining']

//================================================================================================
//Remove duplicate items in array
//Note: If you are using an environment compatible with Set and Array.from(), you could use let orderedArray = Array.from(new Set(myArray)); to get an array where
//duplicate items have been removed.
var myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
var myOrderedArray = myArray.reduce(function (accumulator, currentValue) {
  if (accumulator.indexOf(currentValue) === -1) {
    accumulator.push(currentValue);
  }
  return accumulator
}, [])

console.log(myOrderedArray);