/*Classes & Instances
Objects                                                                 Classes
----------------------------------------------------------------------------------------------------------------------------
1) “The things you work with in code”                                      “Blueprints for objects” (theoretical definition)
2) Instances of classes (= based on  classes)                              Define how objects look like, which properties and methods they have
3) Class-based creation is an alternative to using object literals!        Classes make creation of multiple, similar objects much easier
*/

class Product {
  title = "DEFAULT";
  imageUrl;            //These are (Public) Class Fields
  description;
  price;

  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;  //These are (Public) Class Properties
    this.price = price;
  }

  printInfo() { // This is (Public) Class Method
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

