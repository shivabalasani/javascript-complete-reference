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
