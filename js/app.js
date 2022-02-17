// GET THE VALUES OF INPUT FIELDS
function getValueOf(id) {
  var field = document.getElementById(id + "-field");
  var fieldValue = field.value;
  return fieldValue;
}

// UPDATE VARIOUS AMOUNTES IN THE SITE USING FUNCTION
function updateAmounts(id, byAmouny) {
  var toUpdate = document.getElementById(id);
  toUpdate.innerText = byAmouny;
}

// CLEARING INPUT VALUES
function clearInputFields(id) {
  document.getElementById(id + "-field").value = "";
}

// FUNCTION TO CHECK EITHER IT'S A STRING OR NUMBER
function isNumber(n) {
  return !isNaN(parseFloat(n)) && !isNaN(n - 0);
}

// CHECK IF IT'S POSITIVE OR NOT
function isPositive(n) {
  let num = parseFloat(n);

  if (num >= 0) {
    return true;
  } else {
    return false;
  }
}

// EVENT HANDALER FOR CALCULATE BUTTON
var calculateButton = document.getElementById("calculateBtn");
calculateButton.addEventListener("click", function () {
  var incomeInput = getValueOf("income");
  var foodInput = getValueOf("food");
  var rentInput = getValueOf("rent");
  var clothesInput = getValueOf("clothes");

  //   ERROR HANDALING FOR CALCULATE BUTTON

  if (isNumber(incomeInput) == false) {
    alert("Please enter a number in income field");
  } else if (isPositive(incomeInput) == false) {
    alert("Please try with positive valid numbers");
  } else if (isNumber(foodInput) == false) {
    alert("Please enter a number in food field");
  } else if (isPositive(foodInput) == false) {
    alert("Please try with positive valid numbers");
  } else if (isNumber(rentInput) == false) {
    alert("Please enter a number in rent field");
  } else if (isPositive(rentInput) == false) {
    alert("Please try with positive valid numbers");
  } else if (isNumber(clothesInput) == false) {
    alert("Please enter a number in clothes field");
  } else if (isPositive(clothesInput) == false) {
    alert("Please try with positive valid numbers");
  } else {
    var totalExpenses =
      parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(clothesInput);

    if (parseFloat(incomeInput) < totalExpenses) {
      alert("Your total expenses should be less then your income");
    } else {
      updateAmounts("total-expenses", totalExpenses);

      var balance = parseFloat(incomeInput) - totalExpenses;
      updateAmounts("balance", balance);

      //   CLEARING INPUT FIELDS
      clearInputFields("food");
      clearInputFields("rent");
      clearInputFields("clothes");
    }
  }
});

// EVENT HANDALER FOR SAVE BUTTON
var saveButton = document.getElementById("save-button");
saveButton.addEventListener("click", function () {
  var incomeInput = getValueOf("income");
  var savingPersentage = getValueOf("save");
  var balance = document.getElementById("balance");
  var saveAmount = document.getElementById("saving-amount");
  var remainingBalance = document.getElementById("reamaining-balance");

  //   ERROR HANDALING FOR SAVING BUTTON

  if (parseFloat(balance.innerText) == 0) {
    alert("Please calculate your current balance first");
  } else if (getValueOf("save") == "") {
    alert("Please enter your saving percrntage");
  } else if (isNumber(savingPersentage) == false) {
    alert("Please enter a number in your saving percrntage");
  } else if (isPositive(savingPersentage) == false) {
    alert("Please enter positive number in your saving percrntage");
  } else {
    var totalSavingAmount =
      (parseFloat(incomeInput) / 100) * parseFloat(savingPersentage);

    if (totalSavingAmount > parseFloat(balance.innerText)) {
      alert("Total saving amount should be less then your current balance");
    } else {
      updateAmounts("saving-amount", totalSavingAmount);
      remainingBalance.innerText =
        parseFloat(balance.innerText) - parseFloat(saveAmount.innerText);

      clearInputFields("save");
    }
  }
});
