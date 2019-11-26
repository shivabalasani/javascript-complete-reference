/*Block statement
The most basic statement is a block statement, which is used to group statements. The block is delimited by a pair of curly brackets:
{
  statement_1;
  ...
  statement_n;
}*/
//Block statements are commonly used with control flow statements (if, for, while).
while (x < 10) {
    x++;
  } 
//Here, { x++; } is the block statement.

/*
Important: JavaScript before ECMAScript2015 (6th edition) does not have block scope!  In older JavaScript, variables introduced within a block are scoped 
to the containing function or script, and the effects of setting them persist beyond the block itself. In other words, block statements do not define a 
scope.

"Standalone" blocks in JavaScript can produce completely different results from what they would produce in C or Java. For example:

var x = 1;
{
  var x = 2;
}
console.log(x); // outputs 2
This outputs 2 because the var x statement within the block is in the same scope as the var x statement before the block. (In C or Java, the equivalent 
code would have outputted 1.)

Starting with ECMAScript2015, the let and const variable declarations are block scoped. See the let and const reference pages for more information.
*/