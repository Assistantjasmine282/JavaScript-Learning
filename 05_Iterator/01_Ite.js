//for

// for(let index=0; index<Array.length; index++){
//     const element =array[index];
// }

// for(let index=0; index<10; index++){
//     const element =index;

//     console.log(element);
//  }

for(let i=0; i<10; i++){
    const element =i;

    if(element ==5){
        //console.log("5 is best number");

    }

   // console.log(element);
 }


 for(let i=0; i<=10; i++){
    console.log(`outer loop:${i}`);
    for(let j=0; j<=10;j++){
        console.log(`Innner loop value ${j} and inner loop ${i}`);
    }
 }


 //break and continue

//  for(let i=0; i <=20; i++){

//     if(i==5){
//         console.log(`detected 5`);
//         break     //this break the loop ehen 5 detected and came ut the loop
//     }
//     console.log(`value of i is ${i}`)
//  }


for(let i=0; i <=20; i++){

    if(i==5){
        console.log(`detected 5`);
        continue    //this egnore one time when condition met
    }
    console.log(`value of i is ${i}`)
 }