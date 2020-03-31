let re;
re = /hello/;
re = /hello/i; // i =  case insensitive
// re = /hello/g; // Global search

console.log(re);
console.log(re.source);

// exec() - Return result in an array or null
const resultExec = re.exec('hello world');

console.log(resultExec);
console.log(resultExec[0]);
console.log(resultExec.index);
console.log(resultExec.input);

// test() - Returns true or false
const resultTest = re.test('Hello');
console.log(resultTest);

// match() - Return result array or null
const str = 'Hello There';
const resultMatch = str.match(re);
console.log(resultMatch);

// search() - Returns index of the first match if not found retuns -1
const str1 = 'Brad Hello There';
const resultSearch = str1.search(re);
console.log(resultSearch);

// replace() - Return new string with some or all matches of a pattern
const str2 = 'Hello There';
const newStr = str2.replace(re, 'Hi');
console.log(newStr);