## apta-copy-v2.js

### Objective:
The purpose of this code is to enable the copying of frontend information to the system's clipboard when specific buttons are clicked and easily scalable.

### Basic Requirements:
For the solution to work as intended, it's important that:
1. **Use Attributes Correctly:** All attributes listed in the next section must be applied to the necessary elements.
2. **Follow Element Structure:** Elements triggering the copy-to-clipboard event must be structurally close to the element containing the information to be copied. Specifically, they must share the same parent element. Within this same parent element, there should be no other elements related to the copying process, only elements pertaining to copying a single piece of information. For copying all information, this element must be positioned directly to its left.

### Elements and Attributes Used:
1. **Individual Copy Buttons:**
   - **Custom Attribute:** `ap="button_copy"`
   - **Functionality:** Clicking these buttons copies the specific text near them to the clipboard.

2. **General Copy Buttons:**
   - **Custom Attribute:** `ap="button_copy_all"`
   - **Functionality:** Clicking these buttons selects and copies the text from a specific adjacent element to the clipboard, maintaining formatting.

3. **Text Elements for Copying:**
   - **Custom Attribute:** `ap="copy_value"`
   - **Functionality:** These elements contain the text to be copied to the clipboard. They are located near the individual copy buttons (`[ap="button_copy"]`).

### Code Operation:
1. **Individual Copy Buttons (`[ap="button_copy"]`):**
   - When one of these buttons is clicked, the `click` event is triggered.
   - It finds the parent element (`divParent`) of the clicked button.
   - Locates the text to be copied within this parent element using the selector `[ap="copy_value"]`.
   - Uses the browser API `navigator.clipboard.writeText()` to copy the extracted text to the clipboard.

2. **General Copy Buttons (`[ap="button_copy_all"]`):**
   - When one of these buttons is clicked, the `click` event is triggered.
   - Finds the previous adjacent element to the clicked button.
   - Creates a range to select all content within this element.
   - Retrieves the current selection from the browser and removes any existing selection.
   - Adds the created range to the selection.
   - Uses `document.execCommand("copy")` to copy the selected content to the clipboard, maintaining formatting.
   - Clears the selection after copying.

### Notes:
- For the general copy (`[ap="button_copy_all"]`), the `document.execCommand("copy")` method is used to maintain the formatting of the copied text. For individual copy (`[ap="button_copy"]`), the `navigator.clipboard.writeText()` API is used to copy plain text.

- The solution was designed to be more general and applicable to the domain for which the code was initially developed. To encompass more possibilities, the difficulty and complexity of the code would increase, necessitating customizations to make it work in other structures as desired.

- Both the documentation and code are written in JavaScript and rely on modern browser features like the `navigator.clipboard` API. They may not function correctly in older browsers or restricted environments.


## apta-copy-clipboard.js

### Objective:
The purpose of this code is to copy text content to the system's clipboard when a specific trigger element is clicked.

### Basic Requirements:
For this solution to function properly, it is essential to:
1. **Use Attributes Correctly:** Ensure that the specified attributes are correctly applied to the necessary elements.
2. **Follow Element Structure:** The trigger element (`[ap-copy="trigger"]`) must be structurally associated with the target element (`[ap-copy="target"]`). There should be no other elements involved in the copying process within the same parent element as the target; only the trigger element should initiate the copying process.

### Elements and Attributes Used:
1. **Trigger Element:**
   - **Custom Attribute:** `ap-copy="trigger"`
   - **Functionality:** Clicking this element initiates the copy action.

2. **Target Element for Copying:**
   - **Custom Attribute:** `ap-copy="target"`
   - **Functionality:** This element contains the text content to be copied to the clipboard. It is linked to the trigger element (`[ap-copy="trigger"]`).

### Code Operation:
- **Trigger Event Listener:**
   - Listens for a click event on the trigger element (`[ap-copy="trigger"]`).
   - Creates a range and selects the content within the target element.
   - Clears any existing selection within the browser window.
   - Adds the created range to the selection.
   - Uses `document.execCommand("copy")` to copy the selected content to the clipboard.
   - Clears the selection after copying.

### Notes:
- This code is designed specifically for copying text content associated with a trigger element to the clipboard.
- It utilizes the browser's built-in `document.execCommand("copy")` method to perform the copying action.
- The trigger element initiates the copying process, selecting and copying the text content present in the associated target element.


## apta-count-items.js

### Objective:
The purpose of this code is to count and display the number of items identified by a specific attribute when the DOM content has been fully loaded.

### Basic Requirements:
For the code to function correctly, it is necessary to:
1. **Use Attributes Appropriately:** Ensure the correct application of the specified attribute (`ap-count-items="item"`) to the relevant elements that represent the items for counting.
2. **Access the Display Element:** Identify and use an element marked with the attribute `ap-count-items="number"` to display the count of items.

### Elements and Attributes Used:
1. **Items to be Counted:**
   - **Custom Attribute:** `ap-count-items="item"`
   - **Functionality:** These elements represent individual items that will contribute to the total count.

2. **Display Element for Item Count:**
   - **Custom Attribute:** `ap-count-items="number"`
   - **Functionality:** This element is responsible for displaying the total count of items.

### Code Operation:
- **DOMContentLoaded Event Listener:**
   - Listens for the event indicating that the DOM content has been fully loaded.
   - Queries all elements marked with the attribute `[ap-count-items="item"]` to gather the items for counting.
   - Calculates the total count of these items.
   - Retrieves the display element marked with `[ap-count-items="number"]` and assigns the total count to its `textContent` property to show the item count.

### Notes:
- This code operates by counting elements that possess a specific attribute (`ap-count-items="item"`) and then updates another designated element (`ap-count-items="number"`) with the calculated item count.
- It is important to ensure that the attribute `ap-count-items="item"` is appropriately applied to all elements that constitute the items for counting.
- Similarly, the attribute `ap-count-items="number"` must be placed on the element intended to display the total count of items.

## apta-currency.js

### Objective:
The purpose of this code is to format currency values represented in the DOM according to the US currency format when the DOM content has been fully loaded.

### Basic Requirements:
For the code to function correctly, it is essential to:
1. **Correctly Utilize the Attribute:** Apply the attribute `ap-currency="us"` appropriately to elements containing currency values that need formatting.
2. **Trigger the Formatting Function:** Ensure that the function `formatCurrency()` is invoked once the DOM content has fully loaded.

### Elements and Attributes Used:
1. **Currency Elements to be Formatted:**
   - **Custom Attribute:** `ap-currency="us"`
   - **Functionality:** Elements marked with this attribute contain currency values that should be formatted in US currency style.

### Code Operation:
- **formatCurrency Function:**
   - Retrieves all elements marked with the attribute `[ap-currency="us"]` using `querySelectorAll`.
   - Iterates through each identified element.
   - Extracts the text content from each element, assuming it represents a currency value.
   - Converts the extracted value to a formatted US currency string using `Number().toLocaleString()` with options for US currency.
   - Updates the element's text content to display the newly formatted currency value.

- **DOMContentLoaded Event Listener:**
   - Listens for the event indicating that the DOM content has been fully loaded.
   - Calls the `formatCurrency()` function, initiating the process of formatting currency values for all elements marked with `[ap-currency="us"]`.

### Notes:
- This code specifically targets elements with the attribute `ap-currency="us"` and formats their text content to display currency values in the US currency format.
- The `Number().toLocaleString()` method is employed to achieve the currency formatting according to the options specified (`style: "currency"` and `currency: "USD"`).
- Ensure that elements containing currency values have the attribute `ap-currency="us"` appropriately assigned to trigger the currency formatting operation once the DOM has finished loading.


## apta-current-year.js

### Objective:
The purpose of this code is to dynamically retrieve the current year using JavaScript and display it within an HTML element with the ID "currentYear".

### Code Explanation:
- `const currentYear = new Date().getFullYear();`: This line generates a new `Date` object, retrieves the current year using the `getFullYear()` method, and assigns it to the variable `currentYear`.

- `document.getElementById("currentYear").textContent = currentYear;`: This line locates the HTML element with the ID "currentYear" using `getElementById()`. Once the element is found, it sets its `textContent` property to display the value stored in the `currentYear` variable, effectively updating the content of that HTML element to show the current year.

### Notes:
- This script is a straightforward JavaScript operation that dynamically fetches the current year and injects it into the designated HTML element identified by the ID "currentYear".
- Ensure that an HTML element with the ID "currentYear" exists in the document's structure for this script to successfully display the current year.
- The script does not require any event listeners or additional triggers, as it instantly sets the current year within the specified HTML element upon script execution.


## apta-form-consent-timestamp.js

### Objective:
This code snippet aims to accomplish the following tasks when a button with the ID "podcast-consent" is clicked:
1. Retrieve the current date and time.
2. Format the date and time as a string.
3. Set this formatted date and time string as the value of an input element with the ID "consent-date".
4. Disable the input element for the consent date after setting its value.

### Code Explanation:
- `const consentButton = document.getElementById("podcast-consent");`: This line retrieves the HTML button element by its ID "podcast-consent" and assigns it to the variable `consentButton`.

- `consentButton.addEventListener("click", function () { ... });`: This section adds a click event listener to the button referenced by `consentButton`. When this button is clicked, the provided function is executed.

- Inside the click event listener function:
   - `const now = new Date();`: This line creates a new `Date` object, capturing the current date and time.
   - `const dateTimeString = now.toLocaleString();`: It converts the `now` object to a string representation of the date and time using `toLocaleString()`, formatting it according to the browser's default locale settings.
   - `const consentDateInput = document.getElementById("consent-date");`: This line retrieves the input element with the ID "consent-date" and assigns it to the variable `consentDateInput`.
   - `consentDateInput.value = dateTimeString;`: It sets the `value` attribute of the `consentDateInput` element to the formatted date and time string obtained previously.
   - `consentDateInput.disabled = true;`: Finally, this line disables the `consentDateInput` element, preventing further user input.

### Notes:
- This script assumes there is an HTML button element with the ID "podcast-consent" and an input element with the ID "consent-date" in the HTML document.
- Upon clicking the "podcast-consent" button, the current date and time will be set as the value of the "consent-date" input element, which will subsequently become disabled, preventing further modifications.
- Ensure the appropriate IDs exist in the HTML structure for this script to work as intended.


## apta-form-url-validation-v2.js

### Objective:
This script aims to perform URL validation on specified input elements and display corresponding error messages when the provided input is invalid.

### Code Explanation:
- **Regular Expression for URL Validation:**
  - `const urlPattern = /^(https?|ftp):\/\/(-\.)?([^\s/?\.#-]+\.?)+([^\s/?\.#-]+)?(\/[^\s]*)?$/;`: This line defines a regular expression pattern (`urlPattern`) used to validate URLs. It checks if the provided input matches a standard URL format.

- **isValidUrl Function:**
  - `function isValidUrl(value) { return urlPattern.test(value); }`: This function checks whether the provided value matches the defined URL pattern using `urlPattern.test(value)`. It returns `true` if the value is a valid URL; otherwise, it returns `false`.

- **Input Element Selection for Validation:**
  - `const inputs = document.querySelectorAll("input[data-url=true]");`: This line selects all input elements with the attribute `data-url="true"` for URL validation.
  - `const textInput = document.querySelector("input[data-url=false]");`: This line selects a single text input element marked with `data-url="false"`, indicating it doesn't require URL validation.

- **Event Listeners and Validation Loop:**
  - The script attaches an event listener to each input element selected for URL validation using `inputs.forEach`.
  - Additionally, an event listener is attached to the single text input (`textInput`) that doesn't require URL validation.

- **validateInput Function:**
  - `function validateInput(input, message) { ... }`: This function performs the input validation and toggles the display of an error message based on the validity of the input. It:
    - Retrieves the input's value and checks its validity using `isValidUrl(value)`.
    - Displays or hides the corresponding error message based on the input's validity.
    - Adds/removes the CSS class "invalid" to highlight an invalid input, if necessary.

### Notes:
- The script assumes the presence of HTML input elements with specific attributes (`data-url="true"` and `data-url="false"`) for URL validation and error message handling.
- Error messages for invalid URLs are expected to be present in hidden message elements and will be displayed if an invalid URL is detected in the corresponding input.
- The script uses CSS classes (like "invalid") to visually indicate invalid input fields. Ensure appropriate CSS styles exist for these classes to achieve the desired visual effect.


## apta-get-param.js
### Objective:
The script aims to execute upon the completion of the document's initial HTML and DOM loading (`DOMContentLoaded`). It extracts query parameters from the URL and populates input fields in the document's form with corresponding parameter values.

### Code Explanation:
- **DOMContentLoaded Event Listener:**
  - `document.addEventListener("DOMContentLoaded", function () { ... });`: This event listener waits for the DOM content to be fully loaded before executing its attached function.

- **Retrieving URL Parameters:**
  - `var urlParams = new URLSearchParams(window.location.search);`: This line creates a new `URLSearchParams` object, extracting the query parameters from the URL.

- **Populating Input Fields:**
  - The `urlParams.forEach` loop iterates through each key-value pair in the URL query parameters.
  - `var input = document.querySelector('input[name="' + key + '"]');`: It attempts to find an input element with a `name` attribute matching the key from the query parameters.
  - `if (input) { input.value = decodeURIComponent(value); }`: When a matching input element is found, it decodes the parameter value using `decodeURIComponent()` and sets it as the value of the corresponding input field.

### Notes:
- This script expects the URL to contain query parameters (e.g., `?key1=value1&key2=value2`) which will be used to populate the form input fields.
- It specifically targets input elements within the document's form structure, using their `name` attributes to match them with query parameters and populate their values accordingly.
- The script decodes URL-encoded parameter values to handle special characters appropriately before inserting them into the input fields.


## apta-link-back.js
### Objective:
The script is designed to listen for the `DOMContentLoaded` event and, upon a click event on an element or its parent(s) marked with the attribute `ap-link="back"`, trigger a navigation action to the previous page in the browser history.

### Code Explanation:
- **DOMContentLoaded Event Listener:**
  - `document.addEventListener("DOMContentLoaded", function () { ... });`: This event listener waits for the initial HTML document and its dependencies to be fully loaded before executing its associated function.

- **Click Event Listener:**
  - `document.addEventListener("click", function (event) { ... });`: This attaches a click event listener to the entire document. Upon any click event within the document, the defined function will be executed.

- **Checking for Attribute `ap-link="back"`:**
  - `let target = event.target;`: This line captures the element that was clicked (`event.target`).
  - The script then checks if the clicked element or any of its parent elements have the attribute `ap-link="back"`. It traverses up the DOM tree (`target.parentElement`) until it finds an element with the specified attribute.
  - If an element with the attribute `ap-link="back"` is found, it prevents the default action (`event.preventDefault()`) and navigates the browser to the previous page in the history (`window.history.back()`).

### Notes:
- This script aims to create a generic back-navigation functionality for elements marked with the attribute `ap-link="back"`.
- When an element with this attribute or any of its parent elements are clicked, it triggers the browser to navigate back in the history, simulating a back button functionality.
- Ensure that elements or their parents intended to trigger the back-navigation action have the attribute `ap-link="back"` appropriately set in the HTML structure.


## apta-query-param.js
### Objective:
The script, upon the DOM content being fully loaded (`DOMContentLoaded`), is designed to handle form submissions marked with the attribute `ap-query-param="form"`. Upon form submission, it extracts form data, constructs a query parameter string, updates the URL without refreshing the page using `history.pushState`, and modifies a button's `href` attribute based on the form submission.
### Code Explanation:
- **DOMContentLoaded Event Listener:**
  - `document.addEventListener("DOMContentLoaded", function () { ... });`: This event listener waits for the complete loading of the DOM content before executing its associated function.

- **Handling Form Submission:**
  - `var form = document.querySelector('[ap-query-param="form"]');`: This line selects the form element marked with the attribute `ap-query-param="form"`.
  - If such a form element exists (`if (form)`), it attaches a `submit` event listener to the form.

- **Form Submission Event Listener:**
  - Upon form submission (`form.addEventListener("submit", function (event) { ... });`), the script:
    - Delays execution by 1 second using `setTimeout()` to ensure any default form submission behavior is delayed.
    - Collects form data using `FormData(form)` and converts it into a query parameter string with `URLSearchParams(formData).toString()`.
    - Constructs a new URL without refreshing the page using `window.history.pushState()`, updating the URL with the newly constructed query parameters.
    - Finds and updates a button's `href` attribute (`button.href`) with the modified query parameter string, directing it to a new page ("/assessment" in this case) based on the form submission.

### Notes:
- The script assumes the presence of a form element in the HTML structure marked with the attribute `ap-query-param="form"` for query parameter handling upon submission.
- The delay (`setTimeout()`) might serve to ensure any necessary form handling completes before modifying the URL.
- Adjust the timeout duration (`1000` milliseconds) as needed based on the specific requirements or time required for form submission handling.
- Ensure the button to be updated (`[ap-query-param="button"]`) exists and is appropriately targeted for the URL modification upon form submission.


## apta-reading-time.js
### Objective:
This script calculates and displays the estimated reading time for the content within a rich text field upon the loading of the document and updates it dynamically whenever the content in the field changes.

### Code Explanation:
- **Selecting Elements:**
  - `var richTextField = document.querySelector('[ap-reading-time="target"]');`: This line selects the rich text field element marked with the attribute `ap-reading-time="target"`.
  - `var textBlock = document.querySelector('[ap-reading-time="time"]');`: This line selects the text block element for displaying the reading time marked with the attribute `ap-reading-time="time"`.

- **Function to Calculate Reading Time:**
  - `function calculateReadingTime() { ... }`: This function calculates the reading time estimation.
    - Retrieves the content of the rich text field using `innerText`.
    - Sets the average reading speed as 200 words per minute (`wordsPerMinute = 200`).
    - Calculates the number of words in the content by trimming extra spaces and splitting by whitespace using a regular expression.
    - Calculates the estimated reading time in minutes by dividing the word count by the words per minute and rounding up (`Math.ceil()`).
    - Updates the reading time in the designated text block by setting its `innerText` to the calculated reading time.

- **Initial Calculation and Event Listener:**
  - `calculateReadingTime();`: This line initially calculates and displays the reading time based on the content present in the rich text field.
  - `richTextField.addEventListener("input", calculateReadingTime);`: This line adds an event listener to the rich text field. Whenever the content changes (`input` event), the `calculateReadingTime()` function is called again to recalculate and update the reading time dynamically.

### Notes:
- This script assumes the presence of specific HTML elements marked with attributes (`ap-reading-time="target"` for the rich text field and `ap-reading-time="time"` for the text block) to calculate and display the reading time.
- The reading speed is set to an average of 200 words per minute, which may be adjusted according to different reading speeds.
- Ensure the proper HTML structure and the corresponding attributes for the rich text field and the text block exist for this script to function as intended.

## apta-scroll-block.js
### Objective:
This script sets up a scroll observer that prevents default scrolling behavior when a specific element (marked with the attribute `ap-scrollblock="true"`) is visible in the DOM or when its styling changes to make it visible.

### Code Explanation:
- **`createScrollObserver()` Function:**
  - This function creates a scroll observer.
  - It retrieves the element marked with `[ap-scrollblock=true]` using `document.querySelector("[ap-scrollblock=true]")` as `scrollBlockedEl`.
  - `preventDefaultScroll(event)` function is defined inside `createScrollObserver()` to prevent default scrolling behavior when `scrollBlockedEl` is visible.

- **DOMContentLoaded Event Listener:**
  - `document.addEventListener("DOMContentLoaded", function () { ... });`
  - Calls `createScrollObserver()` initially when the DOM content has fully loaded.

- **Scroll Observation with MutationObserver:**
  - It sets up a `MutationObserver` to observe changes in the `scrollBlockedEl` element's attributes, specifically the `style` attribute.
  - Whenever the `style` attribute of `scrollBlockedEl` changes, it checks if the element is visible (`offsetParent !== null`).
  - If the element is visible, it attaches the `preventDefaultScroll` function to the `window`'s scroll event using `window.addEventListener("scroll", preventDefaultScroll)`. If not visible, it removes this event listener.

- **Observing DOM Changes:**
  - Another `MutationObserver` observes changes in the `document.body` and its subtree for added nodes.
  - When a node is added and has the attribute `ap-scrollblock="true"`, it calls `createScrollObserver()` again to set up a new scroll observer for the newly added element.

### Notes:
- This script assumes the presence of elements marked with the attribute `ap-scrollblock="true"` whose visibility or styling will affect the scrolling behavior.
- The scroll observer prevents default scrolling when the specified element or its visibility changes.
- Ensure that the specified attribute (`ap-scrollblock="true"`) is appropriately set in the HTML structure for the elements that need this scroll-blocking behavior.


## apta-scroll-top.js
### Objective:
This script is intended to scroll smoothly to a specific target element in the document when a designated button, marked with the attribute `ap-scroll-top="trigger"`, is clicked. The target element is identified using the attribute `ap-scroll-top="target"`.

### Code Explanation:
- **DOMContentLoaded Event Listener:**
  - `document.addEventListener("DOMContentLoaded", function () { ... });`
  - This event listener waits for the DOM content to be fully loaded before executing its associated function.

- **Selecting Elements and Adding Click Event:**
  - `const button = document.querySelector('[ap-scroll-top="trigger"]');`: Selects the button element marked with the attribute `ap-scroll-top="trigger"`.
  - `const target = document.querySelector('[ap-scroll-top="target"]');`: Selects the target element in the document marked with the attribute `ap-scroll-top="target"` that needs to be scrolled into view.
  - `button.addEventListener("click", function () { ... });`: Adds a click event listener to the button.

- **Scrolling to the Target Element:**
  - When the designated button is clicked, it triggers the function inside the click event listener.
  - `target.scrollIntoView({ behavior: "smooth" });`: Scrolls the `target` element into view smoothly with the behavior set to "smooth". This smooth scrolling effect is provided by the `behavior: "smooth"` property of `scrollIntoView()`.

### Notes:
- This script assumes the presence of a button and a corresponding target element marked with the specified attributes (`ap-scroll-top="trigger"` and `ap-scroll-top="target"`, respectively).
- When the designated button is clicked, the page will smoothly scroll to bring the identified target element into view. Ensure these attributes are correctly set in the HTML structure for the script to function as intended.


## apta-share-url.js
### Objective:
This script targets elements marked with attributes `ap-social-share="url"` and `ap-social-share="message"`. When the element with the `ap-social-share="url"` attribute is clicked, it copies the current URL to the clipboard and displays a message in an element marked with `ap-social-share="message"`.

### Code Explanation:
- **Finding Elements:**
  - `const shareUrlElement = document.querySelector('[ap-social-share="url"]');`: Selects the element with the attribute `ap-social-share="url"`.
  - `const shareMessageElement = document.querySelector('[ap-social-share="message"]');`: Selects the element with the attribute `ap-social-share="message"`.

- **`copyUrlToClipboard()` Function:**
  - This function copies the current URL to the clipboard using the `navigator.clipboard.writeText()` method.
  - If successful, it logs a success message to the console, displays the message element (`shareMessageElement.style.display = "block"`), and hides it after 5 seconds (`setTimeout()`).
  - If an error occurs during copying, it logs an error message to the console.

- **Attaching Click Event Listener:**
  - `shareUrlElement.addEventListener("click", copyUrlToClipboard);`: Attaches a click event listener to the element marked with `ap-social-share="url"`. When this element is clicked, it triggers the `copyUrlToClipboard()` function.

### Notes:
- This script assumes the existence of elements with the specified attributes (`ap-social-share="url"` and `ap-social-share="message"`) in the HTML structure.
- Clicking the element marked with `ap-social-share="url"` will copy the current URL to the clipboard and display a message in the element marked with `ap-social-share="message"` for 5 seconds before hiding it.
- Ensure that the relevant HTML elements are properly configured with the specified attributes for the script to work as intended.


## apta-spinup-number.js

### Objective:
This script animates elements on a web page based on their visibility in the viewport. It triggers an animation for elements marked with the attribute `ap-spin-element`. When these elements come into view, a counting animation starts to increment their value from 0 to the specified value.

### Code Explanation:
- **`isInView(elem)` Function:**
  - Checks if a given element is within the viewport.
  - Calculates the positions of the viewport (`docViewTop` and `docViewBottom`) and the element (`elemTop` and `elemBottom`).
  - Returns `true` if the element is within the viewport; otherwise, returns `false`.

- **`animateElementsInView()` Function:**
  - Loops through all elements with the attribute `ap-spin-element`.
  - If an element is in view and hasn't been animated yet (`!$this.hasClass("animated")`), it triggers a counting animation using jQuery's `.animate()` function. This animation increments the element's text value from 0 to the specified value (`spinElementValue`) over 4000 milliseconds (`duration: 4000`) using the "swing" easing.

- **Triggering Animation:**
  - Attaches a scroll and resize event listener to the window using jQuery's `.on()` method. Whenever the window is scrolled or resized, it triggers the `animateElementsInView()` function to check and animate elements in view.

- **Triggering Animation on Page Load:**
  - Uses `$(document).ready()` (shorthand: `$(function(){ ... })`) to trigger the `animateElementsInView()` function when the document is fully loaded.

### Notes:
- This script relies on the jQuery library (`$`) to handle DOM manipulation and event handling.
- Elements with the attribute `ap-spin-element` are animated when they come into view during scrolling or resizing of the window. The animation increments the text value from 0 to the specified value.
- Ensure that elements intended for this animation have the attribute `ap-spin-element` with a numerical value specifying the target count.
- Any CSS animation or styling related to the `animated` class needs to be defined for the desired visual effect during the animation process.


## apta-spinup-numbersv2.js
### Objective:
The provided script is designed to animate elements marked with the attribute `ap-spin-element` when they become visible on the user's screen during scrolling. The animation involves incrementing the numerical content of these elements gradually until they reach their final value.

### Code Explanation:
- **Selecting Elements:**
  - `const elements = document.querySelectorAll("[ap-spin-element]");`: Selects all HTML elements with the attribute `ap-spin-element`.

- **`isInView(element)` Function:**
  - Determines whether a specific element is currently visible on the user's screen.
  - Uses `getBoundingClientRect()` to obtain the element's position relative to the viewport.
  - Returns `true` if the element is within the viewport's boundaries; otherwise, returns `false`.

- **`animateElementsInView(elements)` Function:**
  - Loops through the selected elements.
  - If an element is in view and hasn't been animated (`!element.classList.contains("animated")`), it initiates a counting animation for that element.
  - The animation increments the element's value gradually from 0 to its specified value using `setTimeout()` to update the element's text content incrementally over time.

- **`scrollAnimation()` Function:**
  - Calls `animateElementsInView(elements)` to trigger the animation logic for the selected elements.

- **Event Listeners:**
  - Attaches a `scrollAnimation` event listener to the `window` object when the page has fully loaded. This listener triggers the animation logic when the page is scrolled.

### Notes:
- This script doesn't rely on any external libraries; it uses vanilla JavaScript for DOM manipulation and animation.
- Elements with the attribute `ap-spin-element` will be animated incrementally as they come into view during scrolling, showing a smooth increase in their numerical content.
- Ensure that elements intended for this animation have the attribute `ap-spin-element`, representing a numerical value to animate to.
- The animation duration and smoothness are determined by `totalDuration`, `interval`, and the number of `steps`. Adjust these values as needed for different animation effects.


## gsapscript.js
    
**Objective:**

The provided GSAP (GreenSock Animation Platform) code creates a staggering animation on elements with the class `.gsap-stagger1`. The animation involves scaling these elements from 0 to their original size with a stagger effect triggered by the scroll position.

**Code Explanation:**

- **`gsap.from(".gsap-stagger1", {...})` Code Block:**
    - Uses GSAP to animate elements with the class `.gsap-stagger1`.
    - `scrollTrigger: ".gsap-stagger1"`: Associates the scroll trigger with the elements having the class `.gsap-stagger1`.
    - `scale: 0`: Initializes the elements with a scale of 0.
    - `stagger: { amount: 0.5, from: "center" }`: Staggers the animation with a delay of 0.5 seconds between each element, starting from the center.
    - `duration: 2`: Specifies the duration of the animation as 2 seconds.
    - `ease: "expo.out"`: Applies an easing function to the animation, giving it an expo-out effect.

**Notes:**

- GSAP (GreenSock Animation Platform) is a popular JavaScript library for creating high-performance animations.
- This code snippet uses GSAP's `from()` method to define the animation properties.
- The animation is triggered when the specified elements with the class `.gsap-stagger1` come into view during scrolling.
- Adjust the parameters (e.g., duration, scale, stagger amount) based on the desired animation effect.
- Ensure that the GSAP library is properly included and available in the project for this code to work.
