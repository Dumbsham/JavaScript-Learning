// * let nm = document.querySelector("#name");
// * let form = document.querySelector("form");


// * form.addEventListener("submit",function (details) {
// *     details.preventDefault();
    
// *     if(nm.value.length <= 2){
// *         document.querySelector("#hide").style.display = "initial";
// *     }else{
// *         document.querySelector("#hide").style.display = "none";
// *     }
// * })

// ? required likhdo tag ke andr toh woh uske bina submit nahi hone dega

// * let nm = document.querySelector("#name");
// * let form = document.querySelector("form");

// * form.addEventListener("submit",function(details){
// *     details.preventDefault();
// *     const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\[a-zA-Z]{2,}#/;
// *     let ans = regex.test("a@a.a");
// *     console.log(ans);
// * })

//=======================================================================

// TODO: CREATE AN EMAIL AND PASSWORD VALIDATOR

let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");

form.addEventListener("submit", function(details) {
    details.preventDefault();

    // Hide previous errors on new submission
    document.querySelector("#emailError").parentElement.style.display = "none";
    document.querySelector("#passwordError").parentElement.style.display = "none";

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    let emailans = emailRegex.test(email.value);
    let passwordans = passwordRegex.test(password.value);

    if (!emailans) {
        document.querySelector("#emailError").textContent = "Please enter a valid email address.";
        document.querySelector("#emailError").parentElement.style.display = "initial";
    }

    if (!passwordans) {
        // Corrected from querySelectorAll to querySelector
        document.querySelector("#passwordError").textContent = "Password must be 8+ characters with uppercase, lowercase, number, and special character.";
        document.querySelector("#passwordError").parentElement.style.display = "initial";
    }
});