/*The iterable protocol
The iterable protocol allows JavaScript objects to define or customize their iteration behavior, such as what values are looped over in a for..of construct. 
Some built-in types are built-in iterables with a default iteration behavior, such as Array or Map, while other types (such as Object) are not.

In order to be iterable, an object must implement the @@iterator method, meaning that the object (or one of the objects up its prototype chain) must have a property 
with a @@iterator key which is available via constant Symbol.iterator:

Property	        Value
[Symbol.iterator]	A zero arguments function that returns an object, conforming to the iterator protocol.

Whenever an object needs to be iterated (such as at the beginning of a for..of loop), its @@iterator method is called with no arguments, and the returned iterator is 
used to obtain the values to be iterated.


The iterator protocol
The iterator protocol defines a standard way to produce a sequence of values (either finite or infinite), and potentially a return value when all values have been generated.

An object is an iterator when it implements a next() method with the following semantics:

Property	Value
next	
A zero arguments function that returns an object with at least the following two properties:

done (boolean) -
    Has the value true if the iterator is past the end of the iterated sequence. In this case value optionally specifies the return value of the iterator.
    Has the value false if the iterator was able to produce the next value in the sequence. This is equivalent of not specifying the done property altogether.
value - any JavaScript value returned by the iterator. Can be omitted when done is true.

The next method always has to return an object with appropriate properties including done and value. If a non-object value gets returned (such as false or undefined), a TypeError ("iterator.next() returned a non-object value") will be thrown.
*/

//Not every iterable is an array. Other iterables are : NodeList,String,Map,Set
//Array-like Objects : Objects that have a length property and use indexes to access items. 
//Not every array-like object is an array. Other array-likes are : NodeList, String

var myIterator = {
    next: function() {
        // ...
    },
    [Symbol.iterator]: function() { return this }
};

//===============================================================================================================
var someString = 'hi';
typeof someString[Symbol.iterator];          // "function"

var iterator = someString[Symbol.iterator]();
iterator + '';                               // "[object String Iterator]"
 
iterator.next();                             // { value: "h", done: false }
iterator.next();                             // { value: "i", done: false }
iterator.next();                             // { value: undefined, done: true }