const defaultResult =0;
console.log(`(${defaultResult} + 10)`);// Template literals (Template strings)
console.log(`\`` === '`') // --> true

//===========================================Multi-line strings===========================================
console.log(`string text line 1
string text line 2`); 

//===========================================Expression interpolation===========================================
let a = 5;
let b = 10;
console.log(`Expression interpolation output : ` + `Fifteen is ${a + b} and
not ${2 * a + b}.`); 


 //===========================================Nesting templates===========================================
const classes = `header ${ false ? '' :
 `icon-${true? 'expander' : 'collapser'}` }`;
 console.log('Nesting Template output : ' + classes);


 //==========================================Tagged templates===========================================
var person = 'Mike';
var age = 28;
function myTag(strings, personExp, ageExp) {
  var str0 = strings[0]; // "That "
  var str1 = strings[1]; // " is a "

  // There is technically a string after
  // the final expression (in our example),
  // but it is empty (""), so disregard.
  // var str2 = strings[2];

  var ageStr;
  if (ageExp > 99){
    ageStr = 'centenarian';
  } else {
    ageStr = 'youngster';
  }

  // We can even return a string built using a template literal
  return `${str0}${personExp}${str1}${ageStr}`;
}

var output = myTag`That ${ person } is a ${ age }`;

console.log('Tagged template output : ' + output);
// That Mike is a youngster


//====================Tag functions don't need to return a string, as shown in the following example.==============================
function template(strings, ...keys) {
  return (function(...values) {
    var dict = values[values.length - 1] || {};
    var result = [strings[0]];
    keys.forEach(function(key, i) {
      var value = Number.isInteger(key) ? values[key] : dict[key];
      result.push(value, strings[i + 1]);
    });
    return result.join('');
  });
}

var t1Closure = template`${0}${1}${0}!`;
t1Closure('Y', 'A');  // "YAY!"
var t2Closure = template`${0} ${'foo'}!`;
t2Closure('Hello', {foo: 'World'});  // "Hello World!"


//===========================================Raw strings==============================================
function tag(strings) {
  console.log('Raw strings output : ' + strings.raw[0]);
}

tag`string text line 1 \n string text line 2`;
// logs "string text line 1 \n string text line 2" ,
// including the two characters '\' and 'n'
var str = String.raw`Hi\n${2+3}!`;
// "Hi\n5!"
console.log(str);
// str.length is 6
console.log(str.split('').join(','));
// "H,i,\,n,5,!"