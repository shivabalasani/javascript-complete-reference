//A Comprehensive Collection of Examples:
//https://github.com/trekhleb/javascript-algorithms

//8 time complexities that every programmer should know
//https://medium.com/@amejiarosario/8-time-complexity-examples-that-every-programmer-should-know-171bd21e5ba

//Data Structures in JavaScript: Arrays, HashMaps, and Lists
//https://adrianmejia.com/data-structures-time-complexity-for-beginners-arrays-hashmaps-linked-lists-stacks-queues-tutorial/

/*
Big O Notation          Name                    Examples
O(1)                 Constant                  #Odd or Even number, #Look-up table (on average)
O(log n)             Logarithmic               #Finding element on sorted array with binary search
O(n)                 Linear                    #Finding max element in unsorted array, #Duplicate elements in array with Hash Map
O(n log n)           Linearithmic              #Sorting elements in array with merge sort
O(n2)                Quadratic                 #Duplicate elements in array, #Sorting array with bubble sort
O(n3)                Cubic                     #3 variables equation solver
O(2n)                Exponential               #Find all subsets
O(n!)                Factorial                 #Find all permutations of given set

*/

//---------------------------------------------------------------------------------------------------

// BEST CASE: [5] => O(1)
// WORST CASE: [3, 1] => O(n)
function getMin(numbers) { // [3, 1, 2]
    if (!numbers.length) { // 1 execution
      throw new Error('Should not be an empty array!');
    }
    let currentMinimum = numbers[0]; // 1 execution
  
    for (let i = 1; i < numbers.length; i++) { // 1 execution
      if (numbers[i] < currentMinimum) { // 2 executions
        currentMinimum = numbers[i]; // 1 execution
      }
    }
  
    return currentMinimum; // 1 execution
  }
  
  // T = n => Linear Time Complexity => O(n)
  
  // BEST CASE: [1, 2, 3] => O(n^2)
  // WORST CASE: [3, 2, 1] => O(n^2)
  // AVERAGE CASE: [?, ?, ?] => O(n^2)
  function getMin2(numbers) {
    if (!numbers.length) {
      throw new Error('Should not be an empty array!');
    }
  
    for (let i = 0; i < numbers.length; i++) {
      let outerElement = numbers[i]; // n times
      for (let j = i + 1; j < numbers.length; j++) {
        let innerElement = numbers[j]; // n times
        if (outerElement > innerElement) {
          // swap
          numbers[i] = innerElement;
          numbers[j] = outerElement;
          outerElement = numbers[i];
          innerElement = numbers[j];
        }
      }
    }
  
    return numbers[0];
  }
  // Quadratic Time Complexity => n * n => O(n^2)
  
  const testNumbers = [5, 1, 5];
  const min = getMin(testNumbers);
  console.log(min);
  
//---------------------------------------------------------------------------------------------------

  function isEvenOrOdd(number) {
    // const result = number % 2;
    // if (result === 0) {
    //   return 'Even';
    // } else {
    //   return 'Odd';
    // }
    return number % 2 ? 'Odd' : 'Even';
  }
  
   // Constant Time Complexity => O(1)
  console.log(isEvenOrOdd(10)); // 'Even'
  console.log(isEvenOrOdd(11)); // 'Odd'
  
//---------------------------------------------------------------------------------------------------
  function sumUp(numbers) {
    let sum = 0; // 1
  
    for (let i = 0; i < numbers.length; i++) { // n
      sum += numbers[i];
    }
  
    return sum; // 1
  }
  
  // Linear Time Complexity => O(n)
  
  const array = [1, 2, 5];
  console.log(sumUp(array)); // 8


//---------------------------------------------------------------------------------------------------
//

