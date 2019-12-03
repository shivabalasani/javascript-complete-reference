const prices = [10.99, 5.99, 1.99, 6.99, 4.33];

const alphabeticalSortedPrices = prices.sort(); //sorts by converting values to string so '10.99' < '4.33'
console.log(alphabeticalSortedPrices); //[ 1.99, 10.99, 4.33, 5.99, 6.99 ]

const sortedPrices = prices.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a == b) {
    return 0;
  } else {
    return - 1;
  }
});
console.log(sortedPrices); //[ 1.99, 4.33, 5.99, 6.99, 10.99 ]

console.log(sortedPrices.reverse()); //[ 10.99, 6.99, 5.99, 4.33, 1.99 ]
