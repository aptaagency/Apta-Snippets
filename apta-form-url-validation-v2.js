// Regular expression for URL validation
const urlPattern = /^(https?|ftp):\/\/(-\.)?([^\s/?\.#-]+\.?)+([^\s/?\.#-]+)?(\/[^\s]*)?$/;

// Function to check if the input value is a valid URL
function isValidUrl(value) {
  return urlPattern.test(value);
}

// Get all input elements that need URL validation
const inputs = document.querySelectorAll("input[data-url=true]");

// Get the text input element that does not require URL validation
const textInput = document.querySelector("input[data-url=false]");

// Loop through all input elements and add event listener to each one
inputs.forEach(function (input) {
  // Get the corresponding hidden message element
  const message = document.querySelector(`[data-for="${input.id}"]`);
  // Hide the message initially
  message.style.display = "none";

  input.addEventListener("input", function () {
    validateInput(input, message);
  });
});

// Add event listener to text input element
textInput.addEventListener("input", function () {
  // Get the corresponding hidden message element
  const message = document.querySelector(`[data-for="${textInput.id}"]`);
  // Hide the message initially
  message.style.display = "none";
});

// Helper function to validate input value and show/hide message
function validateInput(input, message) {
  const value = input.value;
  const isValid = isValidUrl(value);
  // Show or hide the message based on the input validity
  if (isValid) {
    message.style.display = "none";
    input.classList.remove("invalid");
  } else {
    message.style.display = "block";
    input.classList.add("invalid");
  }
}
