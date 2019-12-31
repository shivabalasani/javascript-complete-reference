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