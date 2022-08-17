"use strict";
//-----------
//Get element
//-----------
//input amount
const depositAmount = document.getElementById("deposit-amount");
const withdrawAmount = document.getElementById("withdraw-amount");
//balance
const calculatedBalance = document.getElementById("calculated-balance");
//input field
const depositInputField = document.getElementById("deposit-input-field");
const withdrawInputField = document.getElementById("withdraw-input-field");
// btn
const btnDeposit = document.getElementById("deposit-btn");
const btnWithdraw = document.getElementById("withdraw-btn");

//--------------
//Event listener
//--------------
////////////////In deposit button
btnDeposit.addEventListener("click", function () {
  const newDepositeAmount = parseFloat(depositInputField.value);
  const previousDepositeAmont = parseFloat(depositAmount.innerText);
  //clear input field
  depositInputField.value = "";
  //For error handling (if the the provided value is not a number)
  if (isNaN(newDepositeAmount)) {
    alert("Please provide a valid amount");
    return;
  }
  //Add to balance
  const previousBalamce = parseFloat(calculatedBalance.innerText);
  const balanceTotal = previousBalamce + newDepositeAmount;
  calculatedBalance.innerText = balanceTotal;
  //Add to deposit amount
  const depositeTotal = previousDepositeAmont + newDepositeAmount;
  depositAmount.innerText = depositeTotal;
});
