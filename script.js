//inputs
let firstname = document.querySelector("#firstname")
let lastname = document.querySelector("#lastname")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
//alerts
let fnlrt = document.querySelector("#fn-alert")
console.log(fnlrt)
firstname.addEventListener("blur",()=>{
    if(firstname.value==""){
        fnlrt.classList.remove("alertoff")
        fnlrt.classList.add("alerton")
    }
})