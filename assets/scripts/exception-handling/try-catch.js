/*The try statement consists of a try block, which contains one or more statements. {} must always be used, even for single statements. 
At least one catch clause, or a finally clause, must be present. This gives us three forms for the try statement:

try...catch
try...finally
try...catch...finally */

//Unconditional catch clause
//When a single, unconditional catch clause is used, the catch block is entered when any exception is thrown.

try {
    throw 'myException'; // generates an exception
  }
  catch (e) {
    // statements to handle any exceptions
    logMyErrors(e); // pass exception object to error handler
  }

  //Conditional catch clauses
  //You can also use one or more conditional catch clauses to handle specific exceptions. In this case, the appropriate catch clause is entered when 
  //the specified exception is thrown

  //Reminder: this functionality is not part of the ECMAScript specification and has been removed in Firefox 59. It's not supported in any current 
  //browser anymore.
 /* try {
    myroutine(); // may throw three types of exceptions
  } catch (e if e instanceof TypeError) {
    // statements to handle TypeError exceptions
  } catch (e if e instanceof RangeError) {
    // statements to handle RangeError exceptions
  } catch (e if e instanceof EvalError) {
    // statements to handle EvalError exceptions
  } catch (e) {
    // statements to handle any unspecified exceptions
    logMyErrors(e); // pass exception object to error handler
  } */

  //Here is the same "Conditional catch clauses" using code that conforms to ECMAScript specification (obviously it's verbose, but works everywhere):
  try {
    myroutine(); // may throw three types of exceptions
  } catch (e) {
    if (e instanceof TypeError) {
      // statements to handle TypeError exceptions
    } else if (e instanceof RangeError) {
      // statements to handle RangeError exceptions
    } else if (e instanceof EvalError) {
      // statements to handle EvalError exceptions
    } else {
      // statements to handle any unspecified exceptions
      logMyErrors(e); // pass exception object to error handler
    }
  }