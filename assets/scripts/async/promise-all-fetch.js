const urls = ['https://jsonplaceholder.typicode.com/users',
              'https://jsonplaceholder.typicode.com/posts',
              'https://jsonplaceholder.typicode.com/albums'];

Promise.all(urls.map(url => {
    return fetch(url).then(resp  => resp.json())
})).then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
}).catch(() => console.log('error'));


//Same output using asyn await
const getData = async function() {
    try {
        const [users, posts, albums] = await Promise.all(urls.map(url => {
            return fetch(url).then(resp  => resp.json())
        }));
        console.log(users);
        console.log(posts);
        console.log(albums);
    }catch (err) {
        console.log('error', err)
    }
}

//Same output using for-await-of. New feature in ES9 (ES2018)
const getData2 = async function() {
    const arrayOfPromises = urls.map(url => fetch(url));
    for await(let request of arrayOfPromises) {
        const data = await request.json();
        console.log(data);
    }
}
