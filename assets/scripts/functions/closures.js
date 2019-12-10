/*A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure 
gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time. */

function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();
//init() creates a local variable called name and a function called displayName(). The displayName() function is an inner function that is defined inside init() and is
//only available within the body of the init() function. Note that the displayName() function has no local variables of its own. However, since inner functions have
//access to the variables of outer functions, displayName() can access the variable name declared in the parent function, init().

function makeFunc() {
  var name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();

/*Running this code has exactly the same effect as the previous example of the init() function above; what's different — and interesting — is that the displayName() 
  inner function is returned from the outer function before being executed.

  At first glance, it may seem unintuitive that this code still works. In some programming languages, the local variables within a function exist only for the duration 
  of that function's execution. Once makeFunc() has finished executing, you might expect that the name variable would no longer be accessible. However, because the code 
  still works as expected, this is obviously not the case in JavaScript.

  The reason is that functions in JavaScript form closures. A closure is the combination of a function and the lexical environment within which that function was declared.
  This environment consists of any local variables that were in-scope at the time the closure was created. In this case, myFunc is a reference to the instance of the 
  function displayName created when makeFunc is run. The instance of displayName maintains a reference to its lexical environment, within which the variable name exists. 
  For this reason, when myFunc is invoked, the variable name remains available for use and "Mozilla" is passed to alert. */

//Here's a slightly more interesting example — a makeAdder function:
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12

/*In this example, we have defined a function makeAdder(x), which takes a single argument, x, and returns a new function. The function it returns takes a single argument, 
y, and returns the sum of x and y.

In essence, makeAdder is a function factory — it creates functions which can add a specific value to their argument. In the above example we use our function factory to 
create two new functions — one that adds 5 to its argument, and one that adds 10.

add5 and add10 are both closures. They share the same function body definition, but store different lexical environments. In add5's lexical environment, x is 5, 
while in the lexical environment for add10, x is 10.*/

//===================================================================================================================================================================
//In JavaScript - especially in older scripts - you sometimes find a pattern described as "IIFEs". IIFE stands for "Immediately Invoked Function Expression" and the
//pattern you might find looks like this (directly in a script file):
(function() {
  var age = 30;
  console.log(age); // 30
})();
//console.log(age); // Error: "age is not defined"

//===================================================================================================================================================================
/*https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Recursion
Closures
Closures are one of the most powerful features of JavaScript. JavaScript allows for the nesting of functions and grants the inner function full access to all the variables
and functions defined inside the outer function (and all other variables and functions that the outer function has access to).

However, the outer function does not have access to the variables and functions defined inside the inner function. This provides a sort of encapsulation for the variables
of the inner function.

Also, since the inner function has access to the scope of the outer function, the variables and functions defined in the outer function will live longer than the duration
of the outer function execution, if the inner function manages to survive beyond the life of the outer function. A closure is created when the inner function is somehow 
made available to any scope outside the outer function.
*/
var pet = function(name) {
  // The outer function defines a variable called "name"
  var getName = function() {
    return name; // The inner function has access to the "name" variable of the outer
    //function
  };
  return getName; // Return the inner function, thereby exposing it to outer scopes
};
myPet = pet("Vivie");

myPet(); // Returns "Vivie"

//It can be much more complex than the code above. An object containing methods for manipulating the inner variables of the outer function can be returned.
var createPet = function(name) {
  var sex;

  return {
    setName: function(newName) {
      name = newName;
    },

    getName: function() {
      return name;
    },

    getSex: function() {
      return sex;
    },

    setSex: function(newSex) {
      if (
        typeof newSex === "string" &&
        (newSex.toLowerCase() === "male" || newSex.toLowerCase() === "female")
      ) {
        sex = newSex;
      }
    }
  };
};

var pet = createPet("Vivie");
pet.getName(); // Vivie

pet.setName("Oliver");
pet.setSex("male");
pet.getSex(); // male
pet.getName(); // Oliver

//In the code above, the name variable of the outer function is accessible to the inner functions, and there is no other way to access the inner variables except through
//the inner functions. The inner variables of the inner functions act as safe stores for the outer arguments and variables. They hold "persistent" and "encapsulated" data 
//for the inner functions to work with. The functions do not even have to be assigned to a variable, or have a name.

var getCode = (function() {
  var apiCode = "0]Eal(eh&2"; // A code we do not want outsiders to be able to modify...

  return function() {
    return apiCode;
  };
})();

getCode(); // Returns the apiCode
//Caution: There are a number of pitfalls to watch out for when using closures!
//If an enclosed function defines a variable with the same name as a variable in the outer scope, then there is no way to refer to the variable in the outer scope again.  
//(The inner scope variable "overrides" the outer one, until the program exits the inner scope.)

var createPet = function(name) {
  // The outer function defines a variable called "name".
  return {
    setName: function(name) {
      // The enclosed function also defines a variable called "name".
      name = name; // How do we access the "name" defined by the outer function?
    }
  };
};
