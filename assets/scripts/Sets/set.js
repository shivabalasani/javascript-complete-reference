//The Set object lets you store unique values of any type, whether primitive values or object references.
//Syntax : new Set([iterable]);

const set1 = new Set([1, 2, 3, 4, 5]);
console.log(set1.has(1)); // expected output: true
console.log(set1.has(5)); // expected output: true
console.log(set1.has(6)); // expected output: false
//=======================================================================================
//Loop through entries
for (const entry of set1.entries()) {
  console.log(entry);
  /*[ 1, 1 ]
  [ 2, 2 ]
  [ 3, 3 ]
  [ 4, 4 ]
  [ 5, 5 ]*/
}

//=======================================================================================
//Using the Set object
var mySet = new Set();

mySet.add(1); // Set [ 1 ]
mySet.add(5); // Set [ 1, 5 ]
mySet.add(5); // Set [ 1, 5 ]
mySet.add("some text"); // Set [ 1, 5, 'some text' ]
var o = { a: 1, b: 2 };
mySet.add(o);

mySet.add({ a: 1, b: 2 }); // o is referencing a different object so this is okay
console.log(mySet); //Set { 1, 5, 'some text', { a: 1, b: 2 }, { a: 1, b: 2 } }

mySet.has(1); // true
mySet.has(3); // false, 3 has not been added to the set
mySet.has(5); // true
mySet.has(Math.sqrt(25)); // true
mySet.has("Some Text".toLowerCase()); // true
mySet.has(o); // true

mySet.size; // 5

mySet.delete(5); // removes 5 from the set
mySet.has(5); // false, 5 has been removed

mySet.size; // 4, we just removed one value
console.log(mySet); // Set [ 1, "some text", Object {a: 1, b: 2}, Object {a: 1, b: 2} ]

//=======================================================================================
//Relation with Array objects
var myArray = ["value1", "value2", "value3"];
// Use the regular Set constructor to transform an Array into a Set
var mySet = new Set(myArray);
mySet.has("value1"); // returns true
// Use the spread operator to transform a set into an Array.
console.log([...mySet]); // Will show you exactly the same Array as myArray

//=======================================================================================
//Remove duplicate elements from the array
// Use to remove duplicate elements from the array
const numbers = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5];
console.log([...new Set(numbers)]); // [2, 3, 4, 5, 6, 7, 32]

//=======================================================================================
//Relation with Strings
var text = "India";
var mySet = new Set(text);
mySet.size; // 5
console.log(mySet); // Set ['I', 'n', 'd', 'i', 'a']

//=======================================================================================
//Implementing basic set operations
function isSuperset(set, subset) {
  for (var elem of subset) {
    if (!set.has(elem)) {
      return false;
    }
  }
  return true;
}

function union(setA, setB) {
  var _union = new Set(setA);
  for (var elem of setB) {
    _union.add(elem);
  }
  return _union;
}

function intersection(setA, setB) {
  var _intersection = new Set();
  for (var elem of setB) {
    if (setA.has(elem)) {
      _intersection.add(elem);
    }
  }
  return _intersection;
}

function symmetricDifference(setA, setB) {
  var _difference = new Set(setA);
  for (var elem of setB) {
    if (_difference.has(elem)) {
      _difference.delete(elem);
    } else {
      _difference.add(elem);
    }
  }
  return _difference;
}

function difference(setA, setB) {
  var _difference = new Set(setA);
  for (var elem of setB) {
    _difference.delete(elem);
  }
  return _difference;
}

//Examples
var setA = new Set([1, 2, 3, 4]),
  setB = new Set([2, 3]),
  setC = new Set([3, 4, 5, 6]);

isSuperset(setA, setB); // => true
union(setA, setC); // => Set [1, 2, 3, 4, 5, 6]
intersection(setA, setC); // => Set [3, 4]
symmetricDifference(setA, setC); // => Set [1, 2, 5, 6]
difference(setA, setC); // => Set [1, 2]


//=======================================================================================
// Iterating Sets
// iterate over items in set
// logs the items in the order: 1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2} 
mySet = new Set ([ 1, "some text", {a: 1, b: 2}, {a: 1, b: 2} ]);
for (let item of mySet) console.log(item);

// logs the items in the order: 1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2} 
for (let item of mySet.keys()) console.log(item);
 
// logs the items in the order: 1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2} 
for (let item of mySet.values()) console.log(item);

// logs the items in the order: 1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2} 
//(key and value are the same here)
for (let [key, value] of mySet.entries()) console.log(key);

// convert Set object to an Array object, with Array.from
var myArr = Array.from(mySet); // [1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}]

// the following will also work if run in an HTML document
//mySet.add(document.body);
//mySet.has(document.querySelector('body')); // true

// converting between Set and Array
var mySet2 = new Set([1, 2, 3, 4]);
mySet2.size; // 4
[...mySet2]; // [1, 2, 3, 4]

// intersect can be simulated via 
//var intersection = new Set([...set1].filter(x => set2.has(x)));

// difference can be simulated via
//var difference = new Set([...set1].filter(x => !set2.has(x)));

// Iterate set entries with forEach
mySet2.forEach(function(value) {
    console.log(value);
}); // 1 2 3 4 5