document.addEventListener("DOMContentLoaded", function () {
  // Handle form submission
  var form = document.querySelector('[ap-query-param="form"]');
  if (form) {
    form.addEventListener("submit", function (event) {
      setTimeout(function () {
        var formData = new FormData(form);
        var queryParams = new URLSearchParams(formData).toString();
        var newUrl = window.location.href.split("?")[0] + "?" + queryParams;
        window.history.pushState({ path: newUrl }, "", newUrl);

        // Update button href after form submission
        var button = document.querySelector('[ap-query-param="button"]');
        if (button) {
          button.href = "/assessment" + "?" + queryParams;
        }
      }, 1000); // Adjust the timeout as needed
    });
  }
});
