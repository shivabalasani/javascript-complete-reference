//Callback Queue - Task Queue . setTimeout is WebApi
setTimeout(()=>{console.log('1', 'is the loneliest number')}, 0)
setTimeout(()=>{console.log('2', 'can be as bad as one')}, 10)

//2 Job Queue - Microtask Queue
Promise.resolve('hi').then((data)=> console.log('2', data))

//3
console.log('3','is a crowd')

/*
Job Queue executes before Callback Queues so Promise gets executes first. Promise is a part of Javascript engine which is included in ES6 wheare as setTimout is part
of the WebAPI (javascript runtime) which gets pushed to the Callback Queue
Output :
3 is a crowd
2 history                         
1 is the loneliest number
2 can be as bad as one
*/