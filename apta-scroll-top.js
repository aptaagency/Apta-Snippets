document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector('[ap-scroll-top="trigger"]');
  const target = document.querySelector('[ap-scroll-top="target"]');

  button.addEventListener("click", function () {
    target.scrollIntoView({ behavior: "smooth" });
  });
});
