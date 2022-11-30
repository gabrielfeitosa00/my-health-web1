import { recoverPassword } from './auth.js';
window.addEventListener("load",()=>{
    const button = document.querySelector("#recover-pass")
    button.addEventListener("click",submitResetPass)
})

const submitResetPass = async (evt) => {
    evt.preventDefault();
    const email = document.querySelector("#userMail").value;
    console.log(email)
    await recoverPassword(email);
  };
  