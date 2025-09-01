// // let marks = [10,40,52,37,92];
// // console.log(marks[0]); 

// //METHODS:push,pop,shift,unshift,splice,slice,reverse,sort
// //map,filter,reduce,find,some,every

// //push-> end mein value daaldeta
// let arr = [1,2,3,4,5]

// arr.push(6);

// console.log(arr);

// //pop -> end se value hatata hai

// arr.pop();
// console.log(arr);

// //shift() -> start se value hatata hai

// arr.shift();
// console.log(arr);

// //unshift()-> start mein value daalata hai
// arr.unshift(1);
// console.log(arr);
// //splice()->changes the original array , beech se value hatata hai

// let nums = [1,2,3,4,5];
// nums.splice(2,1); //(konse index se hatani hai,kitni hatani hain)

// // //slice()->makes a new array with changes,new array deta with modifications
// let a = nums.slice(2,1);
// console.log(a);
// // //reverse()->reverse the original array

// let arr = [11,62,3,4,25];
// let sr = arr.sort(function(a,b){
//     // return a-b;//a-b likhne par ascending order
//     // return a+b;//returns in descending order
// })
// console.log(sr);

// //foreach,sort,map,filter,reduce -> sab ek function
 
// //foreach-> har member/element ke liye function chalata
// arr.forEach(function(val){
//     console.log(val+5);
// })

//map sirf tab use krna hai jab aapko ek naya array banana hai pichle array ke data ke basis par

//map dikhne ke baad ek blank array bana liya karo

// let newarr = arr.map(function(){
//     return 12;
// }) 

// let arr = [1,2,3,4,5,6,7,8];

// let newarr = arr.filter(function(val){
//     if(val > 4) return true;
//      //either true or false
//     //agar true hai toh value new arr mein jayegi
//     //false likhne pe nahi jaaye
// })
// console.log(newarr)  


//reduce is to make the array come to single value
// let arr = [1,2,3,4,5,6];

// arr.reduce(function(accumaulator,val){
//     return accumaulator+val;
// },0);//set the value to 0. accumulator is woh banda jo apni value yaad rakhta hai 

// let arr = [1,2,3,4,5,6];

// arr.find(function(val){
//     return val === 1 ;
// })//gives the first value

//Use .find() to get the first number less than 10:
// let arr = [12,15,3,8,20];
// let newarr = arr.find(function(val){
//     return val < 10;
// })
// console.log(newarr)
 

