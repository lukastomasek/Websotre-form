let $sBtn = document.getElementById("check-out-btn");
let $state = document.getElementById("s-state");
let $quantity = document.getElementById("quantity");
let taxVal;
let total;
let itemsVal;
let shippingCost;
let radioName = "check";

window.addEventListener("DOMContentLoaded", function () {
  $state.addEventListener("change", function () {
    event.preventDefault();
    // checking tax
    switch ($state.value) {
      case "CA":
        taxVal = 13;
        break;
      case "US":
        taxVal = 10;
        break;
      case "EU":
        taxVal = 21;
        break;
    }
  });
});
$sBtn.addEventListener("click", function () {
  if ($state.value === "") {
    $state.focus();
    alert("choose country");
  }
  // checking shipping cost
  if (document.getElementById("fedex").checked) {
    shippingCost = parseInt(document.getElementById("fedex").value, 10);
  } else if (document.getElementById("parcel").checked) {
    shippingCost = parseInt(document.getElementById("parcel").value);
  }

  // adding up to total value
  itemsVal = (parseInt($quantity.value, 10) || 0) * 12.99;
  taxVal = Math.floor(taxVal) * 100;
  total = itemsVal + shippingCost + taxVal / 100;
  console.log(`$ ${total.toFixed(2)} `);
});
