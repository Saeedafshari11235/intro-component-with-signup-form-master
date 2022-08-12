let firstname = document.querySelector("#firstname")
let fnlrt = document.querySelector("#fn-alert")
console.log(fnlrt)
firstname.addEventListener("blur",()=>{
    if(firstname.value==""){
        fnlrt.setAttribute("display","block")
    }
})