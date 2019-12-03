//The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), 
//separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
//Syntax : arr.join([separator])

const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join());
// expected output: "Fire,Air,Water"
console.log(elements.join(''));
// expected output: "FireAirWater"
console.log(elements.join('-'));
// expected output: "Fire-Air-Water"

//The string conversions of all array elements are joined into one string.
//If an element is undefined, null or an empty array [], it is converted to an empty string.

//Joining an array four different ways
var a = ['Wind', 'Water', 'Fire'];
a.join();      // 'Wind,Water,Fire'
a.join(', ');  // 'Wind, Water, Fire'
a.join(' + '); // 'Wind + Water + Fire'
a.join('');    // 'WindWaterFire'

//Joining an array-like object
//The following example joins array-like object (arguments), by calling Function.prototype.call on Array.prototype.join.
function f(a, b, c) {
  var s = Array.prototype.join.call(arguments);
  console.log(s); // '1,a,true'
}
f(1, 'a', true); //expected output: "1,a,true"


//Split
const data = 'new york;10.99;2000';
console.log(data.split(';')); //[ 'new york', '10.99', '2000' ]