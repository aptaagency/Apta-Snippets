document.addEventListener("DOMContentLoaded", function () {
  const requiredElements = document.querySelectorAll(
    "[ap-data-required-input]"
  );
  const submitButton = document.querySelector("[ap-data-submit-button]");

  const validateFields = () => {
    let allValid = true;

    requiredElements.forEach((element) => {
      if (element.type === "checkbox") {
        if (!element.checked) allValid = false;
      } else {
        if (!element.value.trim()) allValid = false;
      }
    });

    submitButton.disabled = !allValid;
  };

  submitButton.disabled = true;

  requiredElements.forEach((element) => {
    element.addEventListener("input", validateFields);

    if (element.type === "checkbox") {
      element.addEventListener("change", validateFields);
    }
  });
});
