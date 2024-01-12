// get the button element by its ID
const consentButton = document.getElementById("podcast-consent");

// add a click event listener to the button
consentButton.addEventListener("click", function () {
  // get the current date and time
  const now = new Date();

  // format the date and time as a string
  const dateTimeString = now.toLocaleString();

  // get the consent date input element by its ID
  const consentDateInput = document.getElementById("consent-date");

  // set the value of the consent date input to the formatted date and time string
  consentDateInput.value = dateTimeString;

  // disable the consent date input element
  consentDateInput.disabled = true;
});
