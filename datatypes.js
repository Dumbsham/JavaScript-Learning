// data types

//data ka type -> 12 harsh {} () [] null undefined NaN BigInt

// primitives -> aisi saari values jinko copy krne par tumhe ek real copy mil jaaye(string,number,boolean,null,undefined,symbol,bigInt)

// reference -> inko copy karne par real copy nahi milegi  but aapko reference milega parent ka (arrays[],object{},functions())

// let a = 12;  // a ke pass jo 12 hai woh alag hai
// let b = a;  // b ke pass jo 12 hai woh alag hai


// a = a +2;//b change nahi hoga

// console.log(a)
// console.log(b)

let a = [1,2,3];
let b = a;   // a mein change krne par b mein bhi hoga

b.pop();

console.log(a);
console.log(b);

