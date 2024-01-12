document.addEventListener("DOMContentLoaded", function () {
  var urlParams = new URLSearchParams(window.location.search);

  urlParams.forEach((value, key) => {
    var input = document.querySelector('input[name="' + key + '"]');
    if (input) {
      input.value = decodeURIComponent(value);
    }
  });
});
