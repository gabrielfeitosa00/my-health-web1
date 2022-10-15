window.onload = () => {
  const deleteButton = document.querySelector("#excluir");

  const modalButtons = document.querySelectorAll(".modal-button");
  deleteButton.addEventListener("click", openModal);
  window.addEventListener("click", closeModalWindow);
  modalButtons.forEach((button) => {
 
    button.addEventListener("click", closeModal);
  });
};

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
