window.addEventListener("load", () => {
  const navbar = document.querySelector(".nav-bar, .nav-bar-ligher");
  console.log(navbar.id);
  if (navbar.id === "home") {
    const buttonDiv = document.createElement("div");
    buttonDiv.className = "nav-bar-button-container";
    const button = document.createElement("button");
    button.className = "neutral-button";
    button.textContent = "Já tenho conta";
    buttonDiv.appendChild(button);
    navbar.appendChild(buttonDiv);
  }

  if (navbar.id === "loged") {
    const buttonDiv = document.createElement("div");
    buttonDiv.className = "nav-bar-button-container";
    const button = document.createElement("button");
    button.className = "neutral-button";
    button.textContent = "Minhas Vacinas";
    const button1 = document.createElement("button");
    button1.className = "neutral-button";
    button1.textContent = "Logout";
    buttonDiv.appendChild(button);
    buttonDiv.appendChild(button1);
    navbar.appendChild(buttonDiv);
  }
});
