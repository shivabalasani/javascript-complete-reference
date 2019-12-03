//Different ways of creating arrays
/*
const arr = [1];
const arr = Array(1);
const arr = new Array(1);

const arr = ['Hi'];
const arr = Array('Hi');
const arr = new Array('Hi');

const arr = Array.of(1);
const arr = Array.of('Hi');
const arr = Array.from('Hi');

const arr = Array.from(1);
*/


//Recommended
const number = [1,2,3];
const moreNumbers = new Array('Hi', 'Hello');
console.log(moreNumbers);

const strange = new Array(5);
console.log(strange); // creates array with length 5 and [empty x 5]

const strange1 = Array(5);
console.log(strange1); // creates array with length 5 and [empty x 5]

//will be slower 
const yetMoreNumber = Array.of(1,2);
console.log(yetMoreNumber); 

//const arrFrom = Array.from(1,2); //Throws TypeError. Should not pass multiple arguments. Argument takes iterable or array like object.

const arrFrom1 = Array.from([1,2]); //Output (2) [1,2]
const arrFrom2 = Array.from('Hi!'); // Output (3) ["H", "i", "!"]

/*
<ul>
    <li>Item1</li>
    <li>Item2</li>
    <li>Item3</li>
</ul>
*/
const listItem = document.querySelectorAll('li'); //NodeList(3) [li, li, li]
const arrFromNodeList = Array.from(listItems); // Converts Array-like NodeList to Array. (3) [li, li, li]