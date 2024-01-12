function createScrollObserver() {
  const scrollBlockedEl = document.querySelector("[ap-scrollblock=true]");

  function preventDefaultScroll(event) {
    if (scrollBlockedEl && scrollBlockedEl.offsetParent !== null) {
      event.preventDefault();
    }
  }

  if (scrollBlockedEl) {
    const observer = new MutationObserver(function (mutationsList) {
      for (const mutation of mutationsList) {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "style"
        ) {
          if (scrollBlockedEl.offsetParent !== null) {
            window.addEventListener("scroll", preventDefaultScroll);
          } else {
            window.removeEventListener("scroll", preventDefaultScroll);
          }
        }
      }
    });

    observer.observe(scrollBlockedEl, { attributes: true });
  }
}

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  createScrollObserver();

  // Detect when the element is added to the DOM
  const observer = new MutationObserver(function (mutationsList) {
    for (const mutation of mutationsList) {
      for (const node of mutation.addedNodes) {
        if (
          node.nodeType === Node.ELEMENT_NODE &&
          node.getAttribute("ap-scrollblock") === "true"
        ) {
          createScrollObserver();
        }
      }
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
});
