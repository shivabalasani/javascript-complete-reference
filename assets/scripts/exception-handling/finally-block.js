/*
The finally block
The finally block contains statements to be executed after the try and catch blocks execute. Additionally, the finally block executes before the code 
that follows the try-catch-finally statement.
It is also important to note that the finally block will execute whether or not an exception is thrown. If an exception is thrown, however, the statements 
in the finally block execute even if no catch block handles the exception that was thrown.
*/
openMyFile();
try {
  writeMyFile(theData); //This may throw an error
} catch(e) {  
  handleError(e); // If we got an error we handle it
} finally {
  closeMyFile(); // always close the resource
}

//If the finally block returns a value, this value becomes the return value of the entire try-catch-finally production, regardless of any return 
//statements in the try and catch blocks:
function f() {
    try {
      console.log(0);
      throw 'bogus';
    } catch(e) {
      console.log(1);
      return true; // this return statement is suspended
                   // until finally block has completed
      console.log(2); // not reachable
    } finally {
      console.log(3);
      return false; // overwrites the previous "return"
      console.log(4); // not reachable
    }
    // "return false" is executed now  
    console.log(5); // not reachable
  }
  console.log(f()); // 0, 1, 3, false


 //Overwriting of return values by the finally block also applies to exceptions thrown or re-thrown inside of the catch block:
  function f() {
    try {
      throw 'bogus';
    } catch(e) {
      console.log('caught inner "bogus"');
      throw e; // this throw statement is suspended until 
               // finally block has completed
    } finally {
      return false; // overwrites the previous "throw"
    }
    // "return false" is executed now
  }
  
  try {
    console.log(f());
  } catch(e) {
    // this is never reached because the throw inside
    // the catch is overwritten
    // by the return in finally
    console.log('caught outer "bogus"');
  }
  
  // OUTPUT
  // caught inner "bogus"
  // false
