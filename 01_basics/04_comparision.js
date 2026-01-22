// console.log (2>1);  //true
// console.log(2>=1);
// console.log(2<1);
// console.log(2==2);
// console.log(2!=2);

console.log("2" >1); //same here
console.log("02">1); //here "02" first covert into number then compare with one and give output => true

//if you want to compare two dtata type then consider that both value should  same data type because  typescript does not allow two different datatype comparision 

console.log(null>0);   //false
console.log(null ==0);  //false
console.log(null >=0);  //true      here null convert into 0 then compare

console.log(undefined ==0);//false

//avoid above conversion it moslty create problem