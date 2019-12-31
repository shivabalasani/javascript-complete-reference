//callback function is a function passed into another function as an argument, which is then invoked inside the outer function to 
//complete some kind of routine or action.

function greeting(name) {
  alert('Hello ' + name);
}

function processUserInput(callback) {
  var name = prompt('Please enter your name.');
  callback(name);
}

processUserInput(greeting);

//The above example is a synchronous callback, as it is executed immediately.

//Note, however, that callbacks are often used to continue code execution after an asynchronous operation has completed — 
//these are called asynchronous callbacks. A good example is the callback functions executed inside a .then() block chained onto 
//the end of a promise after that promise fulfills or rejects. This structure is used in many modern web APIs, such as fetch().



// jQuery uses function expressions and first-class functions!
//$("button").click(function() {
//    
//});

function tellMeWhenDone(callback) {
  var a = 1000; // some work
  var b = 2000; // some work
  callback(); // the 'callback', it runs the function I give it!
}

tellMeWhenDone(function() {
  console.log('I am done!');
});

tellMeWhenDone(function() {
  console.log('All done...');
});

function sayHiLater() {
  var greeting = 'Hi!';
  setTimeout(function() {
      console.log(greeting);
  }, 3000);
}
sayHiLater();