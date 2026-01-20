"use strict"; //treat all JS code as newer version

//alert(3+3)     we are using nodejs not browser so this create error 


let name="jasmine"
let age=22
let isLoggedIn=false
let state= null

/*premitive datatype 
number => 2 to 53
bigint
string
boolean => false/true
null => standalone value  or empty value
undefine =>  not assigned value
symbol = > unique 

*/
  /*
1.object
null is a object but undefined is undefined 
console.log(typeof null)
*/

let jasmine={
    type:"company",
    location :"noida"
}
console.log(jasmine.type)



//2. Arrays
let a1 = [1, 2, 3, 4, 5];
console.log(a1);

let a2 = [1, "two", { name: "Object" }, [3, 4, 5]];
console.log(a2);


//3.function
// Defining a function to greet a user
function greet(name) {
     return "Hello, " + name + "!"; 
    }
// Calling the function
console.log(greet("Ajay"));

//4.date Object
// Creating a new Date object for the
// current date and time
let currentDate = new Date();

// Displaying the current date and time
console.log(currentDate);

//5. regular expression 
// Creating a regular expression to match the word "hello"
let pattern = /hello/;

// Testing the pattern against a string
// Returns false because "hello" is not present
let result = pattern.test("Hello, world!"); 

console.log(result);



