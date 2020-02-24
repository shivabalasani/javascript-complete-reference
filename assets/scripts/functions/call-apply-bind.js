//-----------------------------------------------------------------
const wizard = {
    name: 'Merlin',
    health: 100,
    heal: function(num1, num2) {
      this.health += num1 + num2;
    }
  }
  const archer = {
    name: 'Robin Hood',
    health: 50
  }
  //Call and apply are useful for borrowing methods of another object. 
  //Bind is used to call functions later on with lexical context.
  wizard.heal.call(archer, 10, 20) //Calls a method of an object, substituting another object for the current object.
  console.log(archer)

  wizard.heal.apply(archer, [30, 40]) //Calls the function, substituting the specified object for the this value of the function, 
  console.log(archer)                 //and the specified array for the arguments of the function.

  const healArcher = wizard.heal.bind(archer, 50, 60); //For a given function, creates a bound function that has the same body as 
  healArcher()                                  //the original function. The this object of the bound function is associated with the 
  console.log(archer)                           //specified object, and has the specified initial parameters.


//-----------------------------------------------------------------
var person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
}

var logName = function(lang1, lang2) {
    console.log('Logged: ' + this.getFullName()); 
    console.log('Arguments: ' + lang1 + ' ' + lang2); 
    console.log('-----------');
}

var logPersonName = logName.bind(person); //Bind does not execute the functions
logPersonName('en'); // Logged: John Doe
                     // Arguments: en undefined
                     // -----------
                     
//call and apply executes the function
logName.call(person, 'en', 'es'); //Logged: John Doe
                                  //  Arguments: en es
                                  //  -----------

logName.apply(person, ['en', 'es']); //Logged: John Doe
                                     //  Arguments: en es
                                     //  -----------

(function(lang1, lang2) {
    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('-----------');
    
}).apply(person, ['es', 'en']); //Logged: John Doe
                                //  Arguments: es en
                                //  -----------


// function borrowing
var person2 = {
    firstname: 'Jane',
    lastname: 'Doe'
}
console.log(person.getFullName.apply(person2)); //Jane Doe


// function currying - creating a copy of a function but with some preset parameters
function multiply(a, b) {
    console.log ('a value is ------> ' + a);
    console.log ('b value is ------> ' + b);
    return a*b;   
}

var multipleByTwo = multiply.bind(this, 2); //setting a value to 2 and b value to 4
console.log(multipleByTwo(4)); 
//a value is ------> 2
//b value is ------> 4
//8

var multipleByThree = multiply.bind(this, 3, 2);
console.log(multipleByThree(4));  
//a value is ------> 3
//b value is ------> 2
//6




