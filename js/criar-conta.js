import { createUser } from './auth.js';
window.addEventListener("load", async () => {
  const submitButton = document.querySelector("#submitButton");
  submitButton.addEventListener("click", submitCreateAccount);
});

const validarFormulario = ({senha,senhaConfirm}) => {

  if (!!senha && !!senhaConfirm) {
    const senhaNaoConfirmado = document.querySelector("#warningConfirmPass");
 
    if (senha !== senhaConfirm) {


      senhaNaoConfirmado.style.display = "block";
    } else {
      senhaNaoConfirmado.style.display = "none";
      window.location.assign("/index.html")
    }
  }
};

const submitCreateAccount = async (evt) =>{
  evt.preventDefault();
  const name = document.querySelector("#fullName").value
  console.log(name)
  const sex = getSexValue()
  console.log(sex)
  const birth = document.querySelector("#birthDate").value
  console.log(birth)
  const email = document.querySelector('#userMail').value
  const senha = document.querySelector("#pass").value;
  const senhaConfirm = document.querySelector("#passConfirm").value;
  validarFormulario({senha,senhaConfirm})
  await createUser(email,senha)
}

const getSexValue = ()=> {
  const sexInputs = document.querySelectorAll('[name="sexo"]')
  for(const sex of sexInputs){
    if(sex.checked){
      return sex.value
    }
  }
}

