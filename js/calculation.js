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
////////////////In deposite button
btnDeposite.addEventListener("click", function () {
  const newDepositeAmount = parseFloat(depositeInputField.value);
  const previousDepositeAmont = parseFloat(depositeAmount.innerText);
  //clear input field
  depositeInputField.value = "";
  //For error handling (if the the provided value is not a number)
  if (isNaN(newDepositeAmount)) {
    alert("Please provide a valid amount");
    return;
  }
  //Add to balance
  const previousBalamce = parseFloat(calculatedBalance.innerText);
  const balanceTotal = previousBalamce + newDepositeAmount;
  calculatedBalance.innerText = balanceTotal;
  //Add to deposite amount
  const depositeTotal = previousDepositeAmont + newDepositeAmount;
  depositeAmount.innerText = depositeTotal;
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

///////////////In withdraw button
btnWithdraw.addEventListener("click", function () {
  const newWithdrawAmount = parseFloat(withdrawInputField.value);
  const previousWithdrawAmount = parseFloat(withdrawAmount.innerText);
  ///////clear input field
  withdrawInputField.value = "";
  //For error handling (if the the provided value is not a number)
  if (isNaN(newWithdrawAmount)) {
    alert("Please provide a valid amount");
    return;
  }
  ///////deduct from balace
  const previousBalamce = parseFloat(calculatedBalance.innerText);
  //For error handling (if the withdraw amount is bigger than the balance)
  if (newWithdrawAmount > previousBalamce) {
    alert("Not enough money");
    return;
  }
  const balanceTotal = previousBalamce - newWithdrawAmount;
  calculatedBalance.innerText = balanceTotal;
  ////////Add to withdraw balance
  const withdrawTotal = previousWithdrawAmount + newWithdrawAmount;
  withdrawAmount.innerText = withdrawTotal;
});
const f = "12";
console.log(typeof parseFloat(f));
