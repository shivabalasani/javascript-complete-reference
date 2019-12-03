
//The map() method creates a new array with the results of calling a provided function on every element in the calling array.
const tax = 0.19;

//The map() method creates a new array with the results of calling a provided function on every element in the calling array.
const taxtAdjustedPrices = prices.map((price, idx, prices) => {
    const priceObj = {index : idx , taxAdjPrice : price * (1 + tax) };
    return priceObj
});
console.log(prices, taxtAdjustedPrices);
/* Output : [ 10.99, 5.99, 1.99, 6.99 ] [
    { index: 0, taxAdjPrice: 13.0781 },
    { index: 1, taxAdjPrice: 7.1281 },
    { index: 2, taxAdjPrice: 2.3681 },
    { index: 3, taxAdjPrice: 8.3181 }
  ] */

//=======================================================================
var numbers = [1, 4, 9];
var roots = numbers.map(function(num) {
    return Math.sqrt(num)
}); // roots is now [1, 2, 3]  numbers is still [1, 4, 9]

//=======================================================================
//Using map to reformat objects in an array.The following code takes an array of objects and creates a new array containing the newly reformatted objects.
var kvArray = [{key: 1, value: 10}, 
    {key: 2, value: 20}, 
    {key: 3, value: 30}];

var reformattedArray = kvArray.map(obj =>{ 
var rObj = {};
rObj[obj.key] = obj.value;
return rObj;
});
// reformattedArray is now [{1: 10}, {2: 20}, {3: 30}], 

// kvArray is still: 
// [{key: 1, value: 10}, 
//  {key: 2, value: 20}, 
//  {key: 3, value: 30}]

//=======================================================================
//Mapping an array of numbers using a function containing an argument
var numbers = [1, 4, 9];
var doubles = numbers.map(function(num) {
  return num * 2;
}); // doubles is now [2, 8, 18]  numbers is still [1, 4, 9]

//=======================================================================
//Using map generically. This example shows how to use map on a String to get an array of bytes in the ASCII encoding representing the character values:

var map = Array.prototype.map;
var a = map.call('Hello World', function(x) { 
  return x.charCodeAt(0); 
});// a now equals [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]


//=======================================================================
//Using map generically querySelectorAll
//This example shows how to iterate through a collection of objects collected by querySelectorAll. This is because querySelectorAll returns a NodeList which is a 
//collection of objects.
//In this case we return all the selected options' values on the screen:
var elems = document.querySelectorAll('select option:checked');
var values = Array.prototype.map.call(elems, function(obj) {
  return obj.value;
});
console.log(values);
//Easier way would be using Array.from() method.

//Tricky use cases.... MDN