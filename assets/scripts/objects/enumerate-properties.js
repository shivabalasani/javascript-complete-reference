/*Enumerate the properties of an object
Starting with ECMAScript 5, there are three native ways to list/traverse object properties:

1) for...in loops
This method traverses all enumerable properties of an object and its prototype chain

2) Object.keys(o)
This method returns an array with all the own (not in the prototype chain) enumerable properties' names ("keys") of an object o.

3)Object.getOwnPropertyNames(o)
This method returns an array containing all own properties' names (enumerable or not) of an object o.
Before ECMAScript 5, there was no native way to list all properties of an object. However, this can be achieved with the following function:
*/
function listAllProperties(o) {
  var objectToInspect;
  var result = [];

  for (
    objectToInspect = o;
    objectToInspect !== null;
    objectToInspect = Object.getPrototypeOf(objectToInspect)
  ) {
    result = result.concat(Object.getOwnPropertyNames(objectToInspect));
  }

  return result;
}
