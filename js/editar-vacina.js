import { deleteVaccine, getVaccineById, updateVaccine } from "./crud-vacina.js";
import { deleteFile, upload } from "./storage.js";
window.addEventListener("load", async () => {
  const queryString = new URLSearchParams(document.location.search);

  vaccineId = queryString.get("id");
  if (!vaccineId) {
    window.location.assign("/home.html");
  }
  await loadSingleVaccine();
  const fileButton = document.querySelector('[name="fileUp"]');
  fileButton.addEventListener("change", imgPreview);

  const deleteButton = document.querySelector("#excluir");

  const confirmExcluir = document.querySelector("#confirmExcluir");
  const cancelExcluir = document.querySelector("#cancelExcluir");

  const saveButton = document.querySelector("#save-button");

  deleteButton.addEventListener("click", openModal);
  saveButton.addEventListener("click", submitVaccine);
  window.addEventListener("click", closeModalWindow);
  cancelExcluir.addEventListener("click", closeModal);
  confirmExcluir.addEventListener("click", handleDeleteVaccine);
});
let vaccineId = null;
let file = null
let fileUrlGlobal = null;
let filePathGlobal = null;
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
  const vaccine = await getVaccineById(vaccineId);
  console.log()
  if (!vaccineId || !vaccine.data()) {
    window.location.assign("/home.html");
  }

 
  populateInputs(vaccine);
};

const submitVaccine = async (evt) => {
  evt.preventDefault();
  const saveButton = document.querySelector("#save-button");
  saveButton.disabled = true;
  try {
    if (file) {
      const { url, filePath } = await uploadFile(file);
      const { data, name, dose, proxData } = getVaccineValues();
      await updateVaccine(vaccineId, {
        data,
        dose,
        name,
        proxData,
        url,
        filePath,
      });
      window.location.assign("/home.html");
    } else {
      const { data, name, dose, proxData } = getVaccineValues();
      await updateVaccine(vaccineId, {
        data,
        dose,
        name,
        proxData,
        url:fileUrlGlobal,
        filePath:filePathGlobal
      });
      window.location.assign("/home.html");
    }
  } catch (error) {
    alert(error.message);
  }
  saveButton.disabled = false;
};

const getVaccineValues = () => {
  const data = document.querySelector("#date").value;
  const name = document.querySelector("#vaccineName").value;
  const dose = getDoseValue();
  const proxData = document.querySelector("#proxData").value;

  return { data, name, dose, proxData };
};

const getDoseValue = () => {
  const doseInputs = document.querySelectorAll('[name="dose"]');
  for (const dose of doseInputs) {
    if (dose.checked) {
      return dose.value;
    }
  }
};

const uploadFile = async () => {
  try {
    return await upload(file);
  } catch (error) {
    alert(error.message);
  }
};

const imgPreview = (event) => {
  file = event.target.files[0];
  const img = document.querySelector("#comprovante");
  img.src = URL.createObjectURL(file);
  img.style.display = "block";
};

const populateInputs = (vaccine) => {
  const vaccineDate = document.querySelector("#date");
  vaccineDate.value = vaccine.data().data;
  const vaccineTitle = document.querySelector("#vaccineName");
  console.log(vaccineTitle);
  vaccineTitle.value = vaccine.data().name;
  const dose = document.querySelector(`#${vaccine.data().dose}`);
  dose.checked = true;
  filePathGlobal = vaccine.data().filePath;
  fileUrlGlobal = vaccine.data().url;
  const img = document.querySelector("#comprovante");
  img.src = vaccine.data().url;
  img.style.display = "block";
  if (!!vaccine.data().proxData) {
    const vaccineDateProx = document.querySelector("#proxData");
    vaccineDateProx.value = vaccine.data().proxData;
  }
};

const handleDeleteVaccine = async () => {
  try {
    await deleteFile(filePathGlobal);
    await deleteVaccine(vaccineId);
    closeModal();
    window.location.assign("/home.html");
  } catch (error) {
    alert(error.message);
  }
};
