//Nested try-blocks
try {
    try {
      throw new Error('oops');
    }
    finally {
      console.log('finally');
    }
  }
  catch (ex) {
    console.error('outer', ex.message);
  }
  
  // Output:
  // "finally"
  // "outer" "oops"

//Now, if we already caught the exception in the inner try-block by adding a catch block
  try {
    try {
      throw new Error('oops');
    }
    catch (ex) {
      console.error('inner', ex.message);
    }
    finally {
      console.log('finally');
    }
  }
  catch (ex) {
    console.error('outer', ex.message);
  }
  
  // Output:
  // "inner" "oops"
  // "finally"


  try {
    try {
      throw new Error('oops');
    }
    catch (ex) {
      console.error('inner', ex.message);
      throw ex;
    }
    finally {
      console.log('finally');
    }
  }
  catch (ex) {
    console.error('outer', ex.message);
  }
  
  // Output:
  // "inner" "oops"
  // "finally"
  // "outer" "oops"

  //Returning from a finally block
  //If the finally block returns a value, this value becomes the return value of the entire try-catch-finally production, 
  //regardless of any return statements in the try and catch blocks. This includes exceptions thrown inside of the catch block:

  (function() {
    try {
      try {
        throw new Error('oops');
      }
      catch (ex) {
        console.error('inner', ex.message);
        throw ex;
      }
      finally {
        console.log('finally');
        return;
      }
    }
    catch (ex) {
      console.error('outer', ex.message);
    }
  })();
  
  // Output:
  // "inner" "oops"
  // "finally"