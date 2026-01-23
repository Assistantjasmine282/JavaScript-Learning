//arrays

const myArr = [0,1,2,3,4,5]     //array in js are resizable , and in array can contain multiple datatype
const myHeroes =["saktiman","jasmine"]
const myArr2=new Array(1,2,3,4,5)
//console.log(myArr[1]);      //accesing of elemtn of array
  //array may shallow copy  means if we change copy of aray then it also change in main array    


  //methods of array

//   myArr.push(6)  
//   myArr.push(9)       //push the value in array at the last

//   myArr.pop()        //delete the last eement of Array

  //myArr.unshift(9)      //add 9 at the starting of array but this is not optimized because of this all value  of array may be shft of thier psition which is time consuming
   
  
  //myArr.shift()        //delete the fisrt element of array
  
//   console.log(myArr.includes(9));
//   console.log(myArr.indexOf(9));
//   console.log(myArr.indexOf(3));

const newArr =myArr.join()    //join bind the array and conert it into string 

//   console.log(myArr);
//   console.log(newArr);
//   console.log(typeof newArr);

  //slice,splice

  console.log("A", myArr);

  const myn1 = myArr.slice(1,3);     //slice does not contain last rage like here output ->[1,2]

  console.log(myn1);
  console.log("B", myArr);

  const myn2 = myArr.splice(1,3);  //splice inclue last rage and cut the splice part from the main array and covenrt array in two part 

  console.log("C",myArr);    //output-> [0,4,5]
  console.log(myn2);         //output->[1,2,3]


