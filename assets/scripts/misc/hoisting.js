//Example 1 - Does not hoist
x = 1; // Initialize x
console.log(x + " " + y); // '1 undefined'
var y = 2; // Initialize y
//This will not work as JavaScript only hoists declarations

//Example 2 - Hoists
var num1 = 3; //Declare and initialize num1
num2 = 4; //Initialize num2
console.log(num1 + " " + num2); //'3 4'
var num2; //Declare num2 for hoisting

//Example 3 - Hoists
a1 = 'Cran'; //Initialize a1
b1 = 'berry'; //Initialize b1
console.log(a1 + "" + b1); // 'Cranberry'
var a1, b1; //Declare both a1 & b for hoisting


//=============================================================================================================

console.log('Before sing----' + sing()); //oh la la la
                                        //Before sing----undefined    -> The sing function returns undefined
//console.log(sing2()); //TypeError: sing2 is not a function
console.log(sing2); //undefined

//function expression
var sing2 = function() {
    console.log('uh la la la');
}
console.log(sing2());   //uh la la la

//function declaration
function sing() {
    console.log('oh la la la');
}

console.log('After sing----' + sing()); //oh la la la
                                        //After sing----undefined    -> The sing function returns undefined


//=============================================================================================================
a();               //bye
console.log(one);  //undefined

var one = 1;
var one = 2;

console.log(one);  //2

function a() {
  console.log('hi')
}

function a() {
  console.log('bye')
}


//=============================================================================================================
var favouriteFood = "grapes";

var foodThoughts = function () {
     console.log("Original favourite food: " + favouriteFood);   //Original favourite food: undefined

     var favouriteFood = "sushi";

     console.log("New favourite food: " + favouriteFood);   //New favourite food: sushi
};

foodThoughts()

//=============================================================================================================
function bigBrother(){
    function littleBrother() {
      return 'it is me!';
    }
    return littleBrother();
    function littleBrother() {
      return 'no me!';
    }
  }
  
  console.log(bigBrother()); //no me!


