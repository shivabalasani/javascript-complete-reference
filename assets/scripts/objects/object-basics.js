const emptyPerson = {};
console.log(emptyPerson); // Output could be [object Object] or Object { } or  { }

const person = {
    name: ['Bob', 'Smith'],
    age: 32,
    gender: 'male',
    interests: ['music', 'skiing'],
    bio: function() {
      alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    },
    greeting: function() {
      alert('Hi! I\'m ' + this.name[0] + '.');
    }
  };
  /*The value of an object member can be pretty much anything — in our person object we've got a string, a number, two arrays, 
  and two functions. The first four items are data items, and are referred to as the object's properties. The last two items are 
  functions that allow the object to do something with that data, and are referred to as the object's methods.
  */
 /*
 Sub-namespaces
 It is even possible to make the value of an object member another object. For example, try changing the name member from
  name: ['Bob', 'Smith'], to
*/
  person.name = {
   first: 'Bob',
   last: 'Smith'
 };
 /*
 Here we are effectively creating a sub-namespace. This sounds complex, but really it's not — to access these items you just need 
to  chain the extra step onto the end with another dot. Try these in the JS console: */
person.name.first
person.name.last

 /*
Bracket notation
There is another way to access object properties — using bracket notation. Instead of using these:
person.age
person.name.first

You can use
*/
person['age']
person['name']['first']
/*
This looks very similar to how you access the items in an array, and it is basically the same thing — instead of using an index 
number to select an item, you are using the name associated with each member's value. It is no wonder that objects are sometimes 
called associative arrays — they map strings to values in the same way that arrays map numbers to values.
*/
/*
Setting object members
So far we've only looked at retrieving (or getting) object members — you can also set (update) the value of object members by 
simply declaring the member you want to set (using dot or bracket notation), like this:
*/
person.age = 45;
person['name']['last'] = 'Cratchit';
/*
Setting members doesn't just stop at updating the values of existing properties and methods; you can also create completely new members. 
*/
person['eyes'] = 'hazel';
person.farewell = function() { alert("Bye everybody!"); }