function sayMyName(){
    console.log("J");
    console.log("A");
    console.log("S")
}

sayMyName();

//  function addTwoNumbers(number1, number2 ){
//         console.log(number1+number2)
// }
//  addTwoNumbers(3,4);

//function addTwoNumbers(number1, number2 ){
//         console.log(number1+number2)
// }
//  const result=addTwoNumbers(3,4);     output-> 8
//console.log("result:",result);        output-> undefined

// function addTwoNumbers(number1, number2){
//      return number1 + number2;

// }
// const result =addTwoNumbers(3,5)
// console.log("result:", result)


//  function addTwoNumbers(number1, number2 ){
//        let result=number1+number2;
//        return result;
//       // console.log("Jasmine ")      this line will never print because after return no ne function or code run 
// }
// const result =addTwoNumbers(3,5);
//  console.log("Result:", result);

//  function loginUserMessage(username){
//     return `${username} just logged In`
//  }

// console.log(loginUserMessage("hitesh"));

function loginUserMessage(username){

    if(username===undefined){
        console.log("please enter a username ")
        return
    }
    return `${username} just logged In`
 }

console.log(loginUserMessage());

//for shoping cart 

function calculateCartPrice( ...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000))

const user ={
    username:"Jasmine",
    price:199
}

//here how pass object in function and use 
function handleObject(anyobject){
        console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}
//handleObject(user);

handleObject({
    username:"sam",
    price:399
})

const myNewArray=[200,300,500]
function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue([200,300,400, 1000]));
console.log(returnSecondValue(myNewArray));   //print value by index