/*
Coercion: Converting a value from one type to another.
Type coercion is the automatic or implicit conversion of values from one data type to another (such as strings to numbers). 
Type conversion is similar to type coercion because they both convert values from one data type to another with one key difference — type coercion is implicit whereas 
type conversion can be either implicit or explicit. */


const value1 = '5';
const value2 = 9;
let sum = value1 + value2;

console.log(sum);

//In the above example, JavaScript has coerced the 9 from a number into a string and then concatenated the two values together, resulting in a string of 59. 
//JavaScript had a choice between a string or a number and decided to use a string.

//The compiler could have coerced the 5 into a number and returned a sum of 14, but it did not. To return this result, you'd have to explicitly convert the 5 to a 
//number using the Number() method:
sum = Number(value1) + value2;
console.log(sum);


console.log(Number(undefined)); //NaN
console.log(Number(null)); // 0
console.log(Number(false)); //0
console.log(Number(true)); //1


console.log(null == 0 ); //false - null won't be coerced to 0
console.log(null < 1); //true - here null will be coerced to 0

console.log("" == 0); //true
console.log("" == false); //true

console.log(undefined == 0); //false
console.log(undefined == null); //true
console.log(undefined == false); //false