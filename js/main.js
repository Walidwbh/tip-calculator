const bill = document.querySelector("input[id=bill]");
const people = document.querySelector("input[id=poeple]");
const tipAmount = document.getElementById("tip-amount");
const totalAmount = document.getElementById("total-amount");
const tips = document.querySelectorAll(".tip");
const tipPerPerson = document.getElementById("tip-person");
const tipTotal = document.getElementById("tip-total");
const customTip = document.getElementById("custom");
const reset = document.getElementById("reset");
// console.log(tips)
// we make the event listener
bill.addEventListener("input",billFunction);
people.addEventListener("input",poepleFunction);
tips.forEach((t)=>{
    t.addEventListener("click",tipsFunction)
});
customTip.addEventListener("input",customTipFunction);
reset.addEventListener("click",resetFunction);
//we define the values
let billValue = 0.0;
let poepleValue = 0;
let tip = 0;
// functions
function billFunction(){
    billValue = parseFloat(bill.value);
    calculateTip();
}
function poepleFunction(){
    poepleValue = parseFloat(people.value);
    if(people.value<1){
        // console.log(people.nextElementSibling)
        // people.classList.add("error");
    }else{
        // people.classList.remove("error");
    }
    calculateTip();
}
function tipsFunction(event){
    customTip.value = "";
    tips.forEach((t)=>{
        t.classList.remove("selected");
        if(event.target.innerHTML == t.innerHTML){
            event.target.classList.add("selected");
            tip = event.target.dataset.value / 100;
        }
    });
    calculateTip();
}
function customTipFunction(){
    tip = customTip.value / 100;
    tips.forEach((t)=>{
        t.classList.remove("selected");
    });
    calculateTip();
}

function resetFunction(){
    bill.value ="";
    people.value="";
    tips.forEach((t)=>{
        t.classList.remove("selected");
    })
    customTip.value = "";
    tipPerPerson.innerHTML = "0.00"
    tipTotal.innerHTML = "0.00"
}
function calculateTip(){
    if(poepleValue>=1){
        let tipAmount = (billValue * tip)/ poepleValue;
        let totalAmount = (billValue / poepleValue) + tipAmount;
        tipPerPerson.innerHTML = tipAmount.toFixed(2);
        tipTotal.innerHTML = totalAmount.toFixed(2);
    }
}