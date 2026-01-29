// let a=10;
// const b=20;
// var c=30;
// console.log(a);
// console.log(b);
// console.log(c);

let a=300

if(true){
    let a=10
    const b=30
    var c=20
console.log("Inner:",a);  //output -> 10

}
//console.log(a);    //output -> a is not define 
 //console.log(b);   //output -> b is not define 
 console.log(c);    //output ->20 because this is not block scope
 console.log(a);      //output-> 300

function one(){
    const username = "jasmine"

    function two(){
        const website="youtube"
        console.log(username);
    }

    //console.log(website)   output-> not define 
    two()
}

one()

if(true){
    const username ="Hitesh"
    if(username ==="Hitesh"){
        const website =" gfg"
        console.log(username + website);
    }
   // console.log(website);   error due to scope and give website is not define

}
// console.log(username);    error due to scope


// ++++++++++++++++++intresting ++++++++++++++++++++++
addone(5)
function addone(num){
    return num +1
}

//addone(5)

addTwo(5)       //error because we hold this with a variable this called hoisting
const addTwo = function(num){
    return num+2
}
 // addTwo(5)