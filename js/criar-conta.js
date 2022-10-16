window.addEventListener("load", () => {
  const submitButton = document.querySelector("#submitButton");
  submitButton.addEventListener("click", validarFormulario);
});

const validarFormulario = (evt) => {
  evt.preventDefault();
  const senha = document.querySelector("#pass");
  const senhaConfirm = document.querySelector("#passConfirm");

  if (!!senha.value && !!senhaConfirm.value) {
    const senhaNaoConfirmado = document.querySelector("#warningConfirmPass");
 
    if (senha.value !== senhaConfirm.value) {


      senhaNaoConfirmado.style.display = "block";
    } else {
      senhaNaoConfirmado.style.display = "none";
      window.location.assign("/index.html")
    }
  }
};
