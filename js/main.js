// USER LOGIN / SIGNUP

// HTML VARIABLES
let signInBtn = document.getElementById("sign-in-btn");
let signUpBtn = document.getElementById("sign-up-btn");

let iUsernameInput = document.getElementById("sign-in-username");
let iPasswordInput = document.getElementById("sign-in-password");
let uUsernameInput = document.getElementById("sign-up-username");
let uPasswordInput = document.getElementById("sign-up-password");
let uConfirmInput = document.getElementById("sign-up-confirm");

// SIGN UP BTN CLICKED
signUpBtn.addEventListener("click", signUpHandler);

function signUpHandler() {
  console.log();
}

// SIGN IN BTN CLICKED
signInBtn.addEventListener("click", signInHandler);

function signInHandler() {
  console.log("Sign In Btn Clicked");
}
