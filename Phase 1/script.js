//var, let, const - line-by-line comparison
// declarations and initialization

//window mein add hota hai
//function scoped hota hai
// aap firse declare kr skte ho and same name se and error nahi aayega

// let a; //declaration
// let a = 12; //declare and initialize
// let a = 13;

// const discount = 12;

// function abcd() {
//     if (true) {
//         var a = 12;//this can be used in the whole function
//     }
// }


// scope (global,block,functional)

// var a = 12; //global scope: pure code mein har jagah use ho skta hai

// {
//     //this is a block
//     var b = 12; // pure code mein use ho skta even if it's in block coz var is function scoped

//     let c = 2; // jiss block mein bnayenge let ko, ussi block mein use ho payega,not globally
// }

// // har baar let banana hai


// //Reassignment, redeclaration

// var a = 12;
// a = 32;

// var a = 233;

// let b = 12;
// b = 32;

// let b = 433; 

//redeclaration is possible with var but not let



//Temporal Dead Zone - UTNA AREA JITNE MEIN JS KO PTA TOH HAI KI VARIABLE EXIST KRTA HAI,PAR WOH AAPKO VALUE NI DE SKTA
// var mein ni hota

// console.log(a);

// let a = 12;//will say not defined as error
//JS ko pta hai line 53 par hi ki line 56 pe kuch hai

//Hoisting impact per type
//hoisting -> ek variable ko jab js mein banaate hai to woh variable do hisso mein toot jata hai and uska declare part upar chala jaata hai adnd uska intiialization part neeche reh jaata hai

var a = 12; //ye actually mein 👇 banjayega
                    // var a = undefined;
                    // console.log(a);
                    // a = 12;

{
    var a = 2;
}
console.log(a);

let k = 10;
{
    let k = 20;
    console.log("Inside: ",k);
}

console.log("Outside: ",k);



//var ko function ke bahar nahi use kar skte
// let ko block ke bahar use nahi kr skte
