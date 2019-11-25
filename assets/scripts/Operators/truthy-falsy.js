/*
A falsy value is a value that is considered false when encountered in a Boolean context.
JavaScript uses Type Conversion to coerce any value to a Boolean in contexts that require it, such as conditionals and loops.

There are 7 falsy values in JavaScript.
This means that when JavaScript is expecting a boolean and it is given one of the values below, it will always evaluate to “falsy”.

false	         The keyword false
0	             The number zero
0n	             BigInt, when used as a boolean, follows the same rule as a Number. 0n is falsy.
"", '', ``	     This is an empty string (the length of the string is zero). Strings in JavaScript can be defined with double quotes "", single quotes '', or Template literals ``.
null	         null - the absence of any value
undefined	     undefined - the primitive value
NaN	             NaN - not a number
*/
//Examples of falsy values in JavaScript (which are coerced to false in Boolean contexts, and thus bypass the if block):
if (false)
if (null)
if (undefined)
if (0)
if (0n)
if (NaN)
if ('')
if ("")
if (``)
if (document.all)

/*
In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy (i.e., except for false, 0, 0n, "", null, undefined, and NaN).
JavaScript uses type coercion in Boolean contexts. */
//Examples of truthy values in JavaScript (which will be coerced to true in boolean contexts, and thus execute the if block):

if (true)
if ({})
console.log({});
if ([])
if (42)
console.log(42);
if ("0")
console.log(0);
if ("false")
if (new Date())
if (-42)
if (12n)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)
console.log(Infinity);