let btnLeft = document.querySelectorAll(".currency-left li")
let btnRight = document.querySelectorAll(".currency-right li")
let inputLeft = document.querySelector(".inputleft")
let inputRight = document.querySelector(".inputright")
let curr1="RUB"
let curr2="USD"


btnLeft.forEach(btn=>{
    btn.addEventListener("click",(e)=>{
        let childBtns=e.target.parentElement.children
        for (let i = 0; i < childBtns.length; i++) {
            childBtns[i].classList.remove("active")
        }
            e.target.classList.add("active")
        curr1=e.target.id
fetch(`https://api.exchangerate.host/latest?base=${curr1}&symbols=${curr2}`)
.then(res=>res.json()).then(data=>{
    let ratesValue=Object.values(data.rates)
    inputRight.value=inputLeft.value*ratesValue

})
    })
})

btnRight.forEach(btn=>{
    btn.addEventListener("click",(e)=>{
        let childBtns=e.target.parentElement.children
        for (let i = 0; i < childBtns.length; i++) {
            childBtns[i].classList.remove("active")
        }
            e.target.classList.add("active")
        curr2=e.target.id
fetch(`https://api.exchangerate.host/latest?base=${curr2}&symbols=${curr1}`)
.then(res=>res.json()).then(data=>{
    // let ratesValue=Object.values(data.rates)
console.log(data)
inputLeft.value=inputRight.value*ratesValue

})
    })
})






inputLeft.addEventListener("keyup",()=>{
    fetch(`https://api.exchangerate.host/latest?base=${curr1}&symbols=${curr2}`)
.then(res=>res.json()).then(data=>{
    let ratesValue=Object.values(data.rates)
inputRight.value=inputLeft.value*ratesValue
})
})






 inputRight.addEventListener("keyup",()=>{
     fetch(`https://api.exchangerate.host/latest?base=${curr2}&symbols=${curr1}`)
 .then(res=>res.json()).then(data=>{
     let ratesValue=Object.values(data.rates)
 inputLeft.value=inputRight.value*ratesValue
 })
 })







