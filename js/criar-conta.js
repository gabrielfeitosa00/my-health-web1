import { createUser } from "./auth.js";
import { createUserDB } from "./crud-user.js";
window.addEventListener("load", async () => {
  const submitButton = document.querySelector("#submitButton");
  submitButton.addEventListener("click", submitCreateAccount);
});

const validarFormulario = ({ senha, senhaConfirm }) => {
  if (!!senha && !!senhaConfirm) {
    const senhaNaoConfirmado = document.querySelector("#warningConfirmPass");

    if (senha !== senhaConfirm) {
      senhaNaoConfirmado.style.display = "block";
    } else {
      senhaNaoConfirmado.style.display = "none";
    }
  }
};

const submitCreateAccount = async (evt) => {
  try {
    evt.preventDefault();
    const name = document.querySelector("#fullName").value;
    console.log(name);
    const sex = getSexValue();
    console.log(sex);
    const birthday = document.querySelector("#birthDate").value;
    console.log(birthday);
    const email = document.querySelector("#userMail").value;
    const senha = document.querySelector("#pass").value;
    const senhaConfirm = document.querySelector("#passConfirm").value;
    validarFormulario({ senha, senhaConfirm });
    const id = await createUser(email, senha);
    await createUserDB({ name, sex, birthday, email, id });
    window.location.assign("/index.html");
  } catch (error) {
    alert("Error creating user")
  }

};

const getSexValue = () => {
  const sexInputs = document.querySelectorAll('[name="sexo"]');
  for (const sex of sexInputs) {
    if (sex.checked) {
      return sex.value;
    }
  }
};
