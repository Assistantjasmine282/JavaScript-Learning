const myObject={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swit by apple"
}
  //forIn loop
for(const key in myObject){
    console.log(`${key} shrtcuts i sfor ${myObject[key]}`);
}

const programming =["js","rb","py","java","cpp"]

for(const key in programming){
    console.log(programming[key]);
}

// const map =new Map()
//  map.set("IN","India")
//  map.set("USA", "United")
//  map.set("FR", "France")
//  map.set("IN" ,"India")

//  for (const key in map){
//     console.log(key);
//  }      

//map is not iteratable 


//if we want loop in object then use forIn 

//if we want loop in array then use forOf



