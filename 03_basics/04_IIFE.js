// Immediately Invoked Function Expressiona(IIFE)

(function chai(){    //this is named IIFE 
    console.log(`DB CONNECT`);
})();      //here semicolon is manadatory because after this IIFE cant not decide that where this is end 

(()=>{         //this is simple IIFE
    console.log(`DB Connect two`);

})();


((name)=>{
    console.log(`DB discnnected ${name}`);

})('jasmine')