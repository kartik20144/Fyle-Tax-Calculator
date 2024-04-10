const grossIncome = document.getElementById("gross-income").value;
const extraIncome = document.getElementById("extra-income").value;
const deductions = document.getElementById("deduction-income").value;
const submit = document.querySelector("#submit");
const rate = document.querySelector("#select-age").value;
const form = document.querySelector("form")

const cancelButton = document.getElementById("cancel");
const dialog = document.getElementById("favDialog");

// console.log(rate);
// submit.addEventListener("click", () => {
//     setTimeout(() => {
//         document.location.reload();
//     })
// })

form.addEventListener("submit", (e) => {
    const grossIncome = document.getElementById("gross-income").value;
const extraIncome = document.getElementById("extra-income").value;
const deductions = document.getElementById("deduction-income").value;
const submit = document.querySelector("#submit");
const rate = document.querySelector("#select-age").value;






    e.preventDefault();
    const netIncome = Number(grossIncome) + Number(extraIncome) - Number(deductions);
    
    let tax = 0;
    if(netIncome <= 800000){
        tax=0;
    }
    else{
        tax= (netIncome * rate )/100;
    }
   
document.getElementById("ans").value=netIncome-tax;
    dialog.showModal()
})

cancelButton.addEventListener("click", () => {
    dialog.close("animalNotChosen");
   
  });