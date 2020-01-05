//Function constructor creates Objects
function Person(firstname, lastname) {
    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('This function is invoked.');
}

Person.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname;   
}

var john = new Person('John', 'Doe');
console.log(john);

var jane = new Person('Jane', 'Doe');
console.log(jane);

Person.prototype.getFormalFullName = function() {
    return this.lastname + ', ' + this.firstname;   
}

console.log(john.getFormalFullName());




//Built in function constructors
String.prototype.isLengthGreaterThan = function(limit) {
    return this.length > limit;  
}

console.log("John".isLengthGreaterThan(3));

Number.prototype.isPositive = function() {
    return this > 0;   
}