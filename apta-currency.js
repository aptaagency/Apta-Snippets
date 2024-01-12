function formatCurrency() {
  var elements = document.querySelectorAll('[ap-currency="us"]');
  elements.forEach(function (element) {
    var value = element.textContent;
    var formattedValue = Number(value).toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });
    element.textContent = formattedValue;
  });
}

document.addEventListener("DOMContentLoaded", formatCurrency);
