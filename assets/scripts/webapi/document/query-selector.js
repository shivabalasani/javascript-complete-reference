//The Document method querySelector() returns the first Element within the document that matches the specified selector, 
//or group of selectors. If no matches are found, null is returned.

/*
element = document.querySelector(selectors);

selectors
A DOMString containing one or more selectors to match. This string must be a valid CSS selector string; if it isn't, 
a SYNTAX_ERR exception is thrown. See Locating DOM elements using selectors for more about selectors and how to manage them.

Return value
An HTMLElement object representing the first element in the document that matches the specified set of CSS selectors, 
or null is returned if there are no matches.
If you need a list of all elements matching the specified selectors, you should use querySelectorAll() instead.
Exceptions
SYNTAX_ERR
The syntax of the specified selectors is invalid.


<div id="foo\bar"></div>
<div id="foo:bar"></div>
<script>
  console.log('#foo\bar');               // "#fooar" (\b is the backspace control character)
  document.querySelector('#foo\bar');    // Does not match anything

  console.log('#foo\\bar');              // "#foo\bar"
  console.log('#foo\\\\bar');            // "#foo\\bar"
  document.querySelector('#foo\\\\bar'); // Match the first div

  document.querySelector('#foo:bar');    // Does not match anything
  document.querySelector('#foo\\:bar');  // Match the second div
</script> */

//Finding the first element matching a class
var el = document.querySelector(".myclass");

//Here, the first <input> element with the name "login" (<input name="login"/>) located inside a <div> whose class 
//is "user-panel main" (<div class="user-panel main">) in the document is returned:
var el = document.querySelector("div.user-panel.main input[name='login']");

var el = document.querySelector("ul li:first-of-type");
var el = document.querySelector("ul li:last-of-type");

const ul = document.querySelector("ul");
const li = ul.querySelector("li");