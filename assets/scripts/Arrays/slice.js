
//The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end 
//represent the index of items in that array. The original array will not be modified.
const testResults  = [1, -5.3, 1.5];
const storedResults = testResults;

testResults.push(5.91);
console.log(storedResults, testResults); // Arrays are reference values so both the arrays will change. [ 1, -5.3, 1.5, 5.91 ] [ 1, -5.3, 1.5, 5.91 ]

//returns a brand new array. Can be used to copy an array.
const storedResultsCopy = testResults.slice();
testResults.push(25.1);
console.log(storedResultsCopy, testResults); //storedResultsCopy won't be affected . [ 1, -5.3, 1.5, 5.91 ] [ 1, -5.3, 1.5, 5.91, 25.1 ]


const subset = testResults.slice(0,2); //copies from 0 to 2 without including 2
console.log(subset);  //[1, -5.3]


//Can use negative indexes 
const negsubset = testResults.slice(-3,-1);
console.log(negsubset);     // [1.5, 5.91]
//A negative index can be used, indicating an offset from the end of the sequence. 
//slice(2,-1) extracts the third element through the second-to-last element in the sequence.



//MDN
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]
console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]


/*slice does not alter the original array. It returns a shallow copy of elements from the original array. 
Elements of the original array are copied into the returned array as follows:

    For object references (and not the actual object), slice copies object references into the new array. Both the original and new array refer to the same object. 
    If a referenced object changes, the changes are visible to both the new and original arrays.

    For strings, numbers and booleans (not String, Number and Boolean objects), slice copies the values into the new array. Changes to the string, 
    number or boolean in one array do not affect the other array.
If a new element is added to either array, the other array is not affected.
*/
// Using slice, create newCar from myCar.
var myHonda = { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } };
var myCar = [myHonda, 2, 'cherry condition', 'purchased 1997'];
var newCar = myCar.slice(0, 2);

// Display the values of myCar, newCar, and the color of myHonda
//  referenced from both arrays.
console.log('myCar = ' + JSON.stringify(myCar)); //myCar = [{"color":"red","wheels":4,"engine":{"cylinders":4,"size":2.2}},2,"cherry condition","purchased 1997"]
console.log('newCar = ' + JSON.stringify(newCar));  //newCar = [{"color":"red","wheels":4,"engine":{"cylinders":4,"size":2.2}},2]
console.log('myCar[0].color = ' + myCar[0].color); //myCar[0].color = red
console.log('newCar[0].color = ' + newCar[0].color); //newCar[0].color = red

// Change the color of myHonda.
myHonda.color = 'purple';
console.log('The new color of my Honda is ' + myHonda.color); //The new color of my Honda is purple

// Display the color of myHonda referenced from both arrays.
console.log('myCar[0].color = ' + myCar[0].color); //myCar[0].color = purple
console.log('newCar[0].color = ' + newCar[0].color); //newCar[0].color = purple