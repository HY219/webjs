//로컬 스토리지를 사용한 로그인
//두 번 입력해야하는 이슈
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input:first-child");
const greeting = document.querySelector("#greeting");
const logoutButton = document.querySelector("#logout-button");

const HIDDEN_CLASSNAME = "hidden";

const userNick = localStorage.getItem("username");

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem("username", username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const userNick = localStorage.getItem("username");
  greeting.innerText = `Hello ${userNick}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  logoutButton.classList.remove(HIDDEN_CLASSNAME);
}

if (userNick !== null) {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const userNick = localStorage.getItem("username");
  greeting.innerText = `Hello ${userNick}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  logoutButton.classList.remove(HIDDEN_CLASSNAME);
} else {
  loginForm.addEventListener("submit", onLoginSubmit);
}

function onLogoutSubmit(event) {
  event.preventDefault();
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  greeting.classList.add(HIDDEN_CLASSNAME);
  logoutButton.classList.add(HIDDEN_CLASSNAME);
  localStorage.removeItem("username");
}

logoutButton.addEventListener("click", onLogoutSubmit);
