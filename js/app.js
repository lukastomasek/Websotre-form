let $sBtn = document.getElementById("check-out-btn");
let $state = document.getElementById("s-state");
let $quantity = document.getElementById("quantity");
let $totalTxt = document.getElementById("check-out-txt");
let $fedex = document.getElementById("fedex");
let $parcel = document.getElementById("parcel");
let taxVal;
let total;
let itemsVal;
let shippingCost;

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
  // checking  if all requirements are filled out before proceeding with payment
  if ($state.value === "") {
    $state.focus();
    alert("choose country");
    return;
  }
  if ($quantity.value === "") {
    $quantity.focus();
    alert("add items to your cart!");
    return;
  }

  if (!$fedex.checked && !$parcel.checked) {
    alert("choose shipping options!");
    return;
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
  console.log(`your total price is : $ ${total.toFixed(2)} `);
  $totalTxt.innerText = `your total price is : $ ${total.toFixed(2)} `;
});
