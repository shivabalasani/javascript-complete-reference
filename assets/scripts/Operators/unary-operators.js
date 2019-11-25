//The delete operator deletes an object, an object's property, or an element at a specified index in an array. The syntax is:
delete objectName;
delete objectName.property;
delete objectName[index];
delete property; // legal only within a with statement

x = 42;
var y = 43;
myobj = new Number();
myobj.h = 4;    // create property h
delete x;       // returns true (can delete if declared implicitly)
delete y;       // returns false (cannot delete if declared with var)
delete Math.PI; // returns false (cannot delete predefined properties)
delete myobj.h; // returns true (can delete user-defined properties)
delete myobj;   // returns true (can delete if declared implicitly)

//The typeof operator is used in either of the following ways: typeof operand or typeof (operand)
var myFun = new Function('5 + 2');
var shape = 'round';
var size = 1;
var foo = ['Apple', 'Mango', 'Orange'];
var today = new Date();

typeof myFun;       // returns "function"
typeof shape;       // returns "string"
typeof size;        // returns "number"
typeof foo;         // returns "object"
typeof today;       // returns "object"
typeof doesntExist; // returns "undefined"

typeof true; // returns "boolean"
typeof null; // returns "object"

typeof 62;            // returns "number"
typeof 'Hello world'; // returns "string"

typeof document.lastModified; // returns "string"
typeof window.length;         // returns "number"
typeof Math.LN2;              // returns "number"

typeof blur;        // returns "function"
typeof eval;        // returns "function"
typeof parseInt;    // returns "function"
typeof shape.split; // returns "function"

typeof Date;     // returns "function"
typeof Function; // returns "function"
typeof Math;     // returns "object"
typeof Option;   // returns "function"
typeof String;   // returns "function"

//The void operator is used in either of the following ways: void (expression) or void expression
//<a href="javascript:void(0)">Click here to do nothing</a>