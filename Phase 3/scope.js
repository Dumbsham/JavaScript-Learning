// * function abcd(){
// *     var a = 12;//
// * }

// * console.log(a);

// ? function scope - function ke andr hi use ho skti hai
// ? global scope  - poore code mein kahi bhi use ho skti hai
// ? block scope - {} curly braces mein hi use ho sakti hai

// ? execution context 

/* ? js sabse pehle jaisi hi aapka function dekhta hai sabse pehle js banaata hai execution context,ye ek process hai jo ki 2 different phases mein chalta hai,memory phase and doosre ka naam hai execution phase
 */

// * function abcd() {
// *     var a = 12;
// *     let b = 13;
// *     let c = 14;


// *     //.......

// *     //.......
// * }

//=======================================================================

// ! Lexical Scope vs Dynamic Scope
    // ? js lexical scoping -> ki aap kaha par physically available ho ye poori tareeke se depend karta hai ki aap kya access kr paoge

//======================================================================
// ! CLOSURES HOTE HAIN FUNCTIONS JO KI KISI PARENT KE FUNCTION KE ANDAR HO AUR ANDAR WAALA FUNCTION RETURN HO RHA HO,AND RETURNING FUNCTION USE KARE PARENT FUNCTION KA KOI VARIABLE

// function abcd(){
//     let a = 12;
//     return function defg(){
//         console.log(a);
//     };
// };
// let fnc = abcd();
// fnc();

// ? how these variables are preserved
// ? ye sach hai fnc ke khatam hone pe aapka fnc and uske variables khtm hojaate hain,par jab bhi closure banta hai to aapaka fnc aur uske variables ka ek backlink bnaaya jaata hai aur uska naam hota hai[[environment]]

// * function abcd(){
// *     let a = 12;
// *    return function defg(){
// *        console.log(a);
// *    };
// *};
// *let fnc = abcd();
// *fnc();

function countForMe(){

}