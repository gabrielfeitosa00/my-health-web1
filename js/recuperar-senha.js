window.addEventListener("load",()=>{
    const button = document.querySelector("#recover-pass")
    button.addEventListener("click",(evt)=>{
        evt.preventDefault()
        window.location.assign("/index.html")
    })
})