/*labeled statement
A label provides a statement with an identifier that lets you refer to it elsewhere in your program. For example, you can use a label to identify a loop, 
and then use the break or continue statements to indicate whether a program should interrupt the loop or continue its execution.
The syntax of the labeled statement looks like the following:
label :
   statement */
//In this example, the label markLoop identifies a while loop.
let theMark = true;
markLoop:
   while (theMark === true) {
      break markLoop;
   }

/*break statement
Use the break statement to terminate a loop, switch, or in conjunction with a labeled statement.

When you use break without a label, it terminates the innermost enclosing while, do-while, for, or switch immediately and transfers control to the following statement.
When you use break with a label, it terminates the specified labeled statement.
The syntax of the break statement looks like this:

break;
break [label];
*/
//The following example iterates through the elements in an array until it finds the index of an element whose value is theValue:
let a=[1,2,3];
for (let i = 0; i < a.length; i++) {
    if (a[i] === 2) {
      break;
    }
  }

// Breaking to a label
let x = 0;
let z = 0;
labelCancelLoops: while (true) {
  console.log('Outer loops: ' + x);
  x += 1;
  z = 1;
  while (true) {
    console.log('Inner loops: ' + z);
    z += 1;
    if (z === 3 && x === 3) {
      break labelCancelLoops;
    } else if (z === 3) {
      break;
    }
  }
}

