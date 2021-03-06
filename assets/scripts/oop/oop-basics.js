/*Classes & Instances
Objects                                                                 Classes
----------------------------------------------------------------------------------------------------------------------------
1) “The things you work with in code”                                      “Blueprints for objects” (theoretical definition)
2) Instances of classes (= based on  classes)                              Define how objects look like, which properties and methods they have
3) Class-based creation is an alternative to using object literals!        Classes make creation of multiple, similar objects much easier
*/

class Product {
  title = "DEFAULT";
  imageUrl; //These are (Public) Class Fields
  description;
  price;

  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc; //These are (Public) Class Properties
    this.price = price;
  }

  printInfo() {
    // This is (Public) Class Method
    console.log(this.title, this.description);
  }
}

//creating object based on the blueprint
const productList = {
  products: [
    new Product("A Pillow", "image", "A soft Pillow", "19.99"),
    new Product("A Carpet", "image", "A carpet", "89.99")
  ]
};

/*
Static Properties, Fields & Methods
Static Field / Property / Method                                  Instance Field / Property / Method
----------------------------------------------------------------------------------------------------------------------------
1)Defined with static keyword                                     Defined without static keyword

2) Only accessible on class itself,                               Only accessible on instances (=objects) based on class
without instantiation (i.e. not on instance)  

3) Typically used in helper classes,                              Used for core, re-usable logic
global configuration etc.
*/

const obj = new Object(); //Same as const obj = {};
console.log(obj); // outputs {}

const person = {
  name: "Max",
  greet() {
    console.log(this.name);
  }
};

console.log(Object.getOwnPropertyDescriptors(person));
/*{
  name: {
    value: 'Max',
    writable: true,
    enumerable: true,  //can iterate 
    configurable: true //can be deleted
  },
  greet: {
    value: [Function: greet],
    writable: true,
    enumerable: true,
    configurable: true
  }
}*/
Object.defineProperty(person, "name", {
  configurable: false,
  enumerable: false,
  value: person.name,
  writable: false
});
person.name = 'Maxxxxxx';
delete person.name; //Does not delete since configurable is set to false
for(const key in person){
  console.log('----------'+key +'----------');  //Outputs only greet because we set enumerable to false on name
}
console.log(person.name); // Output Max since we set writable to false