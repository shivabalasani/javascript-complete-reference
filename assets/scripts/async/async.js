/*The async function declaration defines an asynchronous function — a function that returns an AsyncFunction object. Asynchronous functions operate in a separate order than
 the rest of the code via the event loop, returning an implicit Promise as its result. But the syntax and structure of code using async functions looks like standard 
 synchronous functions.

You can also define async functions with an async function expression.
Syntax
async function name([param[, param[, ... param]]]) {
   statements
}
Return value :A Promise which will be resolved with the value returned by the async function, or rejected with an exception uncaught within the async function.
*/

function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("calling");
  var result = await resolveAfter2Seconds();
  console.log(result); // expected output: 'resolved'
}

asyncCall();
/*An async function can contain an await expression that pauses the execution of the async function to wait for the passed Promise's resolution, then resumes the async 
function's execution and evaluates as the resolved value.

The await keyword is only valid inside async functions. If you use it outside of an async function's body, you will get a SyntaxError.

While the async function is paused, the calling function continues running (having received the implicit Promise returned by the async function).*/

