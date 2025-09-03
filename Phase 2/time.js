let time = setTimeout(function(){// ? set timeout ek baar chalta hai
    console.log("hello")
}, 5000) // 1000ms = 1s

let tm = setInterval(function(){
    console.log("hey");
},5000);
// ?setinterval baar baar chalta hai

clearTimeout(time);
clearInterval(tm);