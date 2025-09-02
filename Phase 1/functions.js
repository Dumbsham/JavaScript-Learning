//what  why  how

// function lolo(){ // function statement
//     console.log("Happy new year");
// }

// lolo();

// let fnc = function(){ //function expression
//     console.log("heyheyhey");
// }

// fnc();

// let fnc = ()=>{  //fat arrow function
//     console.log("betcheee");
// }


// function dance(v1){
//     console.log(`${v1} naach raha hai`); // use backticks and dolla sign like %d in C
// }

// dance("chacha");
// dance("hiran");
// dance("lakadbaggha");

// function add(v1,v2){
//     console.log(v1+v2);
// }

// add(1,2);

// function add(v1 = 0,v2 = 0){ // by default they are 0, value pass krne par passed values will be stored in v1 and v2: DEFAULT PARAMETERS
//     console.log(v1+v2);
// }

// add(1);

// function abcd(...val){//val ke andr 10 values aagyi hain
//     console.log(val);
// }

// abcd(1,2,3,4,5,6,7,8,9,10);

// // jab arguments kai saare ho to humein utne hi parameter bannane padege ,isse bachne ke liye,huym rest ka use karte hai ... agar ... function ke parameter space mein lage to wo rest operator hai 

// function efgh(a,b,c,...val){
//     console.log(val);//only 4 5 6 will be inside val
// }

// efgh(1,2,3,4,5,6);

//return matlab jaha se aaye ho wahi daal denge

// function abcd(){
//     return 12;
// }




// let val = abcd();
// console.log(val);

//first class fncs-> functions ko values ki tarah treat kar skte hain

// function abcd(val){
// abcd();
// }

// abcd(function(){
//     console.log("hey");
// });

//Higher Order Function -> woh function jo return kare ya accept kare ek function


// function abcd(val){ // higher order function

// }

// abcd(function val(){

// });


// function abcd(){ // still a higher order function
//     return function(){
//         console.log("saksham");
//     }
// }


// abcd()();//pehla bracket abcd chalane ke liye, second bracket uss function ko chalane ke liye


//pure vs impure functions

// //pure function -> aisa fnc jo ki baahar ki value ko naa badle

// function abcd(){
//     console.log("hehehhe");
// }

// // impure function -> aisa fnc jo baahar ki value ko badal de
// function hui(){
//     a++;
// } 



//closures -> ek fnc jo return kare ek aur function aur return hone waala function humesha use krega parent fnc ka koi variable

// function abcd(){
//     let a = 12;
//     return function a(){
//         console.log(a);
//     }
// }

//lexical scoping->same as scoping in c
// function abcd(){

    // let a = 12; 
    // function defg(){
    //     let b = 13;
    //     function hijk(){
    //         let c = 14;
    //     }
        
    // }


//IIFE(immediately invoked function expressions)

// (function(){
//     console.log("hey");
// })();

// abcd();

// let abcd = function abcd(){
//     console.log("hey");
// }



