// USER LOGIN / SIGNUP

// HTML VARIABLES
let signInBtn = document.getElementById("sign-in-btn");
let signUpBtn = document.getElementById("sign-up-btn");

let iUsernameInput = document.getElementById("sign-in-username");
let iPasswordInput = document.getElementById("sign-in-password");
let uUsernameInput = document.getElementById("sign-up-username");
let uPasswordInput = document.getElementById("sign-up-password");
let uConfirmInput = document.getElementById("sign-up-confirm");

// GLOBAL VARIABLES
let members = JSON.parse(localStorage.getItem("members")) || [];

// SIGN UP BTN CLICKED
signUpBtn.addEventListener("click", signUpHandler);

function signUpHandler() {
  const username = uUsernameInput.value;
  const password = uPasswordInput.value;
  const confirm = uConfirmInput.value;

  if (!(username && password && confirm)) return alert("Please fill out all required fields");
  if (password != confirm) return alert("Password and Confirm Password do not match");
  if (getMemberByUsername(username) != -1) return alert("Username is already in use");

  members.push({ username: username, password: password });
  alert("Account creation successful");
  save();
}

// SIGN IN BTN CLICKED
signInBtn.addEventListener("click", signInHandler);

function signInHandler() {
  const username = iUsernameInput.value;
  const password = iPasswordInput.value;
  const index = getMemberByUsername(username);

  if (index == -1) return alert("No account found with that username");
  if (members[index].password != password) return alert("Incorrect password");

  alert("Sign in successful");
}

// FUNCTIONS
function save() {
  localStorage.setItem("members", JSON.stringify(members));
}

function getMemberByUsername(username) {
  for (let i = 0; i < members.length; i++) {
    if (members[i].username === username) return i;
  }

  return -1;
}
