const indexArray  = [1, -5.3, 1.5, 5.91, 1.5 ]
//Searches for 1.5 in entire array
console.log(indexArray.indexOf(1.5)); //Output : 2
console.log(indexArray.lastIndexOf(1.5)); //Output : 4

const personData =[{name: 'Max'},{name: 'Manuel'}];
console.log(personData.indexOf({name: 'Manuel'}))  //Output : -1

//How to find object in an array
const manuel = personData.find((person, idx, persons) => {
    return person.name === 'Manuel';
});
console.log(manuel);  // {name: 'Manuel'}

manuel.name='Anna'; //changes the object since this is a object reference
console.log(manuel, personData);  // {name: 'Anna'}  [ { name: 'Max' }, { name: 'Anna' } ]


//To get the index of an item.
const maxIndex= personData.findIndex((person, idx, persons) => {
    return person.name === 'Max';
});
console.log(maxIndex);


console.log(indexArray.includes(5.91)); // returns true