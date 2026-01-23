//there are two type  to declration of object   1)as a literal   2) as a constructor 

//singleton  when we declare object as a literal then there are no singletonmade


//object literals
//object.create    this is a type of declaration of object a sconstructer in this singletone made



//this is object delration as leterals
const JsUser = {
    name:"Jasmine",      //key value pair
    age:18,
    location:"Lucknow",
    email:"jasmine@gmal.com",
    isLoggedIn:false,
    lastLoggedinDays:["Monday","saturday"]
}


//these are two methods to acces value from object
console.log(JsUser.email);
console.log(JsUser["email"]);
