//inputs
let firstname = document.querySelector("#firstname")
let lastname = document.querySelector("#lastname")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
//alerts
let fnlrt = document.querySelector("#fn-alert")
let lnlrt = document.querySelector("#ln-alert")
let ealrt = document.querySelector("#ea-alert")
let pwlrt = document.querySelector("#pw-alert")
//events
firstname.addEventListener("blur",()=>{
    if(firstname.value==""){
        fnlrt.classList.remove("alertoff")
        fnlrt.classList.add("alerton")
        firstname.setAttribute("placeholder","")
        firstname.classList.add("wrong")
    }else{
        fnlrt.classList.remove("alerton")
        fnlrt.classList.add("alertoff")
        firstname.setAttribute("placeholder","First Name")
        firstname.classList.remove("wrong")
    }
})
lastname.addEventListener("blur",()=>{
    if(lastname.value==""){
        lnlrt.classList.remove("alertoff")
        lnlrt.classList.add("alerton")
        lastname.setAttribute("placeholder","")
        lastname.classList.add("wrong")
    }else{
        lnlrt.classList.remove("alerton")
        lnlrt.classList.add("alertoff")
        lastname.setAttribute("placeholder","Last Name")
        lastname.classList.remove("wrong")
    }
})
email.addEventListener("blur",()=>{
    if(email.value==""){
        ealrt.classList.remove("alertoff")
        ealrt.classList.add("alerton")
        email.setAttribute("placeholder","email@example/com")
        email.classList.add("wrong")
    }else{
        ealrt.classList.remove("alerton")
        ealrt.classList.add("alertoff")
        email.setAttribute("placeholder","Email")
        email.classList.remove("wrong")
    }
})
password.addEventListener("blur",()=>{
    if(password.value==""){
        pwlrt.classList.remove("alertoff")
        pwlrt.classList.add("alerton")
        password.setAttribute("placeholder","")
        password.classList.add("wrong")
    }
    else{
        pwlrt.classList.remove("alerton")
        pwlrt.classList.add("alertoff")
        password.setAttribute("placeholder","Password")
        password.classList.remove("wrong")
    }
})