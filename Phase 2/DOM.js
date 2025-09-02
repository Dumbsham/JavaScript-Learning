// dom manipulation
//html se element  select karna
//text badalna
//html badalna
//css badalna
//attribute
//even listeners

// Selecting elements: getElementById,getElementByClassName-->used less
// querySelector,querySelectorAll--->used more


// let abcd = document.getElementById("abcd");
// console.dir(abcd);

// let efgh = document.getElementsByClassName("efgh");
// console.dir(efgh);

// let abcd  = document.querySelector("h1");//hamesha pehla element select krta hai body mein
// console.dir(abcd);
// let h1 = document.querySelector("h1");
// // h1.textContent = "hello saksham kya haal";
// //h1.innerHTML = "<i>saksham bhai mauj</i>";//html  hi badal deta hai
// // h1.textContent = "saksham bhai mauj";
// h1.hidden = true;
// console.dir(h1);

//Attribute manipulation 
// let a = document.querySelector("a");
// a.setAttribute("href", "https://www.google.com");

// let img = document.querySelector("img");
// img.setAttribute("src","https://images.unsplash.com/photo-1754968230523-052635c98f99?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")


// let a = document.querySelector("a");
// console.log(a.getAttribute("href"));

// let a = document.querySelector("a");
// a.removeAttribute("href");

//Dynamic DOM manipulation: createElement,appendChild,removeChild,prepend

//create element
//append/prepend karo jaha bhi element chaiye waha

let h1 = document.createElement("h1");
h1.textContent = "hello bhai";
document.querySelector("body").prepend(h1);//append matlab body ke end mein judega, prepend mtlb body ke start mein judega
console.log(h1);