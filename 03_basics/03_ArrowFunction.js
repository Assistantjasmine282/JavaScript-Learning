const user ={
    username:"jasmine",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`)
    console.log(this)
    }


}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

console.log(this)      //output {}->empty

// function abc(){
//     console.log(this)
// }
// abc()

// function abc(){
//     let username="Jasmine"
//     console.log(this.username);    //output -> undefined
// }
// abc()


// const chai= function(){
//     let username ="hitesh"
//     console.log(this.username);      //output-> undefined 
// }

//ArrowFunction

// const chai = () =>{
//     let username ="Jasmine"
//     console.log(this.username);    //ab bhi undefined

// }
// chai()



// ======+++++++++++++++++ArrowFunction ++++++++++++++++++++

//baisc ArrowFunction  OR explecit return

const addTwo=(num1 , num2) =>{
    return num1 +num2
}
console.log(addTwo(9,4))


//implecit return

 const addThree=(num1 , num2,num3) =>  (num1 + num2 + num3)
console.log(addTwo(3,4,8))

//object return 

// const addfour=(num1 , num2,num3) =>  ({username:"jasmine"})
// console.log(addTwo(3,4,8))




