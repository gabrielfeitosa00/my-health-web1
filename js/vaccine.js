import { getAllVaccines, getVaccineByName } from "./crud-vacina.js";
window.addEventListener("load", async () => {
  const button = document.querySelector("#new-vaccine");
  button.addEventListener("click", () => {
    window.location.assign("/nova-vacina.html");
  });
  await getAllVaccines((results) => {
    vaccineArray = []
    results.forEach((documento) => {
      vaccineArray.push({
        id: documento.id,
        name: documento.data().name,
        dose: documento.data().dose,
        data: documento.data().data,
        proxData: documento.data().proxData,
        url: documento.data().url,
        filePath: documento.data().filePath,
      });
    });
    loadVaccines(vaccineArray);
  });

  const searchInput = document.querySelector("#searchVaccine");
  searchInput.addEventListener("keyup", () => {
    const value = searchInput.value.trim();
    getVaccineByName(value, (results) => {
      vaccineArray = []
      results.forEach((documento) => {
        vaccineArray.push({
          id: documento.id,
          name: documento.data().name,
          dose: documento.data().dose,
          data: documento.data().data,
          proxData: documento.data().proxData,
          url: documento.data().url,
          filePath: documento.data().filePath,
        });
      });
      loadVaccines(vaccineArray);
    });
  });
});
let vaccineArray = [];
const doseDictionary = {
  "dose-1": "1a. dose",
  "dose-2": "2a. dose",
  "dose-3": "3a. dose",
  reforco: "Reforço",
  "dose-unica": "Dose única",
};
const createVaccineCard = (vaccineObj) => {
  const cardDiv = document.createElement("div");
  cardDiv.className = "card";

  const cardTitle = document.createElement("span");
  cardTitle.className = "vaccine-title";
  cardTitle.textContent = `${vaccineObj.name}`;
  cardDiv.appendChild(cardTitle);
  const cardDose = document.createElement("span");
  cardDose.className = "vaccine-dose";
  cardDose.textContent = `${doseDictionary[vaccineObj.dose]}`;
  cardDiv.appendChild(cardDose);
  const cardDate = document.createElement("span");
  cardDate.className = "vaccine-date";
  cardDate.textContent = `${new Date(vaccineObj.data).toLocaleDateString()}`;
  cardDiv.appendChild(cardDate);
  const vaccineImg = document.createElement("img");
  vaccineImg.src = vaccineObj.url;
  vaccineImg.alt = "vaccine image";
  cardDiv.appendChild(vaccineImg);
  const cardNextContainer = document.createElement("div");
  cardNextContainer.className = "vaccine-next";
  const cardNextSpan = document.createElement("span");
  cardNextSpan.textContent = !!vaccineObj["proxData"]
    ? `Próxima dose em: ${new Date(
        vaccineObj["proxData"]
      ).toLocaleDateString()}`
    : "Não há próxima dose";
  cardNextContainer.appendChild(cardNextSpan);
  cardDiv.appendChild(cardNextContainer);
  cardDiv.addEventListener("click", () => {
    window.location.assign(`/editar-vacina.html?id=${vaccineObj.id}`);
  });
  return cardDiv;
};

const loadVaccines = async () => {
  const cardContainer = document.querySelector(".card-container");
  cardContainer.innerHTML = ""
  for (const vaccine of vaccineArray) {
    let card = createVaccineCard(vaccine);
    cardContainer.appendChild(card);
  }
};

// const redirectToEdit = (id) => {
//   window.location.assign(`/editar-vacina.html?id=${id}`);
// };
