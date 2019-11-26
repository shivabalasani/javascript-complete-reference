/*
for...of statement
The for...of statement creates a loop Iterating over iterable objects (including Array, Map, Set, arguments object and so on), invoking a custom 
iteration hook with statements to be executed for the value of each distinct property.

for (variable of object)
  statement
  */

 //The following example shows the difference between a for...of loop and a for...in loop. 
 //While for...in iterates over property names, for...of iterates over property values:
 const arr = [3, 5, 7];
 arr.foo = 'hello';
 
 for (const i in arr) {
    console.log(i); // logs "0", "1", "2", "foo"
 }

 console.log();
 //Do no have access to the index of the array. We have to manage it manually.
 for (const i of arr) {
    console.log(i); // logs 3, 5, 7
 }

