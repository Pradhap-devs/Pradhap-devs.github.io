let lav=(data)=>{
    let input=document.querySelector("input")
    input.value+=data;

}
let calculate=()=>{
    let input=document.querySelector("input")
    input.value=eval(input.value);

}
let backspace=()=>{
    let input=document.querySelector("input")
    input.value=input.value.slice(0,-1)

}

let erase=()=>{
    let input=document.querySelector("input")
    input.value=""
    
}