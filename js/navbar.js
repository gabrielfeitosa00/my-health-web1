window.addEventListener("load", () => {
  const navbar = document.querySelector(".nav-bar, .nav-bar-ligher");
  console.log(navbar.id);
  if (navbar.id === "home") {
    const buttonDiv = document.createElement("div");
    buttonDiv.className = "nav-bar-button-container";
    const button = document.createElement("button");
    button.className = "neutral-button";
    button.textContent = "Já tenho conta";
    button.addEventListener("click",()=>{
      window.location.assign("/entrar.html")
    })
    buttonDiv.appendChild(button);
    navbar.appendChild(buttonDiv);
  }

  if (navbar.id === "loged") {
    const buttonDiv = document.createElement("div");
    buttonDiv.className = "nav-bar-button-container";
    const button = document.createElement("button");
    button.className = "neutral-button";
    button.textContent = "Minhas Vacinas";
    button.addEventListener("click",()=>{
      window.location.assign("/home.html")
    })
    const button1 = document.createElement("button");
    button1.className = "neutral-button";
    button1.textContent = "Logout";
    button1.addEventListener("click",()=>{
      window.location.assign("/index.html")
    })
    buttonDiv.appendChild(button);
    buttonDiv.appendChild(button1);
    navbar.appendChild(buttonDiv);
  }
});
