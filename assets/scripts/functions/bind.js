//1.Bind an object to a function
//2.Reference it using this.

let c1 = {
    x: 15,
    y: 25
}

let c2 = {
    x: 170,
    y: 400
}

function printCoordinates() {
    console.log(this.x + ' , ' + this.y);
}

let c1_func = printCoordinates.bind(c1)
let c2_func = printCoordinates.bind(c2)

c1_func();
c2_func();

printCoordinates(); //Calling function without binding will bind to window. output undefined , undefined
//window.x=1;
//window.y=2;
//printCoordinates(); // output 1 , 2