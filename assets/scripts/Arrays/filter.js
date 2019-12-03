//The filter() method creates a new array with all elements that pass the test implemented by the provided function.
//Syntax : var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])
/*Parameters
callback
    Function is a predicate, to test each element of the array. Return true to keep the element, false otherwise. It accepts three arguments:
element
    The current element being processed in the array.
index | Optional
    The index of the current element being processed in the array.
array | Optional
    The array filter was called upon.
thisArg | Optional
    Value to use as this when executing callback.*/

const prices  = [10.99, 5.99, 1.99, 6.99];
const filteredArray = prices.filter((price,idx, prices) =>{
    return price > 6;
});
console.log(filteredArray); //[ 10.99, 6.99 ]

//===========================================================================================
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);  // expected output: Array ["exuberant", "destruction", "present"]

//===========================================================================================
//Filtering out all small values
function isBigEnough(value) {
    return value >= 10;
  }
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough); 
console.log(filtered); // filtered is [12, 130, 44]

//===========================================================================================
//Filtering invalid entries from JSON
var arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    { },
    { id: null },
    { id: NaN },
    { id: 'undefined' }
  ];
  var invalidEntries = 0;
  function isNumber(obj) {
    return obj !== undefined && typeof(obj) === 'number' && !isNaN(obj);
  }
  function filterByID(item) {
    if (isNumber(item.id) && item.id !== 0) {
      return true;
    } 
    invalidEntries++;
    return false; 
  }  
  var arrByID = arr.filter(filterByID);
  console.log('Filtered Array\n', arrByID); 
  // Filtered Array
  // [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]
  
  console.log('Number of Invalid Entries = ', invalidEntries); // Number of Invalid Entries = 5