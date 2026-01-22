//numbers


const score =400
console.log(score)
const balance =new Number(100)

console.log(balance)

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 23.8966

console.log(otherNumber.toPrecision(3));  //precesion(round off

const hundreds= 10000000000000000
console.log(hundreds.toLocaleString('en-IN'));


//+++++++++++++++++++++++ Maths ++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));

console.log(Math.floor(4.9));
console.log(Math.ceil(4.9));
console.log(Math.min(4,9));

console.log(Math.max(2,4,5,6,2,2,4,5,67,888));

console.log(Math.random());    //Math.random() always give value in rage of 0-1

console.log(Math.random());
console.log((Math.random()*10) + 1);

console.log(Math.floor(Math.random()*10) +1);

const min =10
const max =20

console.log(Math.floor(Math.random() * (max - min +1)) + min);