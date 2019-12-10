//The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.\
//Syntax : new Promise(executor);
//A function that is passed with the arguments resolve and reject. The executor function is executed immediately by the Promise implementation, passing resolve and reject
//functions (the executor is called before the Promise constructor even returns the created object). The resolve and reject functions, when called, resolve or reject the
//promise, respectively. The executor normally initiates some asynchronous work, and then, once that completes, either calls the resolve function to resolve the promise or
//else rejects it if an error occurred. If an error is thrown in the executor function, the promise is rejected. The return value of the executor is ignored.

var promise1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve("foo");
  }, 300);
});

promise1.then(function(value) {
  console.log(value); // expected output: "foo"
});

console.log(promise1); // expected output: [object Promise]

//=================================================================================================================================================
/*A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success 
  value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method 
  returns a promise to supply the value at some point in the future.

A Promise is in one of these states:
pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation completed successfully.
rejected: meaning that the operation failed.
A pending promise can either be fulfilled with a value, or rejected with a reason (error). When either of these options happens, the associated handlers queued up by a 
promise's then method are called. (If the promise has already been fulfilled or rejected when a corresponding handler is attached, the handler will be called, so there is
no race condition between an asynchronous operation completing and its handlers being attached.)*/

const myFirstPromise = new Promise((resolve, reject) => {
  // do something asynchronous which eventually calls either:
  //
  //   resolve(someValue); // fulfilled
  // or
  //   reject("failure reason"); // rejected
});

function myAsyncFunction(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
}
/*
Promise States & "finally"
PENDING => Promise is doing work, neither then() nor catch() executes at this moment
RESOLVED => Promise is resolved => then() executes
REJECTED  => Promise was rejected => catch() executes

When you have another then() block after a catch() or then() block, the promise re-enters PENDING mode (keep in mind: then() and catch() always return a new promise - 
either not resolving to anything or resolving to what you return inside of then()). Only if there are no more then() blocks left, it enters a new, final mode: SETTLED.
Once SETTLED, you can use a special block - finally() - to do final cleanup work. finally() is reached no matter if you resolved or rejected before.
Here's an example:*/

myAsyncFunction()
    .then(firstResult => {
        return 'done with first promise';
    })
    .catch(err => {
        // would handle any errors thrown before
        // implicitly returns a new promise - just like then()
    })
    .finally(() => {
        // the promise is settled now - finally() will NOT return a new promise!
        // you can do final cleanup work here
    });
//You don't have to add a finally() block 

//=================================================================================================================================================
//Basic Example
let myFirstPromise1 = new Promise((resolve, reject) => {
  // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
  // In this example, we use setTimeout(...) to simulate async code.
  // In reality, you will probably be using something like XHR or an HTML5 API.
  setTimeout(function() {
    resolve("Success!"); // Yay! Everything went well!
  }, 250);
});

myFirstPromise1.then(successMessage => {
  // successMessage is whatever we passed in the resolve(...) function above.
  // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
  console.log("Yay! " + successMessage);
});

//=================================================================================================================================================
//Advanced Example
("use strict");
var promiseCount = 0;

function testPromise() {
  let thisPromiseCount = ++promiseCount;

  let log = document.getElementById("log");
  log.insertAdjacentHTML(
    "beforeend",
    thisPromiseCount + ") Started (<small>Sync code started</small>)<br/>"
  );

  // We make a new promise: we promise a numeric count of this promise, starting from 1 (after waiting 3s)
  let p1 = new Promise(
    // The executor function is called with the ability to resolve or
    // reject the promise
    (resolve, reject) => {
      log.insertAdjacentHTML(
        "beforeend",
        thisPromiseCount +
          ") Promise started (<small>Async code started</small>)<br/>"
      );
      // This is only an example to create asynchronism
      window.setTimeout(function() {
        // We fulfill the promise !
        resolve(thisPromiseCount);
      }, Math.random() * 2000 + 1000);
    }
  );

  // We define what to do when the promise is resolved with the then() call,
  // and what to do when the promise is rejected with the catch() call
  p1.then(
    // Log the fulfillment value
    function(val) {
      log.insertAdjacentHTML(
        "beforeend",
        val + ") Promise fulfilled (<small>Async code terminated</small>)<br/>"
      );
    }
  ).catch(
    // Log the rejection reason
    reason => {
      console.log("Handle rejected promise (" + reason + ") here.");
    }
  );

  log.insertAdjacentHTML(
    "beforeend",
    thisPromiseCount +
      ") Promise made (<small>Sync code terminated</small>)<br/>"
  );
}
/* Output:
1) Started (Sync code started)
1) Promise started (Async code started)
1) Promise made (Sync code terminated)
1) Promise fulfilled (Async code terminated) */
