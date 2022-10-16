import mockVaccine from "./mock-data.js";
window.addEventListener("load", () => {
  loadVaccines();
});
const doseDictionary = {
    "dose-1":"1a. dose",
    "dose-2":"2a. dose",
    "dose-3":"3a. dose",
    "reforco": "Reforço",
    "dose-unica": "Dose única"
}
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
  vaccineImg.src = "../resources/image-comprovante.png";
  vaccineImg.alt = "vaccine image";
  cardDiv.appendChild(vaccineImg);
  const cardNextContainer = document.createElement("div");
  cardNextContainer.className = "vaccine-next";
  const cardNextSpan = document.createElement("span");
  cardNextSpan.textContent = !!vaccineObj["prox-data"]
    ? `Próxima dose em: ${new Date(
        vaccineObj["prox-data"]
      ).toLocaleDateString()}`
    : "Não há próxima dose";
  cardNextContainer.appendChild(cardNextSpan);
  cardDiv.appendChild(cardNextContainer);
  cardDiv.addEventListener("click", () => {
    window.location.assign(`/editar-vacina.html?id=${vaccineObj.id}`);
  });
  return cardDiv;
};

const loadVaccines = () => {
  const cardContainer = document.querySelector(".card-container");
  console.log(cardContainer);
  for (const vaccine of mockVaccine) {
    let card = createVaccineCard(vaccine);
    cardContainer.appendChild(card);
  }
};

// const redirectToEdit = (id) => {
//   window.location.assign(`/editar-vacina.html?id=${id}`);
// };
