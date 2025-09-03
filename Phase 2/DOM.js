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

// let h1 = document.createElement("h1");
// h1.textContent = "hello bhai";
// document.querySelector("body").prepend(h1);//append matlab body ke end mein judega, prepend mtlb body ke start mein judega
// console.log(h1);

// let h1 = document.querySelector("h1");
// h1.remove();

// let h1 = document.querySelector("h1");
// h1.textContent = "accha ji";


// document.querySelector("div").append(h1);
// document.querySelector("div").prepend(h1);

// let h1 = document.querySelector("h1");
// js se css badalna
// h1.style.color = "green";
// h1.style.backgroundColor ="black";
// h1.style.fontFamily = "Cursive";


// let h1 = document.querySelector("h1");
// h1.classList.add("bete");

// let h1 = document.querySelector("h1");
// h1.classList.remove("bete");

//h1.classlist.toggle("bete"); LAGI HUI CLASS HATA DEGA AND HATI HUI KO LAGA DEGA

//what is  the difference between getElementById and querySelector?
//queryselector is universal,it can select class id etc. therefore # or . is imp for it

//What does getElementByClassName return? Is it an array?
// ? yes,kinda like array(exactly and HTML collection). returns nodes with given classnames

// *#  let buynow = document.getElementsByClassName("buy-now");
// *# console.log(buynow);


// ?TASK 1: Select the heading of a page by ID and change its text to "welcome sharma ji".
// *# let heading = document.querySelector("#heading");
// *#heading.textContent = "welcome sharma ji";

// ? Task 2: Select all <li> elements and print their text using a loop
// *# let lis = document.querySelectorAll("li");

// *# 1st method: lis.forEach(function(val){
//     console.log(val.textContent);
// });

// *#for(let i = 0; i< lis.length;i++){
// *#    console.log(lis[i].textContent);
// *#}

// ? What's the differennce between innerText,textContent,and innerHTML?

// ?When should you use the textContent instead of innerText?


// ?TASK 3:SELECT A PARAGRAPH AND REPLACE ITS CONTENT WITH:
// ? <b>Updated</b> by JavaScript

// *# let p = document.querySelector("p");
// *# p.innerHTML = "<b>Updated</b> by JavaScript";

// ? HOW DO YOU GET THE SRC OF AN IMAGE USING JAVASCRIPT?
// *# let img = document.querySelector("img");
// *# console.log(img.src);
// ?  OR
// *#console.log(img.getAttribute("src"));

//set attribute sets a new value of the attribute

// ? SELECT A LINK AND UPDATE ITS HREF TO POINT TO HTTPS://SHERIYANS.COM

// *# let a = document.querySelector("a");
// *# a.setAttribute("href","https://www.sheryians.com/");

// ?ADD A TITLE ATTRIBUTE TO A DIV DYNAMICALLY
// *# let div = document.querySelector("div");

// *# div.setAttribute("title","some Info");

// ?REMOVE THE DISABLED ATTRIBUTE FROM A BUTTON
// *# let btn = document.querySelector("button");
// *# btn.removeAttribute("disabled");

// ?What does createElement() do ? What's returned?

// *#let h1 = document.createElement("h1");
// *# console.dir(h1);

// ?What's the difference between appendChild() and prepend()?

// ! appenchild() saare child elements ke baad add hoga,jabki prepend saare childs se pehle

// ? CAN YOU REMOVE AND ELEMNT USING REMOVE CHILD()?


// TODO: CREATEA NEW LIST ITEM <li> NEW TAKS </li> AND ADD IT TO THE END OF A <ul>.

// *# let ul = document.querySelector("ul"); // Select the first <ul>
// *# let li = document.createElement("li");
// *# li.textContent = "smjha";
// *# ul.appendChild(li);

// TODO: CREATE A NEW IMAGE ELEMENT WITH A PLACEHOLDER SOURCE AND ADD IT AT THE TOP OF A DIV

// *# let img = document.createElement("img");
// *# img.setAttribute("src","https://i.pinimg.com/474x/18/4b/a2/184ba274530f9bb7b7cbccfaa5348523.jpg");

// *# let div = document.querySelector("div");
// *# div.prepend(img);

// TODO: SELECT THE FIRST ITEM IN A LIST AND DELETE IT FROM THE DOM.

// *# let ul = document.querySelector("ul");
// *# let li = document.querySelector("li"); //query selector pehla hi select krta

// *# ul.removeChild(li);

// TODO: ADD A HIGHLIGHT CLASS TO EVERY EVEN ITEM IN A LIST.

// *# let li = document.querySelectorAll("ul li:nth-child(2n)");
// *# li.forEach(function(elem){
// *#     elem.classList.add("highlight");
// *# })

// ? set the font size of many paragraphs at once to 18px

// *# let p = document.querySelectorAll("p");

// *# p.forEach(function(val){
// *#     val.style.fontSize = "18px";
// *# })

