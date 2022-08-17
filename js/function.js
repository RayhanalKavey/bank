"use strict";
// Get value from input field
function getInputFieldValueByID(inputFieldID) {
  const inputField = document.getElementById(inputFieldID);
  const value = parseFloat(inputField.value);
  inputField.value = "";
  return value;
}
// Get value from text element
function getElementValueByID(elementID) {
  const inputElement = document.getElementById(elementID);
  const value = parseFloat(inputElement.innerText);
  return value;
}
function setTextElementValueByID(elementID, newValue) {
  const element = document.getElementById(elementID);
  element.innerText = newValue;
}
