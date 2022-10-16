window.addEventListener("load", () => {
  const saveButton = document.querySelector("#save-button");

  saveButton.addEventListener("click", (evt) => {
    evt.preventDefault();
    window.location.assign("/home.html");
  });
});
