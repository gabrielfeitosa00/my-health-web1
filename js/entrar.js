window.addEventListener("load",()=>{
    const button = document.querySelector("#login-button")
    button.addEventListener("click",(evt)=>{
        evt.preventDefault()
        window.location.assign("/home.html")
    })
})