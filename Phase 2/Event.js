// ! BROWSER MEIN PAGE PAR KOI BHI HARKAT KARO, EVENT RAISE HOJAYEGA
// ! KUCH SCREEN PAR HO AUR AAPKO REACTION DENA HO TOH US WAQT AAPKO EVENT HANDLE KARNA AANA CHYIE
// ! EVENT MATLAB HOTA HAI KOI ACTION HUA(ANY FUCKING THING)
// ! EVENT LISTENER KA MATLAB HAI AAPNE KOI ACTION KA REACTION DIYA

// * let h1 = document.querySelector("h1");

// * h1.addEventListener("click",function(){
// *     h1.style.color = "green";
// * });

// * h1.addEventListener("dblclick",function(){
// *     h1.style.color = "yellow";
// * });

// ?element.addEventListener("even name",function() {});


//------------------------------------------------------------

// ?HOW TO REMOVE EVENT LISTENER
// * let h1 = document.querySelector("h1");

// * function dblclick(){
// *     h1.style.color = "yellow";
// * }

// * h1.addEventListener("dblclick",dblclick);
// * h1.removeEventListener("dblclick",dblclick);

//------------------------------------------------------------

// ?COMMON EVENTS

// click already learnt

// * let inp = document.querySelector("input");

// * inp.addEventListener("input",function(){
// *    console.log("typed");
// * })
// * inp.addEventListener("input",function(evt){
// *   if (evt.data !== null) { 
// *       console.log(evt.data);
// *   }
// * });

//---------------------------------------------------

// ? CHANGE EVENT TAB CHALTA HAI JAB AAPKA KOI INPUT SELECT YA TEXT AREA MEIN KOI CHANGE HOJAYE

// * let sel = document.querySelector("select");
// * let device = document.querySelector("#device");

// * sel.addEventListener("change", function(details){
// *     console.log(details.target.value);
// * });

// * sel.addEventListener("change",function(details){
// *     // * device.textContent = "Device Selected";
// *         // ! or
// *     device.textContent = `${details.target.value} Device is selected`;
// * });

//-----------------------------------------------------

// ? Approach

// * let h1 = document.querySelector("h1");

// * window.addEventListener("keydown",function(details){
// *     if(details.key === " "){
// *         h1.textContent = "SPC";
// *     }else{
// *     h1.textContent = details.key;
// * }
// * });

//--------------------------------------------------------------------

// ?FILE INPUT BEAUTIFUL 

// * let btn = document.querySelector("#btn");
// * let fileinp = document.querySelector("#fileinp");

// * btn.addEventListener("click",function(){
// *     fileinp.click();
// * });

// * fileinp.addEventListener("change",function(details){
// *      const file = details.target.files[0];
// *      if(file){
// *         btn.textContent = file.name;
// *      } 
// *     });

//-----------------------------------------------------------------------

// ? HOW TO GET VALUES FROM A FORM AND MAKE A CARD


// * let form = document.querySelector("form");
// * let inputs = document.querySelectorAll("input");
// * let main = document.querySelector("#main");



// * form.addEventListener("submit", function (details) {
// *     details.preventDefault();
// *     // console.log(inputs[0].value,inputs[1].value,inputs[2].value,inputs[3].value,inputs[4].value);

// *     let card = document.createElement("div");
// *     card.classList.add("card");

// *     let profile = document.createElement("div");
// *     profile.classList.add("profile");


// *     card.appendChild(profile);
// *     console.log(card);

// *     let img = document.createElement("img");
// *     img.setAttribute("src",inputs[0].value);

// *     let h3 = document.createElement("h3");
// *     h3.textContent = inputs[1].value;
//  *    let h5 = document.createElement("h5");
// *     h5.textContent = inputs[2].value;
// *     let p = document.createElement("p");
// *     p.textContent = inputs[3].value;


// *     profile.appendChild(img);
// *     card.appendChild(profile);

// *     card.appendChild(h3);
// *     card.appendChild(h5);
// *     card.appendChild(p);

// *     main.appendChild(card);


//  *    inputs.forEach(function(input){
// *         if(input.value !== "submit" )
// *         input.vale = "";
// *     });
// * });

//--------------------------------------------------------------------

// ? mouseover

// * let abcd = document.querySelector("#abcd");

// * abcd.addEventListener("mouseover",function(){
// *     abcd.style.backgroundColor = "yellow";
// * });

// * abcd.addEventListener("mouseout",function(){
// *     abcd.style.backgroundColor = "red";
// * });

// * window.addEventListener("mousemove",function(details){
// *     abcd.style.top = details.clientY +"px";
// *     abcd.style.left = details.clientX +"px";
// * });

//to study self, keyUp

//--------------------------------------------------------------------

// ? EVENT BUBBLING
// ? BUTTON PE CLICK KRNE PAR BHI ALERT AAYEGA
// ! jispe event aayega agar uspar listner nahi hua toh humaara event uske parent par listenr dhundega aur aisa karte karte upar ki taraf move krega

// * document.querySelector("#nav").addEventListener ("click",function(){
// *     alert("clicked");
// * });

// * let ul = document.querySelector("ul");
// * ul.addEventListener("click",function(details){
// *     details.target.style.textDecoration = "line-through";
// * }) 

// * let ul = document.querySelector("ul");

// * ul.addEventListener("click",function(details){
// *     details.target.classList.toggle("lt");
// * });

// ?EVENT CAPTURING

// * let a = document.querySelector(".a");
// * let b = document.querySelector(".b");
// * let c = document.querySelector(".c");
// * let btn = document.querySelector("button");

// * btn.addEventListener("click", function () {
// *     console.log("button clicked");
// * });


// * c.addEventListener("click", function () {
// *     console.log("c clicked");
// * },true);

// * b.addEventListener("click", function () {
// *     console.log("b clicked");
// * });
// * a.addEventListener("click", function () {
// *     console.log("a clicked")
       
// * },true);


// ! JAB BHI AAP CLICK KRTE HO YA KOI BHI EVENT RAISE KRTE HO TOH AAPKA JO EVENT FLOW DO PHASES MEIN CHALTA HAI:
// !PHASE 1: EVENT TOP LEVEL ELEMENT SE NEECHE KI TARAF AAYEGA
// !PHASE 2: EVENT RAISED ELEMENT SE PARENT KI TARAF JAAYEGA
// !AUR PEHLE PHASE 1 HOTI HAI

//=====================================================

// todo: live character counter

let inp = document.querySelector("input");

let span = document.querySelector("span");

inp.addEventListener("input",function(){
  let left = 20 - inp.value.length;
  if(left < 0){
    span.textContent = left;
    span.style.color = "red";
  }
  else{
    inp
  }
//    span.textContent = 20 - inp.value.length;

})