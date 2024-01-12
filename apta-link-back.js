document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("click", function (event) {
    // Check if the clicked element or any of its parents have the 'ap-link="back"' attribute
    let target = event.target;
    while (target != null) {
      if (target.getAttribute && target.getAttribute("ap-link") === "back") {
        event.preventDefault(); // Prevent default action (if any)
        window.history.back(); // Go back to the previous page
        return;
      }
      target = target.parentElement;
    }
  });
});
