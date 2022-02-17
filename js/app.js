// GET THE VALUES OF INPUT FIELDS
function getValueOf(id) {
  var field = document.getElementById(id + "-field");
  var fieldValue = field.value;
  return fieldValue;
}

// UPDATE VARIOUS AMOUNTES IN THE SITE USING FUNCTION
function updateAmounts(id, byAmouny, isAdd) {
  var toUpdate = document.getElementById(id);
  if (isAdd == true) {
    toUpdate.innerText = parseFloat(toUpdate.innerText) + byAmouny;
  } else {
    toUpdate.innerText = parseFloat(toUpdate.innerText) - byAmouny;
  }
}

// CLEARING INPUT VALUES
function clearInputFields(id) {
  document.getElementById(id + "-field").value = "";
}

// FUNCTION TO CHECK EITHER IT'S STRING OR NUMBER
function isNumber(n) {
  return !isNaN(parseFloat(n)) && !isNaN(n - 0);
}

// EVENT HANDALER FOR CALCULATE BUTTON
var calculateButton = document.getElementById("calculateBtn");
calculateButton.addEventListener("click", function () {
  var incomeInput = getValueOf("income");
  var foodInput = getValueOf("food");
  var rentInput = getValueOf("rent");
  var clothesInput = getValueOf("clothes");

  if (isNumber(incomeInput) == false) {
    alert("Please enter a number in income field");
  } else if (isNumber(foodInput) == false) {
    alert("Please enter a number in food field");
  } else if (isNumber(rentInput) == false) {
    alert("Please enter a number in rent field");
  } else if (isNumber(clothesInput) == false) {
    alert("Please enter a number in clothes field");
  } else {
    var totalExpenses =
      parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(clothesInput);
    updateAmounts("total-expenses", totalExpenses, true);

    var balance = parseFloat(incomeInput) - totalExpenses;
    updateAmounts("balance", balance, true);

    clearInputFields("food");
    clearInputFields("rent");
    clearInputFields("clothes");
  }
});

// EVENT HANDALER FOR SAVE BUTTON
var saveButton = document.getElementById("save-button");
saveButton.addEventListener("click", function () {
  var incomeInput = getValueOf("income");
  var savingPersentage = getValueOf("save");
  var totalSavingAmount =
    (parseFloat(incomeInput) / 100) * parseFloat(savingPersentage);

  updateAmounts("saving-amount", totalSavingAmount, true);

  var balance = document.getElementById("balance");
  var saveAmount = document.getElementById("saving-amount");
  var remainingBalance = document.getElementById("reamaining-balance");

  remainingBalance.innerText =
    parseFloat(balance.innerText) - parseFloat(saveAmount.innerText);

  clearInputFields("save");
  clearInputFields("income");
});
