// Find the element with the attribute ap-social-share="url"
const shareUrlElement = document.querySelector('[ap-social-share="url"]');

// Find the element with the attribute ap-social-share="message"
const shareMessageElement = document.querySelector(
  '[ap-social-share="message"]'
);

// Function to copy the URL to the clipboard
function copyUrlToClipboard() {
  const url = window.location.href;
  navigator.clipboard
    .writeText(url)
    .then(() => {
      // URL copied successfully
      console.log("URL copied to clipboard:", url);
      // Show the message element
      shareMessageElement.style.display = "block";
      // Hide the message element after 5 seconds
      setTimeout(() => {
        shareMessageElement.style.display = "none";
      }, 5000);
    })
    .catch((error) => {
      // Error occurred while copying URL
      console.error("Error copying URL to clipboard:", error);
    });
}

// Attach click event listener to the shareUrlElement
shareUrlElement.addEventListener("click", copyUrlToClipboard);
