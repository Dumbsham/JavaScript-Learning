//1. Creation using object literal

let obj = {
    name : "saksham",
    age: 20,
    job:"Developer"
};

console.log(obj);

//accessing object properties

console.log(obj.name);
//OR
console.log(obj["age"]);

//modifying

obj.age = 19;
console.log(obj.age);

//deleting properties from an object

delete obj.job;
console.log(obj);

//Checking if a property exist

console.log("color" in obj);
console.log(obj.hasOwnProperty("age"));

//Merging Objects
let obj2 = {pagalkutta:"tu"};

let obj3 = {...obj,...obj2};
console.log(obj3);

//TO FIND NUMBER OF PROPERTIES IN AN OBJECT I.E. LENGTH OF OBJECT

console.log(Object.keys(obj3).length);


let a = {};
console.log(typeof a === "object" && a!==null);

