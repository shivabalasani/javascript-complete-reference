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

//<h1 id="main-title">Dive into the DOM!</h1>
const h1 = document.querySelector("h1");
h1.textContent = 'Some New Text';
h1.id="newid";
h1.className = 'title';
h1.style.color = 'white';
h1.style.backgroundColor ="red";
console.dir(h1);


const listItemElements = document.querySelectorAll('li'); //this doest not give live list
const listItemElements = document.getElementsByTagName('li'); //this will give live list

for(const listItemEl of listItemElements){
  console.dir(listItemEl);
}

// <html>
// <head>...</head>
// <body>
//   <ul>
//     <li>foo</li>
//     <li>bar</li>
//     <li>baz</li>
//   </ul>
// </body>
// </html>

const listItems = document.querySelectorAll('li');
console.log(listItems);        // NodeList(3) [li, li, li]
//Although NodeList is not an Array, it is possible to iterate on it using forEach(). Several older browsers have not implemented this method yet. 
//You can also convert it to an Array using Array.from.
console.log(listItems.length); // 3

for (let i = 0; i < listItems.length; i++) {
  console.log(listItems[i].innerText);
}
// foo
// bar
// baz

//"In some cases, the NodeList is a live collection"
// retrieve element using querySelectorAll
const listItems_querySelectorAll = document.querySelectorAll('li');
console.log(listItems_querySelectorAll); // NodeList(3) [li, li, li]

// retrieve element using childNodes
const list  = document.querySelector('ul');
const listItems_childNodes = list.childNodes;
console.log(listItems_childNodes); // NodeList(7) [text, li, text, li, text, li, text]


list.appendChild(document.createElement('li'));
// static NodeList via querySelectorAll
console.log(listItems_querySelectorAll); // NodeList(3) [li, li, li]
// live NodeList via childNodes
console.log(listItems_childNodes);       // NodeList(8) [text, li, text, li, text, li, text, li]
//As you see listItems_childNodes (the NodeList accessed via childNodes) reflects the elements of the DOM even when elements were added or removed. 
//The collection that is returned by querySelectorAll stays the same. 


const listItems_getElementsByTagName = document.getElementsByTagName('li');
console.log(listItems_getElementsByTagName); // HTMLCollection(3) [li, li, li]
//It only includes the matching elements and does not include text nodes, it provides only two methods (item and namedItem) and it is live which means that it will 
//also include added elements.

listItems_getElementsByTagName[0].parentNode.appendChild(document.createElement('li'));
// live HTMLCollection via getElementsByTagName
console.log(listItems_getElementsByTagName); // HTMLCollection(4) [li, li, li, li]

//So, today we have childNodes (live NodeList) next to children (live HTMLCollection), querySelectorAll (static NodeList) next to getElementsByTagName (live HTMLCollection) 
//and some unexpected edge-cases depending on how you access elements.