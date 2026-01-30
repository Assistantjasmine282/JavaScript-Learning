//if

// if(condition){      //if condtion is true then code execute of this block otherwise not


// }

// const isUserloggedIn=true
// const temperature =41
// if(temperature<50){
//     console.log("less than 50")

// }
// console.log("temperatire is greater than 50");

// //2<=2, (<,>,<=,>=,==,!= ,===, !==)    there are comparision operator


 //const balance =1000

// if(balance>500) console.log("test");



//  const balance =1000
// if(balance < 500){
//     console.log("less than");

// }else if(balance < 750){
//     console.log("less than 750")
// }else{
//     console.log("less than 1200")
// }

const userLoggedIn =true

const debitCard = true
const loggedInFromGoogle = false

const loggedInFromEmail =true

if(userLoggedIn && debitCard && 2==3){
    console.log("Allow to buy course");
}

if(loggedInFromGoogle  ||  loggedInFromEmail){
    console.log("user Logged In");
 
}
