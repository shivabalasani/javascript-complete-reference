/*while statement
A while statement executes its statements as long as a specified condition evaluates to true. A while statement looks as follows:

while (condition)
  statement
*/
let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
}

// Infinite loops are bad!
while (true) {
    console.log('Hello, world!');
  }

/*  do...while statement
The do...while statement repeats until a specified condition evaluates to false.
A do...while statement looks as follows:
do
  statement
while (condition); */
let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);

