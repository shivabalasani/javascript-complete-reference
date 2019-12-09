/*Creating new objects
JavaScript has a number of predefined objects. In addition, you can create your own objects. You can create an object using an 
object initializer. Alternatively, you can first create a constructor function and then instantiate an object invoking that function 
in conjunction with the new operator.

1.Using object initializers
In addition to creating objects using a constructor function, you can create objects using an object initializer. Using object initializers is sometimes referred to as creating objects with literal notation. "Object initializer" is consistent with the terminology used by C++.

The syntax for an object using an object initializer is:

var obj = { property_1:   value_1,   // property_# may be an identifier...
            2:            value_2,   // or a number...
            // ...,
            'property n': value_n }; // or a string 
Objects are created as if a call to new Object() were made; that is, objects made from object literal expressions are instances of Object.

The following statement creates an object and assigns it to the variable x if and only if the expression cond is true:*/

if (cond) var x = {greeting: 'hi there'};

//The following example creates myHonda with three properties. Note that the engine property is also an object with its own properties.
var myHonda = {color: 'red', wheels: 4, engine: {cylinders: 4, size: 2.2}};

/*2.Using a constructor function
Alternatively, you can create an object with these two steps:

Define the object type by writing a constructor function. There is a strong convention, with good reason, to use a capital initial letter.
Create an instance of the object with new.

To define an object type, create a function for the object type that specifies its name, properties, and methods. 
For example, suppose you want to create an object type for cars. You want this type of object to be called Car, and you want it to 
have properties for make, model, and year. To do this, you would write the following function:*/

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

//Now you can create an object called mycar as follows:

var mycar = new Car('Eagle', 'Talon TSi', 1993);

//3.Using the Object.create method
//Objects can also be created using the Object.create() method. This method can be very useful, because it allows you to choose 
//the prototype object for the object you want to create, without having to define a constructor function.

// Animal properties and method encapsulation
var Animal = {
  type: 'Invertebrates', // Default value of properties
  displayType: function() {  // Method which will display type of Animal
    console.log(this.type);
  }
};

// Create new animal type called animal1 
var animal1 = Object.create(Animal);
animal1.displayType(); // Output:Invertebrates

// Create new animal type called Fishes
var fish = Object.create(Animal);
fish.type = 'Fishes';
fish.displayType(); // Output:Fishes