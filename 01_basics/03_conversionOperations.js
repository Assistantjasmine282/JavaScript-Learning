

let score ="33abc"
let value = null;
let data = undefined;

console.log(typeof score);
console.log(typeof(score));


//conversion

let scoreInNumber = Number(score); // this is used to convert string in number 
let valueInNumber = Number(value);
let  dataInNumber = Number(data)
console.log(typeof scoreInNumber);  
console.log(scoreInNumber);  //output NaN not a number   
 console.log(typeof valueInNumber);
 console.log(valueInNumber);

 console.log(typeof dataInNumber);
 console.log(dataInNumber);
 


 //"33" => 33
 //"33abc" => NaN
 //true => 1,false=> 0


 let isLoggedIn =1;
 let booleanIsLoggedIn =Boolean(isLoggedIn)
 console.log(valueInNumber);     //output -> true


 //in boolean conversion 
 // 1 => true;
// 0 => false 
//""  => false
// "hitesh"  => true

let someNumber =33
let stringNumber= String(someNumber)

console.log(stringNumber);     //33
console.log(typeof stringNumber);  //string