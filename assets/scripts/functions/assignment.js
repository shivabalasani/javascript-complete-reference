const arrFunct = name => console.log("Hi " + name);

const arrFunct1 = () =>  console.log("Hi skb");
const arrFunct2 = (helloMsg, name) =>  console.log(helloMsg + name);
const arrFunct3 = (helloMsg, name) => helloMsg + name;

arrFunct("skb");
arrFunct1();
arrFunct2("Hi", " skb");
console.log(arrFunct3("Hi", " skb"));

const arrFunct4 = (helloMsg = "Hi", name) => {
  console.log(helloMsg + name);
};

arrFunct4(undefined, " skb");

const cbf = () => console.log("Hi from callback");

const checkInput = (callBackFun ,...args) => {
 if(args.length===0){
     callBackFun();
 }
};

checkInput(cbf);

//======================================================================================
const sayHello = name => console.log('Hi ' + name);

const sayHello2 = (name, phrase) => console.log(phrase + ' ' + name);
const sayHello3 = () => console.log('Hi Hard-coded!');
const sayHello4 = name => 'Hi ' + name;

sayHello('Max');
sayHello2('Max', 'Hello');
sayHello3();
console.log(sayHello4('Max'));

const sayHello5 = (name, phrase = 'Hi') => console.log(phrase + ' ' + name);

sayHello5('Manuel');
sayHello5('Manuel', 'Hello');

function checkInput(cb, ...strings) {
  let hasEmptyText = false;
  for (const text of strings) {
    if (!text) {
      hasEmptyText = true;
      break;
    }
  }
  if (!hasEmptyText) {
    cb();
  }
}

checkInput(
  () => {
    console.log('All not empty!');
  },
  'Hello',
  '12',
  'adsfa',
  'Not empty'
);
