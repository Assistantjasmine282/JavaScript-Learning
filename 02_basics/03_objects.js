//there are two type  to declration of object   1)as a literal   2) as a constructor 

//singleton  when we declare object as a literal then there are no singletonmade


//object literals
//object.create    this is a type of declaration of object a sconstructer in this singletone made



//this is object delration as leterals

const mySym= Symbol("key1")   //Symbol data type declaration 


const JsUser = {
    name:"Jasmine",      //key value pair
    age:18,
    [mySym]:"key1",          //use symbol data types in object as a key 
    location:"Lucknow",
    email:"jasmine@gmail.com",
    isLoggedIn:false,
    lastLoggedinDays:["Monday","saturday"]
}


//these are two methods to acces value from object
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser[mySym]);

JsUser.email="Jasmine@chatgpt.com"
//Object.freeze(JsUser);  //here freeze the email value so that anyone can not change the email value 

JsUser.email = "Jasmine@google.com"
 console.log(JsUser)

 JsUser.greeting=function(){
    console.log("hello Js User");
 }

 JsUser.greetingTwo=function(){
    console.log(`hello Js User, ${this.name}`);   //reference the  name key of object
 }

 console.log(JsUser.greeting());
 console.log(JsUser.greetingTwo());