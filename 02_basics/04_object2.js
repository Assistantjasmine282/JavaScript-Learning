//object as a constructor

//const tinderUser = new Object()       singletone objects

const tinderUser = {}

 tinderUser.id ="123abc"
 tinderUser.name="Jasmine"
 tinderUser.age=18
 tinderUser.isLoggedIn =false
//console.log(tinderUser);

const regularUser ={
    email: "jamsine@gmail.com",
    fullname:{
        userfullName:{
            firstname:"jasmine",
            lastname:"rai"
        }
    }

}

//console.log(regularUser.fullname.userfullName.firstname);

const obj1 ={
    1:"a",
    2:"b"
}
const obj2={
    3:"a",
    4:"b"
}

//const obj3 =Object.assign({},obj1,obj2)     //merge two or more objects


const obj3 ={...obj1,...obj2}    //this is also method of combine objects called spread and merge 

console.log(obj3);
//when value came form data base  , that came form of arary of objects
const users =[
      {
           id:1,
           email:"jamsine@gmail.com"
      },
      {
           id:3,
           email:"jamsine@rai.com"
      },
      {
           id:4,
           email:"jamsine@.com"
      },
]

users[1].email
 
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//object destructure

const course ={
    courseName:"js in hindi",
    price:"999",
    courseInstr:"Jasmine"
}

// course.courseInstr      ///this is also do same work destructure
// console.log(course.courseInstr)

const {courseInstr}=course    //you can remane const{curseInstr:Instr}=course
console.log(courseInstr);