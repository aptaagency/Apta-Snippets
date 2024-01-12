// Get the rich text field element using attribute selector
var richTextField = document.querySelector('[ap-reading-time="target"]');

// Get the text block element for displaying the reading time using attribute selector
var textBlock = document.querySelector('[ap-reading-time="time"]');

// Calculate reading time
function calculateReadingTime() {
  // Get the content of the rich text field
  var content = richTextField.innerText;

  // Set the average reading speed (words per minute)
  var wordsPerMinute = 200;

  // Calculate the number of words in the content
  var wordCount = content.trim().split(/\s+/).length;

  // Calculate the reading time in minutes
  var readingTime = Math.ceil(wordCount / wordsPerMinute);

  // Update the reading time in the text block
  textBlock.innerText = readingTime;
}

// Call the calculateReadingTime function initially
calculateReadingTime();

// Call the calculateReadingTime function whenever the rich text field content changes
richTextField.addEventListener("input", calculateReadingTime);
