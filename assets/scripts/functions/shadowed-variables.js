/*
We only declare another variable inside of the function. But since variables in functions get their own scope, JavaScript does 
something which is called "shadowing".

It creates a new variable on a different scope - this variables does not overwrite or remove the global variable by the way - 
both co-exist.

When referring to userName inside of the greetUser function we now always refer to the local, shadowed variable. 
Only if no such local variable existed, JavaScript would fall back to the global variable.
*/
let userName = 'Max';
function greetUser(name) {
    let userName = name;
    console.log(userName);
    return 1;
    //return 1; Error - Remove unrechable code
}
userName = 'Manu';
greetUser('Max'); F