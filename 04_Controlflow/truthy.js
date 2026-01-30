// const userEmail ="jasmine@gmail.com"

// if(userEmail){
//     console.log("got user Email");

// }else{
//     console.log("don't have use email");
// }



//falsy value->  
  //false, 0,-0, bigint(0n), "", null, undefined,NaN

  //truthy value 

  //"0", 'false', " ",[],{},function(){},
 

//   const userEmail =[]
//   if(userEmail.length ===0){
//     console.log("Arrayis empty")
//   }

//   const emptyObj ={}
//   if(Object.keys(emptyObj).length===0){
//     console.log("object are empty")
//   }


  //false ==0     ->true
  //false==''  ->true
  //0==''     ->true


  //nulish  coalescing peratr (??): null undefined

  let vall;
  //val1=5 ?? 10
   
  //val1 = null ?? 10
   val1 = undefined ?? 15


  console.log(val1);


  //ternary operator

//   condition ? true:false

const iceTea=100;
iceTea >= 80 ? console.log("less than 80"):console.log("more than 80")