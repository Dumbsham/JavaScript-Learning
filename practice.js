//Q1. What;s the difference between function declaration and expression in terms of hoisting? function declaration cannot be hoisted i.e. not used before declaration 

//Q2. convert the below function into an arrow function
// function multiply(a,b){
//     return a*b;
// }

// let multiply = ()=>{
//     return a*b;
// }

//Q3. identfiy the parameters and arguments in the given function
// function welcome(name){//name is parameter
//     console.log(name);
// }

// welcome("saksham");//argument

//Q4. Use rest parameter to accept any number of scores and return the total

//... operator is called rest parameter
// function getScore(...scores){
//     let total = 0;
//     scores.forEach(function(val){
//         total = total + val;
//     });
//     return total;
// }

// let total = getScore(10,12,14,18);
// console.log(total);

//Q5. Fix this function using early return
// function checkAge(age){
//     if(age < 18){
//         console.log("Too Young");
//     }
//     else{
//         console.log("allowed");
//     }
// }

// function checkAge(age){
//     if(age < 18) return "Too young";
//     return "Allowed";
// }

// checkAge(23);


// function f(){
//     return;
// }

// console.log(f());


//Q6. What does it mean when we say "functions are first-class citizens"?
// they can be used like a value and can be passed or recieved
// let a = function(){

// }

// a();


//Q7. Pass a function into another function and execute it inside.

// function abcd(val){
//     val();
// }

// abcd(function(){
// console.log("saksham");
// });

//what is a higher-order function?
// a function which either accepts or returns a function
// function abcd(){
//     return function(){

//     }
// }

// function abcd(val){
//     val();
// }

// abcd(function(){

// })

//what is a closure? when is it created?
//a function which returns a function and the inner function uses a value of the outside function
//what will be the output of the following code?

// function outer(){
//     let count = 0;
//     return function(){
//         count++;
//         console.log(count);
//     };
// }

// const counter = outer();
// counter();//will print 1
// counter();//will print 2

// Conver this normal function into an IIFE

// (function init(){
//     console.log("initialised");
// })();




//BMI CALCULATOR

// function bmi(weight,height){
//   return  weight / (height*height)
// }


// console.log(bmi(86, 1.7).toFixed(2));//2 decimal ans

//Reusable discount calculator

// function discountCalculator(discount){
//     return function(price){
//             return price -(price*(discount/100));
//     }
// }

// let ten = discountCalculator(10);
// let twenty = discountCalculator(20);
// console.log(twenty(200));

function counter(){
    let count = 0;
    return function(){
        count++;
        return count;
    };
}

let c = counter();
console.log(c());
console.log(c());
console.log(c());
console.log(c());