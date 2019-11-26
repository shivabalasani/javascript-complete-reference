/*
continue statement
The continue statement can be used to restart a while, do-while, for, or label statement.

When you use continue without a label, it terminates the current iteration of the innermost enclosing while, do-while, or for statement and continues 
execution of the loop with the next iteration. In contrast to the break statement, continue does not terminate the execution of the loop entirely. 
In a while loop, it jumps back to the condition. In a for loop, it jumps to the increment-expression.
When you use continue with a label, it applies to the looping statement identified with that label.

The syntax of the continue statement looks like the following:

continue [label];
*/
//Example 1 :The following example shows a while loop with a continue statement that executes when the value of i is 3. Thus, n takes on the values 1, 3, 7, and 12.
let i = 0;
let n = 0;
while (i < 5) {
  i++;
  if (i === 3) {
    continue;
  }
  n += i;
  console.log(n);
}
//1,3,7,12

let i = 0; 
let n = 0; 
while (i < 5) { 
  i++; 
  if (i === 3) { 
     // continue; 
  } 
  n += i; 
  console.log(n);
}
// 1,3,6,10,15

//Example 2: If continue had a label of checkiandj, the program would continue at the top of the checkiandj statement.
let i = 0;
let j = 10;
checkiandj:
  while (i < 4) {
    console.log(i);
    i += 1;
    checkj:
      while (j > 4) {
        console.log(j);
        j -= 1;
        if ((j % 2) === 0) {
          continue checkj;
        }
        console.log(j + ' is odd.');
      }
      console.log('i = ' + i);
      console.log('j = ' + j);
  }