/*The getElementsByClassName method of Document interface returns an array-like object of all child elements which have all of the 
given class names. When called on the document object, the complete document is searched, including the root node. You may also 
call getElementsByClassName() on any element; it will return only elements which are descendants of the specified root element 
with the given class names.

Syntax
var elements = document.getElementsByClassName(names); // or:
var elements = rootElement.getElementsByClassName(names);
elements is a live HTMLCollection of found elements.
names is a string representing the list of class names to match; class names are separated by whitespace
getElementsByClassName can be called on any element, not only on the document. The element on which it is called will be used as 
the root of the search.*/

//Get all elements that have a class of 'test':
document.getElementsByClassName('test')

//Get all elements that have both the 'red' and 'test' classes:
document.getElementsByClassName('red test')

//Get all elements that have a class of 'test', inside of an element that has the ID of 'main':
document.getElementById('main').getElementsByClassName('test')

//Get the first element with a class of 'test', or undefined if there is no matching element:
document.getElementsByClassName('test')[0]

//We can also use methods of Array.prototype on any HTMLCollection by passing the HTMLCollection as the method's this value. 
//Here we'll find all div elements that have a class of 'test':
var testElements = document.getElementsByClassName('test');
var testDivs = Array.prototype.filter.call(testElements, function(testElement){
  return testElement.nodeName === 'DIV';
});
