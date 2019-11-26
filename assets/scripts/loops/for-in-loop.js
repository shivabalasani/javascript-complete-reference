 /*
 for...in statement
The for...in statement iterates a specified variable over all the enumerable properties of an object. For each distinct property, JavaScript executes 
the specified statements. A for...in statement looks as follows:

for (variable in object)
  statement
*/

//The following function takes as its argument an object and the object's name. It then iterates over all the object's properties and returns a string 
//that lists the property names and their values.

function dump_props(obj, obj_name) {
    let result = '';
    for (let i in obj) {
      result += obj_name + '.' + i + ' = ' + obj[i] + '<br>';
    }
    result += '<hr>';
    return result;
  }
  //For an object car with properties make and model, result would be:
  //car.make = Ford
  //car.model = Mustang
  
  const car = {
      make: 'Ford',
      model: 'Mustang'
  }
  console.log(dump_props(car,'car'));