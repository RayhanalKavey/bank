"use strict";
//-----------
//Get element
//-----------
//input amount
const depositeAmount = document.getElementById("deposite-amount");
const withdrawAmount = document.getElementById("withdraw-amount");
//balance
const calculatedBalance = document.getElementById("calculated-balance");
//input field
const depositeInputField = document.getElementById("deposite-input-field");
const withdrawInputField = document.getElementById("withdraw-input-field");
// btn
const btnDeposite = document.getElementById("deposite-btn");
const btnWithdraw = document.getElementById("withdraw-btn");

//--------------
//Event listener
//--------------
btnDeposite.addEventListener("click", function () {
  //Add to deposite amount
  const newDepositeAmount = parseFloat(depositeInputField.value);
  const previousDepositeAmont = parseFloat(depositeAmount.innerText);
  const depositeTotal = previousDepositeAmont + newDepositeAmount;
  depositeAmount.innerText = depositeTotal;
  depositeInputField.value = "";
  //Add to balance
  const previousBalamce = parseFloat(calculatedBalance.innerText);
  const balanceTotal = previousBalamce + newDepositeAmount;
  calculatedBalance.innerText = balanceTotal;
  // if (
  //   typeof Number(depositeInputField.value) !== "number" ||
  //   typeof Number(withdrawInputField.value) !== "number"
  // ) {
  //   alert("Please input valid amound");
  // }
  // console.log(depositeInputField.value);
  // console.log(withdrawInputField.value);
  // console.log(typeof depositeAmount);
});
console.log();
