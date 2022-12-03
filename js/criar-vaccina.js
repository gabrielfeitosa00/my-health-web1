import { createVaccine } from "./crud-vacina.js";
import { upload } from './storage.js';
window.addEventListener("load",  async () => {
  const fileButton = document.querySelector('[name="fileUp"]');
  fileButton.addEventListener("change",imgPreview)
  const saveButton = document.querySelector("#save-button");

  saveButton.addEventListener("click", submitVaccine);


});
let file = null


const submitVaccine = async (evt) =>{
  evt.preventDefault();
  const saveButton = document.querySelector("#save-button");
  saveButton.disabled = true
  try {
    if(!file){
      throw new Error("Comprovante de vacina é obrigatório")
    }
    const {url,filePath} = await uploadFile(file)
    const {data,name,dose,proxData} = getVaccineValues()
    await createVaccine({data,dose,name,proxData,url,filePath})
    window.location.assign("/home.html");
  } catch (error) {
    alert(error.message)
  }
  saveButton.disabled = false
}
const uploadFile = async () =>{
 try {
  return await upload(file)
 } catch (error) {
  alert(error.message)
 }
}

const getDoseValue = () => {
  const doseInputs = document.querySelectorAll('[name="dose"]');
  for (const dose of doseInputs) {
    if (dose.checked) {
      return dose.value;
    }
  
  }
};

const getVaccineValues = () =>{
  const data = document.querySelector("#date").value
  const name =document.querySelector("#vaccineName").value 
  const dose = getDoseValue()
  const proxData = document.querySelector("#proxData").value

  return {data, name, dose, proxData}
}

const imgPreview = (event) =>{
  file = event.target.files[0]
  const img = document.querySelector("#comprovante")
  img.src = URL.createObjectURL(file)
  img.style.display = "block"
}