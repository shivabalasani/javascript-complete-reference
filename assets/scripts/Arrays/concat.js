const testResults  = [1, -5.3, 1.5];

//Add elements at the end of the array and returns brand new array.
const storedResults = testResults.concat([3.9,2]);
testResults.push(5.91);

console.log(storedResults, testResults); //[ 1, -5.3, 1.5, 3.9, 2 ] [ 1, -5.3, 1.5, 5.91 ]

