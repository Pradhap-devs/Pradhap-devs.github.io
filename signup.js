let form=document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let useremail=document.getElementById("useremail").value

    let username=document.getElementById("username").value

    let userpass=document.getElementById("userpass").value
    console.log(username,useremail,userpass)

    localStorage.setItem("signupName",username)
    localStorage.setItem("signuppassword",userpass)
    localStorage.setItem("signupEmail",useremail)
    
    alert("signup done sussesfully")
    open("login.html")


})
