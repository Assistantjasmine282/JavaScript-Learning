const marvel_heros =["thor","ironman","apiderman"]
const dc_heros=["superman","flash","batman"]

//marvel_heros.push(dc_heros); //output-> array inside array means array take any data here array take another arrray as a data 

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);   //flash


// const All_heros=marvel_heros.concat(dc_heros)
// console.log(All_heros);      //same output as push
//concat return new array and push work on exixting array

//spread

const all_new_heros =[...marvel_heros,...dc_heros]
console.log(all_new_heros);


const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity);    //flat return a new array with sub-array elements cncatenated into it recursively up to the specified depth

console.log(real_another_array);   


console.log(Array.isArray("jasmine"))

console.log(Array.from("Jasmine"));  //convert value like object,string etc in array form

console.log(Array.from({name:"Jasmine"}));     //intresting   here this  cant convert this type value in array so return empty array.  here we should always define which value we want to convert in array key , string or anything else

let socre1=100;
let score2= 200;
let score3=300;

console.log(Array.of(socre1,score2,score3));







