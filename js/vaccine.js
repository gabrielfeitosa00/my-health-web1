import mockVaccine from "./mock-data.js";
window.addEventListener("load", () => {
  loadVaccines();
});
const createVaccineCard = (vaccineObj) => {
  const cardDiv = document.createElement("div");
  cardDiv.className = "card";

  const cardTitle = document.createElement("span");
  cardTitle.className = "vaccine-title";
  cardTitle.textContent = `${vaccineObj.name}`;
  cardDiv.appendChild(cardTitle);
  const cardDose = document.createElement("span");
  cardDose.className = "vaccine-dose";
  cardDose.textContent = `${vaccineObj.dose}`;
  cardDiv.appendChild(cardDose);
  const cardDate = document.createElement("span");
  cardDose.className = "vaccine-date";
  cardDate.textContent = `${vaccineObj.data}`;
  cardDiv.appendChild(cardDate);
  const vaccineImg = document.createElement("img");
  vaccineImg.src = "../resources/image-comprovante.png";
  vaccineImg.alt = "vaccine image";
  cardDiv.appendChild(vaccineImg);
  const cardNextContainer = document.createElement("div");
  cardNextContainer.className = "vaccine-next";
  const cardNextSpan = document.createElement("span");
  cardNextSpan.textContent = !!vaccineObj["prox-data"]
    ? `Próxima dose em: ${vaccineObj["prox-data"]}`
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
