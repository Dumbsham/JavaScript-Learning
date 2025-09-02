// //1. Creation using object literal

// let obj = {
//     name : "saksham",
//     age: 20,
//     job:"Developer"
// };

// console.log(obj);

// //accessing object properties

// console.log(obj.name);
// //OR
// console.log(obj["age"]);

// //modifying

// obj.age = 19;
// console.log(obj.age);

// //deleting properties from an object

// delete obj.job;
// console.log(obj);

// //Checking if a property exist

// console.log("color" in obj);
// console.log(obj.hasOwnProperty("age"));

// //Merging Objects
// let obj2 = {pagalkutta:"tu"};

// let obj3 = {...obj,...obj2};
// console.log(obj3);

// //TO FIND NUMBER OF PROPERTIES IN AN OBJECT I.E. LENGTH OF OBJECT

// console.log(Object.keys(obj3).length);


// let a = {};
// console.log(typeof a === "object" && a!==null);

// let obj = {
//     name: "saksham",
//     address:{
//         city: "Noida",
//         pin: 462001,
//         location:{
//             lat:23.2,
//             lon:77.4,
//         },
//     },
//     salary: 5000000,
//     company: "meta"
// };

// console.log(obj.name,"'s salary is ",obj.salary,"and he works in the company ",obj.company);
// let aa = "name";
// console.log(obj[aa]);



//nesting and deep access

// console.log(obj.address.location)

// let {lat,lon} = obj.address.location;

//looping


// for(let key in obj){
//     console.log(key,":",obj[key]);//don't write like obj.key
// }

// Object.keys(obj)

// let obj2 = {...obj};//copies obj into obj2 , kharab tareeka to copy an object if the object is nested

// let obj2 = Object.assign({price:Infinity},obj);//same as above

//deep clone:  jab tum copy karo ek obj ko dusre object mein using spread operator, and the copy krne wala object is nested. toh main values ki copy jaati but nested values ka reference, to solve it we use deep clone

// let obj2 = JSON.parse(JSON.stringify(obj)) // stringify string mein convert krta object ko and parse usko normal form mein laata

// obj2.address.city = "delhi";

//optional chaining and cloning properties

// obj?.address?.city // doesn't give error, gives undefined if some property is changed

//computed properties
// let role = "admin";

// let obj = {
//     name: "saksham",
//     age: 19,
//     address :{
//         city: "noida",
//     },
//     email:"saksham.saksham.com",
//     [role]:"sakshamm"
// };

//Practice

//CREATE AN OBJECT FOR A STUDENT WITH NAM,AGE,AND isEnrolled.

let obj = {
    name : "saksham",
    age : 19,
    isEnrolled:true
};


//given a dynamic key let key = "age",how will you access user[key]?

// let key = "age";
// const user = {
//     age:26,
// };

// console.log(user[key]);