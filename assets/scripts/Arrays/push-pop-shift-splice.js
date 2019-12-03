const hobbies =['Cooking' ,'Sport'];
//Adds to end of the array
hobbies.push('Reading');    ////[ 'Cooking', 'Sport', 'Reading' ]

//Add to beginning of the array
hobbies.unshift('Coding');
console.log(hobbies);   //[ 'Coding', 'Cooking', 'Sport', 'Reading' ]

//Remove last element
const poppedValue = hobbies.pop();
console.log(hobbies);       //[ 'Coding', 'Cooking', 'Sport' ]

//Remove first element
const firstValue = hobbies.shift();
console.log(firstValue);    // Coding
console.log(hobbies);       //[ 'Cooking', 'Sport' ]


hobbies[1] = 'Coding';      
console.log(hobbies);       //[ 'Cooking', 'Coding' ]

hobbies[5] = 'Reading';
console.log(hobbies);       //[ 'Cooking', 'Coding', <3 empty items>, 'Reading' ]
console.log(hobbies[4]);    //undefined

//=========================================================================================
//Add someting in between elements
//Splice only available on real arrays. Not on iterables or array-like objects.
hobbies.splice(1,0,'Good Food'); //Add item at index 1 deleting 0 elements.
console.log(hobbies);  //[ 'Cooking', 'Good Food', 'Coding', <3 empty items>, 'Reading' ]

hobbies.splice(0,1) //Remove 1 element at index 0
console.log(hobbies); //[ 'Good Food', 'Coding', <3 empty items>, 'Reading' ]

hobbies.splice(-1, 1) //Go to last element and delete 1 item
console.log(hobbies); //[ 'Good Food', 'Coding', <3 empty items> ]

hobbies.splice(-2, 1) //Go to second last element and delete 1 item
console.log(hobbies); //[ 'Good Food', 'Coding', <2 empty items> ]

const removedElements = hobbies.splice(0) //Removes all elements
console.log(hobbies);  //[]
console.log(removedElements); //[ 'Good Food', 'Coding', <2 empty items> ]
