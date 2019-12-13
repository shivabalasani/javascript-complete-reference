//The Generator object is returned by a generator function and it conforms to both the iterable protocol and the iterator protocol.

function* gen() {
  yield 1;
  yield 2;
  yield 3;
}
var g = gen(); // "Generator { }"

//Generator.prototype.next() : Returns a value yielded by the yield expression.
//enerator.prototype.return() : Returns the given value and finishes the generator.
//Generator.prototype.throw() : Throws an error to a generator (also finishes the generator, unless caught from within that generator).

function* idMaker() {
  var index = 0;
  while (true) yield index++;
}

var gen = idMaker(); // "Generator { }"

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2

//Example
const company = {
  // curEmployee: 0,
  employees: ["Max", "Manu", "Anna"],
  // next() {
  //   if (this.curEmployee >= this.employees.length) {
  //     return { value: this.curEmployee, done: true };
  //   }
  //   const returnValue = {
  //     value: this.employees[this.curEmployee],
  //     done: false
  //   };
  //   this.curEmployee++;
  //   return returnValue;
  // },
  [Symbol.iterator]: function* employeeGenerator() {
    // let employee = company.next();
    // while(!employee.done) {
    //   yield employee.value;
    //   employee = company.next();
    // }
    let currentEmployee = 0;
    while (currentEmployee < this.employees.length) {
      yield this.employees[currentEmployee];
      currentEmployee++;
    }
  }
};
//Using for-of and Spread operator with objects
for (const employee of company) {
  console.log(employee);
}
console.log([...company]);
// const it = company.getEmployee();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

const persons = ["Max", "Manu"];
console.log(persons); // Arrays are objects which interally uses Symbol.iterator to loop through.
