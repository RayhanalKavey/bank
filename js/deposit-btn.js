"use strict";
/*
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
*/
/*
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
*/
// Click deposite button
document.getElementById("deposit-btn").addEventListener("click", function () {
  const previousDepositAmount = getElementValueByID("deposit-amount");
  const newDepositeAmount = getInputFieldValueByID("deposit-input-field");
  //For error handling (if the the provided value is not a number)
  if (isNaN(newDepositeAmount)) {
    alert("Please provide a valid amount");
    return;
  }
  //Add to deposit amount
  const totalDeposite = previousDepositAmount + newDepositeAmount;
  setTextElementValueByID("deposit-amount", totalDeposite);
  //Add to balance
  const previousBalamce = getElementValueByID("calculated-balance");
  const balanceTotal = previousBalamce + newDepositeAmount;
  setTextElementValueByID("calculated-balance", balanceTotal);
});
