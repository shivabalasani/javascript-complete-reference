var c = [1,2,3];
var d = c;
d.push( 4 );

console.log(c);   // [1,2,3,4]
console.log(d);   // [1,2,3,4]
//======================================================
let obj = {
  a: 'a',
  b: 'b',
  c: {
    deep: 'try and copy me'
  }
};
let clone = Object.assign({}, obj); //does only shallow clone
let clone2 = {...obj}               //does only shallow clone
let superClone = JSON.parse(JSON.stringify(obj)) //does deep clone with below exceptions

obj.c.deep = 'hahaha';
console.log(obj)
console.log(clone)
console.log(clone2)
console.log(superClone)

var o = JSON.parse(
    JSON.stringify({
      a: new Date(),
      b: NaN,
      c: new Function(),
      d: undefined,
      e: function() {},
      f: Number,
      g: false,
      h: Infinity
    })
  )
  console.log(o);
  // Output :  { a: '2020-02-22T19:55:22.199Z', b: null, g: false, h: null }