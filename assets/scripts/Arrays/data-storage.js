
//Same type data
const hobbies =['Cooking' ,'Sport'];

//Mixed type data
const mixedData= [30,'Max', {moreDate:[]}];
console.log(mixedData[1]); //Output Max

//Nested array or multi-dimension array
const twoDArray = [[1,1.9],[-5.4,2.1]];

for(const data of twoDArray){
    for(const dataPoint in data){
        console.log(dataPoint);
    }
}
