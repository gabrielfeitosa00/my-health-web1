import { login } from "./auth.js";
window.addEventListener("load", () => {
  const button = document.querySelector("#login-button");
  button.addEventListener("click", submitLoginAccount);
});

const submitLoginAccount = async (evt) => {
  evt.preventDefault();
  const email = document.querySelector("#userMail").value;
  const senha = document.querySelector("#pass").value;
  await login(email, senha);
};
