// data types

// data ka type -> 12 harsh {} () [] null undefined NaN BigInt

// primitives -> aisi saari values jinko copy krne par tumhe ek real copy mil jaaye(string,number,boolean,null,undefined,symbol,bigInt)

// reference -> inko copy karne par real copy nahi milegi  but aapko reference milega parent ka (arrays[],object{},functions())

// let a = 12;  // a ke pass jo 12 hai woh alag hai
// let b = a;  // b ke pass jo 12 hai woh alag hai


// a = a +2;//b change nahi hoga

// console.log(a)
// console.log(b)

// let a = [1,2,3];
// let b = a;   // a mein change krne par b mein bhi hoga

// b.pop();

// console.log(a);
// console.log(b);

// For strings:
// ' '->single quotes, " " -> double quotes, ` ` ->backticks 
// true,false -> boolean

// null ka matlab hai aapne jaan boojh kar koi value nahi di


// let a; //by default undefined

// let sheryjs = {
//     uid: 12,
//     model: "saksham"
// }

// sheryjs.uid = 1;//this will overwrite the other value


// symbol ->unique immutable value

// let u1 = symbol("saksham");
// let u2 = symbol("saksham"); //both of these are different

// let obj = {
//     uid: 1,
//     name: "saksham",
//     age: 12,
//     email: "test@gmail.com"
// }

// let u3 = symbol("uid");
// obj[u3] = "001";

// let a = 1234567899n;//big int value banane ke liye end mein lagalo n

// let a = {
//     name: "saksham"
// }

// let b = a;

// b.name = "sharma";
// //this will change a's value too
// console.log("a is ",a," b is ",b);

//Dynamic typing -> js mein static typing nahi hai, yahan par hai dynamic typing jiska matlab hai aap data ko change kr skte ho kyuki yaha par dynamic data types hain

//i.e a variables value can be changed many times

// let a = 12;
// a = true;
// a = "saksham";

//type coercion (== vs ===)
//truthy vs falsy values

//type coercion -> concept jismein appka ek type automatically convert hojaayega


// console.log("5"+1)
// console.log("5" - 1)



// 0 false "" null undefined NaN document.all  => falsy values  || truthy values iske alawa sb

// COMMON CONFUSION :
// 1. WHY IS NaN a number
// 2. Undefined vs Null
console.log(true + false)
console.log(null+1)
console.log(!!undefined)
console.log(typeof 2*"harsh")//failed mathematical operation = NaN