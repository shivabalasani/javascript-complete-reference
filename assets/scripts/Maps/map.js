//The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a 
//key or a value. Syntax : new Map([iterable])
//iterable : An Array or other iterable object whose elements are key-value pairs (arrays with two elements, e.g. [[ 1, 'one' ],[ 2, 'two' ]]). Each key-value pair is 
//added to the new Map.
//In objects you can have strings or numbers or Symbol as keys but in maps you can have anything as key (Arrays, objects .etc). Order is guaranteed, duplicate keys are
//Not allowed and you access values by keys.

//Using the Map object
var myMap = new Map();

var keyString = 'a string',
    keyObj = {},
    keyFunc = function() {};

// setting the values
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, 'value associated with keyObj');
myMap.set(keyFunc, 'value associated with keyFunc');

myMap.size; // 3

// getting the values
myMap.get(keyString);    // "value associated with 'a string'"
myMap.get(keyObj);       // "value associated with keyObj"
myMap.get(keyFunc);      // "value associated with keyFunc"

myMap.get('a string');   // "value associated with 'a string'"
                         // because keyString === 'a string'
myMap.get({});           // undefined, because keyObj !== {}
myMap.get(function() {}); // undefined, because keyFunc !== function () {}
console.log(myMap);
console.log();

//=================================================================================================================================================
//Using NaN as Map keys
//NaN can also be used as a key. Even though every NaN is not equal to itself (NaN !== NaN is true), the following example works because NaNs are 
//indistinguishable from each other:

var myMap = new Map();
myMap.set(NaN, 'not a number');

myMap.get(NaN); // "not a number"

var otherNaN = Number('foo');
myMap.get(otherNaN); // "not a number"

//=================================================================================================================================================
//Iterating Map with for..of
//Maps can be iterated using a for..of loop:
var myMap = new Map();
myMap.set(0, 'zero');
myMap.set(1, 'one');
for (var [key, value] of myMap) {
  console.log(key + ' = ' + value);
}
// 0 = zero
// 1 = one

for (var key of myMap.keys()) {
  console.log(key);
}
// 0
// 1

for (var value of myMap.values()) {
  console.log(value);
}
// zero
// one

for (var [key, value] of myMap.entries()) {
  console.log(key + ' = ' + value);
}
// 0 = zero
// 1 = one
console.log();

//=================================================================================================================================================
//Iterating Map with forEach()
//Maps can be iterated using the forEach() method:

myMap.forEach(function(value, key) {
  console.log(key + ' = ' + value);
});
// Will show 2 logs; first with "0 = zero" and second with "1 = one"
console.log();

//=================================================================================================================================================
//Relation with Array objects
var kvArray = [['key1', 'value1'], ['key2', 'value2']];

// Use the regular Map constructor to transform a 2D key-value Array into a map
var myMap = new Map(kvArray);

myMap.get('key1'); // returns "value1"

// Use the Array.from function to transform a map into a 2D key-value Array
console.log(Array.from(myMap)); // Will show you exactly the same Array as kvArray

// A more succinct way to do the same with spread syntax
console.log([...myMap]);

// Or use the keys or values iterators and convert them to an array
console.log(Array.from(myMap.keys())); // Will show ["key1", "key2"]
console.log();

//=================================================================================================================================================
//Cloning and merging Maps
//Just like Arrays, Maps can be cloned: Keep in mind that the data itself is not cloned

var original = new Map([
  [1, 'one']
]);

var clone = new Map(original);

console.log(clone.get(1)); // one
console.log(original === clone); // false. Useful for shallow comparison
console.log();

//=================================================================================================================================================
//Maps can be merged, maintaining key uniqueness:
var first = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

var second = new Map([
  [1, 'uno'],
  [2, 'dos']
]);

// Merge two maps. The last repeated key wins.
// Spread operator essentially converts a Map to an Array
var merged = new Map([...first, ...second]);

console.log(merged.get(1)); // uno
console.log(merged.get(2)); // dos
console.log(merged.get(3)); // three
console.log();

//=================================================================================================================================================
//Maps can be merged with Arrays, too:
var first = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

var second = new Map([
  [1, 'uno'],
  [2, 'dos']
]);

// Merge maps with an array. The last repeated key wins.
var merged = new Map([...first, ...second, [1, 'eins']]);

console.log(merged.get(1)); // eins
console.log(merged.get(2)); // dos
console.log(merged.get(3)); // three
console.log();

//=================================================================================================================================================
//Usage notes
//Beware that setting Object properties works for Map objects as well and can cause considerable confusion. Therefore this:
var wrongMap = new Map();
wrongMap['bla'] = 'blaa';
wrongMap['bla2'] = 'blaaa2';
//still sort-of-works:

console.log(wrongMap); // Map { bla: 'blaa', bla2: 'blaaa2' }
//but does not produce expected results:

console.log(wrongMap.has('bla')); // false
console.log(wrongMap.delete('bla')); //false
console.log(wrongMap); // Map { bla: 'blaa', bla2: 'blaaa2' }

//and there is not much visual difference compared to the correct usage:

var myMap = new Map();
myMap.set('bla','blaa');
myMap.set('bla2','blaa2')
console.log(myMap); // Map { 'bla' => 'blaa', 'bla2' => 'blaa2' }

console.log(myMap.has('bla')); //true
console.log(myMap.delete('bla')); //true
console.log(myMap); //Map { 'bla2' => 'blaa2' }