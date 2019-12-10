/*The Number JavaScript object is a wrapper object allowing you to work with numerical values. A Number object is created using the Number() constructor.
 A primitive type object number is created using the Number() function.

The JavaScript Number type is double-precision 64-bit binary format IEEE 754 value. In more recent implementations, JavaScript also supports integers with arbitrary 
precision using the BigInt type.*/

//new Number(value)
let a = new Number('123') // a === 123 is false
let b = Number('123') // b === 123 is true
a instanceof Number // is true
b instanceof Number // is false

console.log(Number.MAX_SAFE_INTEGER); //9007199254740991    //Math.pow(2, 53) - 1
console.log(Number.MAX_VALUE); //1.7976931348623157e+308
console.log(Number.POSITIVE_INFINITY); //Infinity
console.log(Number.NEGATIVE_INFINITY); //-Infinity
console.log(Number.isFinite(1/0)); //false

console.log(0.2 + 0.4);  //0.6000000000000001
console.log(0.2 + 0.4 === 0.6); //false

console.log((5).toString(2)); //101 is the binary representation of 5

console.log((0.2).toString(2)); //0.001100110011001100110011001100110011001100110011001101
console.log((0.2).toFixed(20)); //0.20000000000000001110
console.log((0.2 + 0.4 ).toFixed(2)); //0.60


//BigInt is a built-in object that provides a way to represent whole numbers larger than 253 - 1, which is the largest number JavaScript can reliably represent with the
//Number primitive. BigInt can be used for arbitrarily large integers.

//A BigInt is created by appending n to the end of an integer literal — 10n — or by calling the function BigInt().
const theBiggestInt = 9007199254740991n;
const alsoHuge = BigInt(9007199254740991);// ↪ 9007199254740991n
const hugeString = BigInt("9007199254740991");// ↪ 9007199254740991n
const hugeHex = BigInt("0x1fffffffffffff");// ↪ 9007199254740991n
const hugeBin = BigInt("0b11111111111111111111111111111111111111111111111111111");// ↪ 9007199254740991n

//console.log(10n -4); //TypeError: Cannot mix BigInt and other types, use explicit conversions
console.log(parseInt(10n) -4); //6
console.log(10n -BigInt(4)); //6n
console.log(5n/2n); //2n
typeof 1n === 'bigint'; // true
typeof BigInt('1') === 'bigint'; // true
typeof Object(1n) === 'object'; // true

//Random number between two Integers.
function randonIntBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(randonIntBetween(1,10));