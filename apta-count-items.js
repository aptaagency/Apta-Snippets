document.addEventListener("DOMContentLoaded", (event) => {
  const items = document.querySelectorAll('[ap-count-items="item"]');
  const itemCount = items.length;

  const displayElement = document.querySelector('[ap-count-items="number"]');
  if (displayElement) {
    displayElement.textContent = itemCount;
  }
});
