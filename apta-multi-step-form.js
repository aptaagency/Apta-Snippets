document.addEventListener("DOMContentLoaded", function () {
  let steps = document.querySelectorAll("[ap-multi-form='step']");
  let dataTextCurrentStep = document.querySelector(
    '[ap-multi-form="current-step"]'
  );
  let progressBar = document.querySelector("[ap-multi-form='progress-bar']");
  let currentStep = 0;
  let totalSteps = steps.length;
  let stepPercentage = 100 / totalSteps;

  function updateProgressBar() {
    let progress = (currentStep + 1) * stepPercentage;
    progressBar.style.width = `${progress}%`;
  }

  function showStep(index) {
    steps.forEach((step, i) => {
      step.style.display = i === index ? "block" : "none";
    });
    updateProgressBar();
  }

  document.querySelectorAll('[ap-multi-form="next-btn"]').forEach((button) => {
    button.addEventListener("click", function () {
      if (currentStep < steps.length - 1) {
        currentStep++;
        dataTextCurrentStep.textContent = currentStep + 1;
        showStep(currentStep);
      }
    });
  });

  document.querySelectorAll('[ap-multi-form="back-btn"]').forEach((button) => {
    button.addEventListener("click", function () {
      if (currentStep > 0) {
        currentStep--;
        dataTextCurrentStep.textContent = currentStep + 1;
        showStep(currentStep);
      }
    });
  });

  showStep(currentStep);
});
