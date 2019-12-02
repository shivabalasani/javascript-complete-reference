/*
Primitive parameters (such as a number) are passed to functions by value; the value is passed to the function, but if the function 
changes the value of the parameter, this change is not reflected globally or in the calling function.

If you pass an object (i.e. a non-primitive value, such as Array or a user-defined object) as a parameter and the function changes 
the object's properties, that change is visible outside the function, as shown in the following example:
*/

function myFunc(theObject) {
  theObject.make = 'Toyota';
}

var mycar = {make: 'Honda', model: 'Accord', year: 1998};
var x, y;

x = mycar.make; // x gets the value "Honda"
console.log(x);

myFunc(mycar);
y = mycar.make; // y gets the value "Toyota"
                // (the make property was changed by the function)
console.log(y);