const doWork = () => {};
const doAsyncWork = async () => {};
const doAsyncWorkWithReturn = async () => {
    return 'Shiva';
}
const doAsyncWorkWithError = async () => {
    throw new Error('Something went wrong');
}

console.log(doWork()); //undefined
console.log(doAsyncWork()); //Promise { undefined }
console.log(doAsyncWorkWithReturn()); //Promise { 'Shiva' }

doAsyncWorkWithReturn().then((result) => {
    console.log('result' , result); //result Shiva
}).catch((e) => {
    console.log('e', e)
});

doAsyncWorkWithError().then((result) => {
    console.log('result' , result); 
}).catch((e) => {
    console.log('e', e) //e Error: Something went wrong
});



//===========================================================================
const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) {
                return reject('Numbers must be non-negative')
            }
            resolve(a + b)
        }, 2000)
    })
}

const doWorkWithAwait = async () => {
    const sum = await add(1, 99)
    const sum2 = await add(sum, 50)
    const sum3 = await add(sum2, -3)
    return sum3
}

doWorkWithAwait().then((result) => {
    console.log('result', result)
}).catch((e) => {
    console.log('e', e)
})