window.onload = () => {
  const submitButton = document.querySelector("#submitButton");
  console.log(submitButton);
  submitButton.addEventListener("click", validarFormulario);
};

const validarFormulario = (evt) => {
  evt.preventDefault();
  const senha = document.querySelector("#pass");
  const senhaConfirm = document.querySelector("#passConfirm");

  console.log(senha.value);
  console.log(senhaConfirm.value);
  if (!!senha.value && !!senhaConfirm.value) {
    const senhaNaoConfirmado = document.querySelector("#warningConfirmPass");
    console.log(senhaNaoConfirmado)
    if (senha.value !== senhaConfirm.value) {
      console.log("here");

      senhaNaoConfirmado.style.display = "block";
    } else {
 
      senhaNaoConfirmado.style.display = "none";
    }
  }
};
