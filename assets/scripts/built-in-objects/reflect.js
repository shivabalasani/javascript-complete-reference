//Reflect is a built-in object that provides methods for interceptable JavaScript operations. The methods are the same as those of proxy handlers.
//Reflect is not a function object, so it's not constructible. Unlike most global objects, Reflect is not a constructor. You cannot use it with a new operator or invoke
//the Reflect object as a function. All properties and methods of Reflect are static (just like the Math object).

//The Reflect object, introduced in ES2015, is a built-in object that provides methods to interface with JavaScript objects. Some of the static functions that exist on
// Reflect also correspond to methods available on Object, which predates ES2015. Although some of the methods appear to be similar in their behavior, there are often 
//subtle differences between them.

const course = {
  title: "JavaScript - The Complete Guide"
};

Reflect.setPrototypeOf(course, {
  toString() {
    return 'Reflect -' + this.title;
  }
});

console.log(course.toString());
Reflect.deleteProperty(course, "title");
// Object.deleteProperty(course, 'title'); // Does not work
// delete course.title;
console.log(course);
