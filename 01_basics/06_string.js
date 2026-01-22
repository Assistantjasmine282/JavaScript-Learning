 const name ="jasmine Rai"

const repoCount =5

 console.log(name+repoCount+"value");  // this is the old type to concate string 


//this is the mordern way
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//string declaration

const gameName = new String('Jasmine-hc-rai')  //give key value pair  like 0->J ,1->a,2->s etc 

console.log(gameName[0]);
 console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('J'));

const newString =gameName.substring(0,4)     //we can't give -ve value in substring
  console.log(newString);
const anotherString =gameName.slice(-4,4)     //we can give -ve  value in slice 

console.log(anotherString);
 

const newStringOne ="  Jasmine  "
console.log(newStringOne);
console.log (newStringOne.trim());   //there are two triming method 1)trimStart() and 2)trimEnd   //trim work on white space and  line terminator  and trim remoe start spane and end space



const url = "http://jasmine.com/jasmine%20Rai"

console.log(url.replace('%20','-'))
console.log(url.includes('sundar'))

console.log(gameName.split('-'));