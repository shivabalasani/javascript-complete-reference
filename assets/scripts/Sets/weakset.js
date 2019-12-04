//The WeakSet object lets you store weakly held objects in a collection.
//Syntax : new WeakSet([iterable]); 
//iterable : If an iterable object is passed, all of its elements will be added to the new WeakSet. null is treated as undefined.

//Using the WeakSet object
var ws = new WeakSet();
var foo = {};
var bar = {};

ws.add(foo);
ws.add(bar);
//ws.add(1); //TypeError: Invalid value used in weak set. Only objects can be stored.

ws.has(foo);    // true
ws.has(bar);    // true

ws.delete(foo); // removes foo from the set
ws.has(foo);    // false, foo has been removed
//Note that foo !== bar. While they are similar objects, they are not the same object. And so they are both added to the set.

/*
WeakSet objects are collections of objects. An object in the WeakSet may occur only once; it is unique in the WeakSet's collection.

The main differences to the Set object are:

In contrast to Sets, WeakSets are collections of objects only and not of arbitrary values of any type.
The WeakSet is weak: References to objects in the collection are held weakly. If there is no other reference to an object stored in the WeakSet, they can be 
garbage collected. That also means that there is no list of current objects stored in the collection. WeakSets are not enumerable.
*/

let person = {name: 'Max'};
const persons = new WeakSet();
persons.add(person);

//WeakSet will allow person to be garbage collected if not used whearas Set won't allow.
person = null;

console.log(persons); 