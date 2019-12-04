//Object basics
//An object is a collection of related data and/or functionality (which usually consists of several variables and functions — which are called properties and methods
//when they are inside objects.)
/*const objectName = {
  member1Name: member1Value,
  member2Name: member2Value,
  member3Name: member3Value
};*/

const emptyPerson = {};
console.log(emptyPerson); // Output could be [object Object] or Object { } or  { }

const userChosenKeyName = 'level';
const person = {
  name: ["Bob", "Smith"],
  age: 32,
  gender: "male",
  'first name': "Bob",
  'last-name': "Smith",
  interests: ["music", "skiing"],
  1.5: 'hello', //1.5 will be coarsed as a string
  [userChosenKeyName]: "Manager",
  bio: function() {
    alert(
      this.name[0] +
        " " +
        this.name[1] +
        " is " +
        this.age +
        " years old. He likes " +
        this.interests[0] +
        " and " +
        this.interests[1] +
        "."
    );
  },
  greeting: function() {
    alert("Hi! I'm " + this.name[0] + ".");
  }
};
console.log(person.name); //[ 'Bob', 'Smith' ]
console.log(person.name[0]); //Bob
console.log(person.age); //32
console.log(person.interests[1]); //skiing
console.log(person['first name']); //Cannot be accessed using dot
console.log(person['last-name']); //Cannot be accessed using dot
console.log(person[1.5]); //Don't need to add ''
console.log(person.isAdmin); // Accessing a property which is not defined outputs undefined.
delete person.gender //you can delete a property from the object.
//person.gender = undefined; //Same as deleting a property of an object.
console.log(person);
/*The value of an object member can be pretty much anything — in our person object we've got a string, a number, two arrays, 
  and two functions. The first four items are data items, and are referred to as the object's properties. The last two items are 
  functions that allow the object to do something with that data, and are referred to as the object's methods.
  An object like this is referred to as an object literal — we've literally written out the object contents as we've come to create it. 
  This is in contrast to objects instantiated from classes

  Dot notation
  Above, you accessed the object's properties and methods using dot notation. e.g person.age,person.interests[1],person.bio()

 Sub-namespaces
 It is even possible to make the value of an object member another object. For example, try changing the name member from
  name: ['Bob', 'Smith'], to name : {
                                first: 'Bob',
                                last: 'Smith'
                              },

 Here we are effectively creating a sub-namespace. This sounds complex, but really it's not — to access these items you just need 
to  chain the extra step onto the end with another dot. Try these in the JS console: */
person.name.first;
person.name.last;

/*
Bracket notation
There is another way to access object properties — using bracket notation. Instead of using these:
person.age
person.name.first

You can use
*/
person["age"];
person["name"]["first"];
/*
This looks very similar to how you access the items in an array, and it is basically the same thing — instead of using an index 
number to select an item, you are using the name associated with each member's value. It is no wonder that objects are sometimes 
called associative arrays — they map strings to values in the same way that arrays map numbers to values.

Setting object members
So far we've only looked at retrieving (or getting) object members — you can also set (update) the value of object members by 
simply declaring the member you want to set (using dot or bracket notation), like this:
*/
person.age = 45;
person["name"]["last"] = "Cratchit";

//Setting members doesn't just stop at updating the values of existing properties and methods; you can also create completely new members.
person["eyes"] = "hazel";
person.farewell = function() {
  alert("Bye everybody!");
};
//One useful aspect of bracket notation is that it can be used to set not only member values dynamically, but member names too.
let myDataName = "height";
let myDataValue = "1.75m";
person[myDataName] = myDataValue;

//The this keyword refers to the current object the code is being written inside — so in this case this is equivalent to person.So why not just write person instead?
//As you'll see in the Object-oriented JavaScript for beginners article, when we start creating constructors and so on, this is very useful — it always ensures that the
//correct values are used when a member's context changes (for example, two different person object instances may have different names, but we want to use their own name
//when saying their greeting).
const person1 = {
  name: "Chris",
  greeting: function() {
    alert("Hi! I'm " + this.name + ".");
  }
};

const person2 = {
  name: "Deepti",
  greeting: function() {
    alert("Hi! I'm " + this.name + ".");
  }
};

//In this case, person1.greeting() outputs "Hi! I'm Chris."; person2.greeting() on the other hand outputs "Hi! I'm Deepti.", even though the method's code is exactly
//the same in each case. As we said earlier, this is equal to the object the code is inside

/*
Objects in JavaScript
Primitive Values       Reference Values (= Objects)
Numbers                Everything else!
Strings                { … }  This is Object Literal
Booleans               Arrays
null                   DOM Nodes
undefined              … other built-in objects
Symbol
*/


const numbers = {5: 'hi', 1: 'true'};
console.log(numbers); //{ '1': 'true', '5': 'hi' } nummbers will be sorted but if strings are used then the insertion order is kept
