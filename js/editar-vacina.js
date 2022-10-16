import mockVaccine from "./mock-data.js";
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

const loadSingleVaccine = () => {
  const queryString = new URLSearchParams(document.location.search);
  const id = queryString.get("id");

  if (!id) {
    window.location.assign("/home.html");
  }

  const vaccine = mockVaccine.filter((item) => item.id === id)[0];
  console.log(vaccine);
  populateInputs(vaccine);
  if (!vaccine) {
    window.location.assign("/home.html");
  }
};

const populateInputs = (vaccine) => {
  const vaccineDate = document.querySelector("#vaccine-date");
  vaccineDate.value = vaccine.data;
  const vaccineTitle = document.querySelector("#vaccine-title");
  vaccineTitle.value = vaccine.name;
  const dose = document.querySelector(`#${vaccine.dose}`);
  dose.checked = true;
  if (!!vaccine["prox-data"]) {
    const vaccineDateProx = document.querySelector("#prox-data");
    vaccineDateProx.value = vaccine["prox-data"];
  }
};
