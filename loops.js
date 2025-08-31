//repeat karne ko loop kehte hain
//for while foreach

// kaha se jaana hai -> kaha tak jaana hai -> kaise jaana hai
// use 'for'

// kaha se jaana hai -> kab rukna hai -> kaise jaana hai
// use 'while'


//------------------------------------------------------------------

//for

// for (let i = 1; i < 10; i++) {
//    console.log("saksham");
// }

// let i = 1; 

// while(i<33){
//    //code
//    console.log(i);
//    i++;
//  }

//  do{
// console.log(i);
// i++;
//  }
//  while(i < 20){

//  }

// ------------------------------------------------------------
//practice loops

//Q1. Print numbers from 1 to 10 ysing a for loop.

// for(let i = 1;i <=10;i++){
//    console.log(i);
// }


//Q2. Print numbers from 10 to 1 using a while loop

// let i = 10;

// while(i >= 1){
//    console.log(i);
//    i--;
// }

//Q3.Print even numbers from 1 to 20 using a for loop

// for(let i = 2 ; i <= 20;i+=2){
//    console.log(i);
// }

//Q4. Print odd numbers from 1 to 15 using a while loop.

// let i = 1;
// while(i <=15){
//    if(i%2 != 0){
//     console.log(i);
//    }
//    i++;
// }

//Q5. Print the multiplication table of 5

// for(let i = 1;i <=150;i++){
//   if(i%15==0) console.log(i);
// }

//Q6. Find the sum of numbers from 1 to 100 using a loop

// let sum = 0;

// for(let i = 1;i <=100;i++){
//    sum +=i;
// }


// console.log("sum is: ",sum);

//Q7. Print all numbers between 1 to 50 that are divisble by 3

// for(let i = 1;i <=50;i++){
//    if(i%3==0){
//       console.log(i);
//    }
// }

//Q8. Ask the user for a number and print wether the number from 1 to that 

// let val = prompt("give a number");

// for(let i = 1;i<=val;i++){

//    if(i%2==0){
//       console.log(i," is even");
//    }   
//    else{
//       console.log(i," is odd");
//    }

// }

//Q9. Count how many numbers between 1 to 100 are divisible by both 3 and 5
let count = 0;
for(let i = 1;i <=100;i++){
   if(i%3==0 && i%5==0){
      count++;
   }
}

console.log(count," numbers are divisible by both 3 and 5 ")