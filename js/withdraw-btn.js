"use strict";
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
