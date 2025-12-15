let form=document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let loginemail=document.getElementById("useremail").value
    let loginpass=document.getElementById("userpass").value
    //console.log(loginemail,loginpass)
    
    let signupemail=localStorage.getItem("signupEmail")
    let signuppassword=localStorage.getItem("signuppassword")
    //console.log(signupemail,signuppassword)

    if(loginemail==signupemail && loginpass!=signuppassword)
    {
       alert("invalid password") 
    }
   
    
    else if(loginemail!=signupemail && loginpass==signuppassword)
    {
       alert("invalid Email") 
    }
    else if(loginemail!=signupemail && loginpass!=signuppassword)
    {
       alert("invalid Email&password") 
    }
    else{
        alert("login susessfully")
        open("./home.html")
    }



})