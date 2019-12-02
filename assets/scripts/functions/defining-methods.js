//Defining methods
//A method is a function associated with an object, or, simply put, a method is a property of an object that is a function.
 //Methods are defined the way normal functions are defined, except that they have to be assigned as the property of an object. 
var myObj = {
  myMethod: function(params) {
    // ...do something
  },
  // OR THIS WORKS TOO
  myOtherMethod(params) {
    // ...do something else
  }
};
//where objectName is an existing object, methodname is the name you are assigning to the method, and functionName is the name 
//of the function.

var obj = {
    foo() {
      return 'bar';
    }
  }
console.log(obj.foo());  // expected output: "bar"

//The shorthand syntax is similar to the getter and setter syntax introduced in ECMAScript 2015.
var obj = {
    foo: function() {
      /* code */
    },
    bar: function() {
      /* code */
    }
  };
  //You are now able to shorten this to:
  var obj = {
    foo() {
      /* code */
    },
    bar() {
      /* code */
    }
  };
  
