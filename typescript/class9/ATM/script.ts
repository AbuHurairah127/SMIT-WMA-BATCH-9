document.getElementById("btn2")!.addEventListener("click",()=>{
    var username = (document.getElementById("password") as HTMLInputElement).value
    document.getElementById("username-display")!.innerText = username
})


document.getElementById("btn")!.addEventListener("click",()=>{
    (document.getElementById("password") as HTMLInputElement).type = "text"
})