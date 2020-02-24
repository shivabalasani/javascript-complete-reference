/*
'this' is the object that the function is a property of.

this == 'who called me'. this is dynamic scoped by default, to make its scope lexical use bind or arrow functionns.

A function's this keyword behaves a little differently in JavaScript compared to other languages. 
It also has some differences between strict mode and non-strict mode.

In most cases, the value of this is determined by how a function is called (runtime binding). It can't be set by assignment during 
execution, and it may be different each  time the function is called. ES5 introduced the bind() method to set the value of a 
function's this regardless of how it's called, and ES2015 introduced arrow functions  which don't provide their own this binding 
(it retains the this value of the enclosing lexical context).
Syntax this :A property of an execution context (global, function or eval) that, in non–strict mode, is always a reference to an 
object and in strict mode can be any value.
*/

var anonymousFunction = function() {
  console.log(this); // this does not belong in any object so it points to global Window object
}
anonymousFunction();

var test = {
  prop: 42,
  func: function() {
    return this.prop; //this points to the object that it belongs to which is the test object 
  }
};
console.log(test.func()); // expected output: 42

//=====================================================================================================================================================================
//1. Global context : In the global execution context (outside of any function), this refers to the global object whether in strict mode or not.
// In web browsers, the window object is also the global object:

// console.log(this === window); // true
a = 37;
// console.log(window.a); // 37
this.b = "MDN";
// console.log(window.b)  // "MDN"
//console.log(b); // "MDN"
//Note: You can always easily get the global object using the global globalThis property, regardless of the current context in which your code is running.

//=====================================================================================================================================================================
//2. Function context : Inside a function, the value of this depends on how the function is called.
//Simple call : Since the following code is not in strict mode, and because the value of this is not set by the call, this will default to the global object,
//which is window in a browser.

function f1() {
  return this;
}
// In a browser:
//f1() === window; // true
// In Node:
console.log(f1() === global); // true

//In strict mode, however, if the value of this is not set when entering an execution context, it remains as undefined, as shown in the following example:
function f2() {
  "use strict"; // see strict mode
  return this;
}
f2() === undefined; // true

//=====================================================================================================================================================================
//To set the value of this to a particular value when calling a function, use call(), or apply() as in the following examples.
//Example 1 : An object can be passed as the first argument to call or apply and this will be bound to it.

var obj = { a: "Custom" };
// This property is set on the global object
var a = "Global";

function whatsThis() {
  return this.a; // The value of this is dependent on how the function is called
}
whatsThis(); // 'Global'
whatsThis.call(obj); // 'Custom'
whatsThis.apply(obj); // 'Custom'

//=====================================================================================================================================================================
//Example 2:
function add(c, d) {
  return this.a + this.b + c + d;
}
var o = { a: 1, b: 3 };

// The first parameter is the object to use as  'this', subsequent parameters are passed as  arguments in the function call
add.call(o, 5, 7); // 16

// The first parameter is the object to use as 'this', the second is an array whose members are used as the arguments in the function call
add.apply(o, [10, 20]); // 34


//Note that in non–strict mode, with call and apply, if the value passed as this is not an object, an attempt will be made to convert it to an object using the internal 
//ToObject operation. So if the value passed is a primitive like 7 or 'foo', it will be converted to an Object using the related constructor, so the primitive number 7 is 
//converted to an object as if by new Number(7) and the string 'foo' to an object as if by new String('foo'), e.g.

function bar() {
  console.log(Object.prototype.toString.call(this));
}

bar.call(7);     // [object Number]
bar.call('foo'); // [object String]

//=====================================================================================================================================================================
//The bind method
//ECMAScript 5 introduced Function.prototype.bind(). Calling f.bind(someObject) creates a new function with the same body and scope as f, but where this occurs in the 
//original function, in the new function it is permanently bound to the first argument of bind, regardless of how the function is being used.

function f() {
  return this.a;
}

var g = f.bind({a: 'azerty'});
console.log(g()); // azerty

var h = g.bind({a: 'yoo'}); // bind only works once!
console.log(h()); // azerty

var o = {a: 37, f: f, g: g, h: h};
console.log(o.a, o.f(), o.g(), o.h()); // 37,37, azerty, azerty
console.log(' ----------------------End The bind method ---------------------------');

//=====================================================================================================================================================================
//Arrow functions
//In arrow functions, this retains the value of the enclosing lexical context's this. In global code, it will be set to the global object:

var globalObject = this;
var foo = (() => this);
console.log(foo() === globalObject); // true
console.log();

// Call as a method of an object
var obj = {func: foo};
console.log(obj.func() === globalObject); // true

// Attempt to set this using call
console.log(foo.call(obj) === globalObject); // true

// Attempt to set this using bind
foo = foo.bind(obj);
console.log(foo() === globalObject); // true
//No matter what, foo's this is set to what it was when it was created (in the example above, the global object). The same applies to arrow functions created inside other 
//functions: their this remains that of the enclosing lexical context.

// Create obj with a method bar that returns a function that returns its this. The returned function is created as an arrow function, so its this is permanently bound to 
// the this of its enclosing function. The value of bar can be set in the call, which in turn sets the value of the returned function.
var obj = {
  bar: function() {
    var x = (() => this);
    return x;
  }
};

// Call bar as a method of obj, setting its this to obj Assign a reference to the returned function to fn
var fn = obj.bar();

// Call fn without setting this, would normally default to the global object or undefined in strict mode
console.log(fn() === obj); // true

// But caution if you reference the method of obj without calling it
var fn2 = obj.bar;
// Calling the arrow function's this from inside the bar method() will now return window, because it follows the this from fn2.
//console.log(fn2()() == window); // true

//In the above, the function (call it anonymous function A) assigned to obj.bar returns another function (call it anonymous function B) that is created as an arrow function. 
//As a result, function B's  this is permanently set to the this of obj.bar (function A) when called. When the returned function (function B) is called, its this will 
//always be what it was set to initially. In the above code example, function B's this is set to function A's this which is obj, so it remains set to obj even when called 
//in a manner that would normally set its this to undefined or the global object (or any other method as in the previous example in the global execution context).
//=====================================================================================================================================================================



//Gotcha
var c = {
  name: 'The c object',
  log: function() {
    this.name = 'Updated c Objct'; //this refers to object c
    console.log(this); //{ name: 'Updated c Objct', log: [Function: log] }

    var setname = function(newname) {
      this.name = newname; //here this will not refer to the object it is enclosed in but it will point to global window object
    }
    setname('Updated again! The c object');
    console.log(this); //{ name: 'Updated c Objct', log: [Function: log] }
  }
}
c.log();

//use below pattern to avoid unintentional behaviour
var c1 = {
  name: 'The c object',
  log: function() {
    var self = this;
    self.name = 'Updated c Objct';
    console.log(self); //{ name: 'Updated c Objct', log: [Function: log] }

    var setname = function(newname) {
      self.name = newname;
    }
    setname('Updated again! The c object');
    console.log(self); //{ name: 'Updated again! The c object', log: [Function: log] }
  }
}
c1.log()


//===========================================================================================
//JS is weird:
const obj = {
  name: 'Billy',
  sing: function() {
    console.log(this) // in this case, it's a method on an object.
    var anotherFunc = function() {
      console.log(this)// this points to windows!
    }
  }
}
//To fix above issue
const obj = {
  name: 'Billy',
  sing: function() {
    console.log(this) // in this case, it's a method on an object.
    //var self = this //alternative approach is assign this to self and use self instead
    var anotherFunc = function() {
      console.log(this)// this points to windows!
    }
    anotherFunc.bind(this); //bind this to point to obj instead of windows.
  }
}
