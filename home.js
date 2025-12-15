

let user = localStorage.getItem("signupName")

console.log(user)

let h2 = document.createElement("h2")
h2.innerText = user

let right = document.querySelector(".right")
right.prepend(h2)



let getData = async ()=>{
    try{
        
        let res =  await fetch("https://api.github.com/users")
        let data = await res.json()
        // console.log(data)
        user=data;
        diplayUser(data)      
    }
    catch(err)
    {
        console.log(err)
    }
}

getData()


let diplayUser =(data)=>{

    // console.log("i am display function")
    // console.log(data)

    let main = document.querySelector("main")
     main.innerText="";

    data.map((ele)=>{
        // console.log(ele)

        let div = document.createElement("div")
        div.classList.add("card")

        div.innerHTML = ` <img src= ${ele.avatar_url} > <h2> ${ele.login} </h2>`

        main.append(div)
    })
}   


let logout = document.querySelector("button")

logout.addEventListener("click",()=>{

    open('signup.html')
})

let search=document.querySelector("input")
search.addEventListener("input",(e)=>{
   // console.log(e.target.value)
    checkUsers(e.target.value)
})
let checkUsers=(data)=>{
   // console.log(data);

    let x=user.filter((e)=>{
        return e.login.toLowerCase().includes(data.toLowerCase());
    })

    diplayUser(x)



}
