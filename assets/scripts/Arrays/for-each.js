const prices  = [10.99, 5.99, 1.99, 6.99, ];
const tax = 0.19;

let taxtAdjustedPrices = [];

for (const price of prices) {
    taxtAdjustedPrices.push(price * (1 + tax));
}
console.log(taxtAdjustedPrices);

taxtAdjustedPrices = []

//Alternative to for-of if you want index.
prices.forEach((price, idx, prices) => {
    const priceObj = {index : idx , taxAdjPrice : price * (1 + tax) };
    taxtAdjustedPrices.push(priceObj);
});
console.log(taxtAdjustedPrices);