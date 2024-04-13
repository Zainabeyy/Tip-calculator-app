const tips = document.querySelectorAll('input[name="tip"]');
const reset = document.querySelector("button");
const bill = document.getElementById("bill");
const noPeople = document.getElementById("nop");
const tipAmount = document.getElementById("tipAmount");
const total = document.getElementById("Total");
const error1 = document.getElementById("error1");
const error2 = document.getElementById("error2");
let tipAmountperson = 0;
let totalperson = 0;
let tipValue = 0;
const custom = document.getElementById("custom");
function getTipValue() {
  for (const tip of tips) {
    if (tip.checked && custom.value == "") {
      tipValue = tip.value;
      break; // Exit the loop once a selected radio is found
    } else if (tip.checked && custom.value != "") {
      tip.checked = tip.false;
      tipValue = custom.value;
    } else if (tip.focus && custom.value != "") {
      tipValue = custom.value;
    }
  }
  console.log("Selected tip value:", tipValue);
}
function getTipAmount() {
  tips.forEach((tip) => tip.addEventListener("change", getTipValue));
}
getTipAmount();
function calculator() {
  getTipAmount();
  if (bill.value == 0 && noPeople.value != 0) {
    error1.style.display = "inline";
    bill.style.outline = "2px solid #c40505e7";
  } else if (bill.value != 0 && noPeople.value == 0) {
    error2.style.display = "inline";
    noPeople.style.outline = "2px solid #c40505e7";
  } else if (bill.value == 0 && noPeople.value == 0) {
    error1.style.display = "inline";
    bill.style.outline = "2px solid #c40505e7";
    error2.style.display = "inline";
    noPeople.style.outline = "2px solid #c40505e7";
  } else {
    tipAmountperson = (bill.value * tipValue) / 100 / noPeople.value;
    tipAmountperson = Math.round(tipAmountperson * 100) / 100;
    tipAmount.textContent = tipAmountperson;
    totalperson = bill.value / noPeople.value + tipAmountperson;
    totalperson = Math.round(totalperson * 100) / 100;
    total.textContent = totalperson;
  }
}
reset.addEventListener("click", function () {
  tipAmountperson = 0;
  tipAmount.textContent = 0;
  total.textContent = 0;
  totalperson = 0;
  bill.value = 0;
  noPeople.value = 0;
  for (const tip of tips) {
    if (tip.checked) {
      tipValue = 0;
      tip.checked = tip.false;
    }
  }
  custom.value = "";
  error1.style.display="none";
  bill.style.outline="none";
  error2.style.display="none";
  noPeople.style.outline="none";
});
