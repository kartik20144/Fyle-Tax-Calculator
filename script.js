const grossIncome = document.getElementById("gross-income").value;
const extraIncome = document.getElementById("extra-income").value;
const deductions = document.getElementById("deduction-income").value;
const submit = document.querySelector("#submit");
const rate = document.querySelector("#select-age").value;
const form = document.querySelector("form")

const cancelButton = document.getElementById("cancel");
const dialog = document.getElementById("favDialog");

const numberField = document.querySelectorAll(".numberField");

const selectField = document.querySelector("#select-age");

selectField.addEventListener("input",()=>{
    selectField.nextElementSibling.style.display=  "none";
})

numberField.forEach(field => {

    const errorIcon = field.nextElementSibling;
    const tooltip = errorIcon.nextElementSibling;

    errorIcon.addEventListener('mouseover', () => {
        tooltip.style.display = 'block'; 
    });

    errorIcon.addEventListener('mouseout', () => {
        tooltip.style.display = 'none'; 
    });

    field.addEventListener("input", () => {
        const value = field.value.trim();
            const isValid = isValidNumber(value);
            if(value ==''){
                field.nextElementSibling.style.display = 'none'; 
            }
        if(isValid == false){
            field.nextElementSibling.style.display = "inline-block";


        }else {
            field.nextElementSibling.style.display = 'none'; 
        }
    })
})


function isValidNumber(value){
    if(value === "") return true;
    return isNaN(value) === false && value !== '';
}
// console.log(rate);
// submit.addEventListener("click", () => {
//     setTimeout(() => {
//         document.location.reload();
//     })
// })

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const grossIncome = document.getElementById("gross-income").value;
const extraIncome = document.getElementById("extra-income").value;
const deductions = document.getElementById("deduction-income").value;
const submit = document.querySelector("#submit");
const selectField = document.querySelector("#select-age");

const rate = selectField.value;

const errorIcon = selectField.nextElementSibling;
    const tooltip = errorIcon.nextElementSibling;

if(rate===''){
    errorIcon.style.display = 'inline-block'; // Show error icon
    // tooltip.style.display = 'block'; // Show tooltip
    return;
} else {
    errorIcon.style.display = 'none'; // Hide error icon
    tooltip.style.display = 'none'; // Hide tooltip
}



    
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