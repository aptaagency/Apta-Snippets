// Selects all HTML elements that have the "ap-spin-element" attribute
const elements = document.querySelectorAll("[ap-spin-element]");

// Checks if a specific HTML element is visible on the user's screen
function isInView(element) {
  const positions = element.getBoundingClientRect();
  const start = positions.top;
  const end = positions.bottom;

  if (start >= 0 && end <= window.innerHeight) {
    return true;
  }

  return false;
}

// Executes the logic needed to animate the elements that are visible on the screen
function animateElementsInView(elements) {
  elements.forEach((element) => {
    const totalDuration = 2000;
    const interval = 16;
    const steps = totalDuration / interval;
    if (isInView(element) && !element.classList.contains("animated")) {
      element.classList.add("animated");
      const finalValue = parseInt(element.textContent, 10);
      const increment = finalValue / steps;
      let currentValue = 0;
      let currentStep = 0;

      const update = () => {
        element.textContent = currentValue.toFixed(0);
        currentValue += increment;
        currentStep++;

        if (currentStep < steps) {
          setTimeout(update, interval);
        } else {
          element.textContent = finalValue;
        }
      };

      setTimeout(update, interval);
    }
  });
}

// Calls the function responsible for the animation
function scrollAnimation() {
  animateElementsInView(elements);
}

// Triggers the animation event when the page has loaded and the bar slides
window.addEventListener("load", () => {
  window.addEventListener("scroll", scrollAnimation);
});

// Triggers the animation event when the page has loaded
window.addEventListener("load", scrollAnimation);
