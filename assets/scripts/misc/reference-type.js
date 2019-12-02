//All Objects are of reference type. They are stored in memory(Heap), variables store a pointer(address) to location in memory

let hobbies = ['Sports'];
let newHobbies = hobbies;
console.log(newHobbies);

hobbies.push('Cooking');
console.log(newHobbies);

//If we do not want to copy by reference
let moreHobbies = [...hobbies];
moreHobbies.push('Movies');
console.log(moreHobbies)
console.log(hobbies)


const person1 = {age: 30};
const person2 = {age: 30};
console.log(person1===person2); // returns false since person1 and person2 holds different pointers to location in memory.


const constHobbies = ['Biking'];
constHobbies.push('Reading'); //Doesn't throw error.
console.log(constHobbies); //The address that is pointing to array is not changing, it is the data in the address that is changing.

//constHobbies = ['Music']; // Throws TypeError: Assignment to constant variable

const person = {age:30};
person.age = 32;
console.log(person);