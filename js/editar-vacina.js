import { getVaccineById } from "./crud-vacina.js";
window.addEventListener("load", () => {
  const deleteButton = document.querySelector("#excluir");

  const modalButtons = document.querySelectorAll(".modal-button");

  const saveButton = document.querySelector("#save-button");

  deleteButton.addEventListener("click", openModal);
  saveButton.addEventListener("click", (evt) => {
    evt.preventDefault();
    window.location.assign("/home.html");
  });
  window.addEventListener("click", closeModalWindow);
  modalButtons.forEach((button) => {
    button.addEventListener("click", closeModal);
  });
  loadSingleVaccine();
});
let vaccineId = null
let file = null
let filePath = null
const openModal = () => {
  const modal = document.querySelector(".modal");

  modal.style.display = "block";
};

const closeModal = () => {
  const modal = document.querySelector(".modal");
  modal.style.display = "none";
};

const closeModalWindow = (evt) => {
  const modal = document.querySelector(".modal");
  if (evt.target === modal) modal.style.display = "none";
};

const loadSingleVaccine = async () => {
  const queryString = new URLSearchParams(document.location.search);

  vaccineId = queryString.get("id")
  const vaccine = await getVaccineById(vaccineId)
  if (!vaccineId||!vaccine) {
    window.location.assign("/home.html");
  }

 
  console.log(vaccine);
  populateInputs(vaccine);

};

const populateInputs = (vaccine) => {
  const vaccineDate = document.querySelector("#vaccine-date");
  vaccineDate.value = vaccine.data().data;
  const vaccineTitle = document.querySelector("#vaccine-title");
  vaccineTitle.value = vaccine.data().name;
  const dose = document.querySelector(`#${vaccine.data().dose}`);
  dose.checked = true;
  filePath = vaccine.data().filePath
  const img = document.querySelector("#comprovante")
  img.src = vaccine.data().url
  img.style.display = "block"
  if (!!vaccine.data().proxData) {
    const vaccineDateProx = document.querySelector("#proxData");
    vaccineDateProx.value = vaccine.data().proxData;
  }
};

const imgPreview = (event) =>{
  file = event.target.files[0]
  const img = document.querySelector("#comprovante")
  img.src = URL.createObjectURL(file)
  img.style.display = "block"
}
